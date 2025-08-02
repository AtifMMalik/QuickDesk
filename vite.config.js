    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    
    export default defineConfig({
        server: {
            host: true, // allows access from network
        },
        plugins: [react()],
        base: '/QuickDesk/',
    })
