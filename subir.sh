#!/bin/bash

# Configuración de FTP
HOST='ftp.tusitio.com'       # por ejemplo: ftp.colombiahosting.com
USER='tu_usuario_ftp'
PASS='tu_contraseña_ftp'
REMOTE_DIR='public_html'     # carpeta destino en el hosting

# Directorio local que se va a subir
LOCAL_DIR='dist'

echo "🔁 Subiendo archivos desde $LOCAL_DIR a $REMOTE_DIR en $HOST ..."

lftp -c "
open -u $USER,$PASS $HOST
mirror -R --delete --verbose $LOCAL_DIR $REMOTE_DIR
bye
"

echo "✅ Subida completada."
