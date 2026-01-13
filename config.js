const SUPABASE_CONFIG = {
    url: 'https://udcrdkncpnefqllehfkx.supabase.co',
    publishableKey: 'b_publishable_55o0WC75x4Y8Ua1AVbY4bw_x6_v7qVD',
    secretKey: 'sb_secret_30l-QN-KvhnTkq-aaeJI3Q_FHRE79VL'
};

if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
