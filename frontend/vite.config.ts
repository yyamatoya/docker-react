import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    open: true, // 自動でブラウザを開く
    host: true,
    port: 3100,
  },
  build: {
    outDir: 'build', // ビルドの出力先ディレクトリ
  },
  plugins: [react()],
});