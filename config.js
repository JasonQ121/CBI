⚠️ **重要**：由于 `config.js` 在 `.gitignore` 中，不会被自动推送，需要手动在 GitHub 上创建：
const SUPABASE_CONFIG = {
    // 项目 URL（从 Supabase Settings → API 获取）
    url: 'https://udcrdkncpnefqllehfkx.supabase.co',
    
    // Publishable key（用于用户提交数据，可以公开）
    // 如果使用 Legacy API keys，这里填 anon public key
    publishableKey: 'sb_publishable_55o0WC75x4Y8Ua1AVbY4bw_x6_v7qVD',
    
    // Secret key（用于管理后台，需要保密！）
    // 如果使用 Legacy API keys，这里填 service_role key
    // 注意：这个 key 不应该放在前端代码中，理想情况下应该通过后端 API 代理
    secretKey: 'sb_secret_30l-QN-KvhnTkq-aaeJI3Q_FHRE79VL'
};

// 如果在浏览器环境中使用
if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
}

// 如果在 Node.js 环境中使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
