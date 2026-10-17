import fs from 'fs';

// Find files in src/ to see where the enrollment form lives
const files = fs.readdirSync('src', { recursive: true });
console.log('Project files:', files.filter(f => f.endsWith('.tsx') || f.endsWith('.ts')));
