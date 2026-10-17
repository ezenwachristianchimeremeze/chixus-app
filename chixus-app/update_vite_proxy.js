import fs from 'fs';

let viteConfig = fs.readFileSync('vite.config.ts', 'utf8');

if (!viteConfig.includes('proxy')) {
  const proxySnippet = `
    server: {
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          secure: false,
        },
      },
    },`;
  
  viteConfig = viteConfig.replace('plugins:', `${proxySnippet}\n  plugins:`);
  fs.writeFileSync('vite.config.ts', viteConfig);
  console.log('Successfully added /api proxy to vite.config.ts!');
} else {
  console.log('Vite proxy configuration already present.');
}
