import fs from 'fs';

let content = fs.readFileSync('server.ts', 'utf8');

if (!content.includes('express.static')) {
  const staticCode = `
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'dist')));
`;

  content = content.replace("app.use(express.json());", "app.use(express.json());\n" + staticCode);
  
  const fallbackCode = `
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
`;
  content = content.replace("app.listen", fallbackCode + "\napp.listen");

  fs.writeFileSync('server.ts', content);
  console.log('Static file serving added to server.ts!');
} else {
  console.log('Static serving already configured.');
}
