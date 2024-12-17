import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import { fileURLToPath } from 'url'

// Compatibilidade com __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true
    },
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname,'./src/assets'),
    },
  },
});
