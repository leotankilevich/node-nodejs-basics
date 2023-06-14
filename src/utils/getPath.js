import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

function getPath(meta, slug) {
   const __filename = fileURLToPath(meta.url);
   const __dirname = dirname(__filename);

   return join(__dirname, slug);
}

export { getPath }