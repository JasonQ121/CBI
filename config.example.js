// ============================================
// Supabase 配置文件示例
// ============================================
// 使用方法：
// 1. 复制这个文件为 config.js
// 2. 填入你的 Supabase 项目信息
// 3. 注意：config.js 应该添加到 .gitignore，不要提交到 GitHub
// ============================================

const SUPABASE_CONFIG = {
    // 项目 URL（从 Supabase Settings → API 获取）
    url: 'https://your-project-id.supabase.co',
    
    // Publishable key（用于用户提交数据，可以公开）
    // 如果使用 Legacy API keys，这里填 anon public key
    publishableKey: 'sb_publishable_your-key-here',
    
    // Secret key（用于管理后台，需要保密！）
    // 如果使用 Legacy API keys，这里填 service_role key
    // 注意：这个 key 不应该放在前端代码中，理想情况下应该通过后端 API 代理
    secretKey: 'sb_secret_your-key-here'
};

// 如果在浏览器环境中使用
if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
}

// 如果在 Node.js 环境中使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
