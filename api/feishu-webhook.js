// Vercel Serverless Function: 接收 Supabase Webhook 并转发到飞书
const FEISHU_WEBHOOK_URL = process.env.FEISHU_WEBHOOK_URL;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const payload = req.body;
    const record = payload.record || payload.new || payload;
    
    const message = {
      msg_type: "text",
      content: {
        text: `🔔 新的测评提交通知\n\n` +
              `👤 姓名：${record.user_name || '未填写'}\n` +
              `🏢 公司：${record.company_name || '未填写'}\n` +
              `📞 电话：${record.user_phone || '未填写'}\n` +
              `📊 业务类型：${record.business_type || '未知'}\n` +
              `⏰ 提交时间：${record.submit_time || record.created_at || new Date().toLocaleString('zh-CN')}\n\n` +
              `请及时查看管理后台处理。`
      }
    };
    
    if (!FEISHU_WEBHOOK_URL) {
      return res.status(500).json({ error: '飞书 Webhook URL 未配置' });
    }
    
    const response = await fetch(FEISHU_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(message)
    });
    
    const result = await response.json();
    
    if (result.code === 0) {
      return res.status(200).json({ success: true, message: '通知已发送到飞书' });
    } else {
      return res.status(500).json({ error: '飞书通知发送失败', feishu_result: result });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
