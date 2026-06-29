import fs from 'fs';

const content = fs.readFileSync('node_modules/@google/genai/dist/web/index.mjs', 'utf8');
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('globalThis.fetch =') || lines[i].includes('window.fetch =')) {
    console.log(`Line ${i+1}: ${lines[i]}`);
  }
}
