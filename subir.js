import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const origen = path.resolve(__dirname, './dist');
const destino = 'C:/Github/FtpYmcaSantander/public_html';


async function copiarBuild() {
  try {
    const existeOrigen = await fs.pathExists(origen);
    if (!existeOrigen) {
      console.error(`❌ La carpeta origen no existe: ${origen}`);
      return;
    }
    console.log(`📂 Carpeta origen encontrada: ${origen}`);

    await fs.copy(origen, destino, { overwrite: true });
    console.log('✅ ¡Build copiado exitosamente a la carpeta FTP local!');
  } catch (err) {
    console.error('❌ Error al copiar los archivos:', err);
  }
}

copiarBuild();
