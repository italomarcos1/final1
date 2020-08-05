import { diskStorage } from 'multer';
import { resolve } from 'path';
import crypto from 'crypto';

const tmpFolder = resolve(__dirname, '..', '..', 'tmp');

export default {
  directory: tmpFolder,
  storage: diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex');

      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
