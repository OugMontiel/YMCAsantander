// subir.js
const fs = require('fs-extra');
const path = require('path');

const origen = path.resolve(__dirname, './dist');
const destino = 'C:/Users/gogoe/AppData/Roaming/Code/User/globalStorage/humy2833.ftp-simple/remote-workspace-temp/3fd4ee5048d1e932e58f724ec2fe72d9/public_html'; // Ruta local del FTP

fs.copy(origen, destino, { overwrite: true }, (err) => {
  if (err) {
    console.error('❌ Error al copiar los archivos:', err);
  } else {
    console.log('✅ ¡Build copiado exitosamente a la carpeta FTP local!');
  }
});
