import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Simple dev middleware to serve files under /pub/* from the local public/ folder
function pubMiddleware() {
  return (req: any, res: any, next: any) => {
    try {
      const url = req.url || '';
      if (!url.startsWith('/pub/')) return next();
      const rel = url.replace('/pub/', '');
      const filePath = path.join(process.cwd(), 'public', rel);
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        res.statusCode = 404;
        return res.end('Not found');
      }
      const ext = path.extname(filePath).toLowerCase();
      const map: Record<string,string> = {
        '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.js': 'application/javascript', '.css': 'text/css', '.json': 'application/json'
      };
      const mime = map[ext] || 'application/octet-stream';
      res.setHeader('Content-Type', mime);
      const stream = fs.createReadStream(filePath);
      stream.pipe(res);
    } catch (err) {
      next(err);
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'dev-pub-middleware',
      configureServer(server: any) {
        server.middlewares.use(pubMiddleware());
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
