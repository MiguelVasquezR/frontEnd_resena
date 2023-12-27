import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 3000,  
    proxy: {
      '/socket.io': {
        target: 'ws://localhost:9900',
        ws: true,
      },
    }   
  },
});
