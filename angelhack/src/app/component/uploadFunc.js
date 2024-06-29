import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Disable the default body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'uploads');

// Ensure the upload directory exists
fs.mkdirSync(uploadDir, { recursive: true });

export default async function fileHandler(req, res) {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: 'Error parsing files' });
      }
      const file = files.file[0];
      res.status(200).json({ message: 'File uploaded successfully', file });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}