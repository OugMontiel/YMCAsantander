// versionar.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const VERSION = '1.3.1'; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, 'dist', 'index.html');

if (!fs.existsSync(indexPath)) {
  console.error('❌ No se encontró index.html en dist/');
  process.exit(1);
}

let html = fs.readFileSync(indexPath, 'utf-8');

// Versiona solo archivos locales comunes: .js, .css, .ico, .png, .jpg, .jpeg, .svg
html = html.replace(/(href|src)=["']([^"']+\.(js|css|ico|png|jpg|jpeg|svg))["']/g, (match, attr, url) => {
  // Si ya contiene '?v=' no volver a versionar
  if (url.includes('?v=')) return match;
  return `${attr}="${url}?v=${VERSION}"`;
});

fs.writeFileSync(indexPath, html);
console.log(`✅ index.html actualizado con versión: v=${VERSION}`);
