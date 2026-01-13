const SUPABASE_CONFIG = {
    url: 'https://udcrdkncpnefqllehfkx.supabase.co',
    publishableKey: 'sb_publishable_55o0WC75x4Y8Ua1AVbY4bw_x6_v7qVD',
    service_roleKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVkY3Jka25jcG5lZnFsbGVoZmt4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODMwMDgxNCwiZXhwIjoyMDgzODc2ODE0fQ.eFUAdF_PJG1MfaoXo9hJvLGFbNt7DKZFmKMSo2QLqKo'
};

if (typeof window !== 'undefined') {
    window.SUPABASE_CONFIG = SUPABASE_CONFIG;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUPABASE_CONFIG;
}
