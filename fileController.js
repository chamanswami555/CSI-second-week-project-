const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'files');
if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath);
}

exports.createFile = (req, res) => {
  let body = '';
  req.on('data', chunk => body += chunk);
  req.on('end', () => {
    const { filename, content } = JSON.parse(body);
    const filePath = path.join(basePath, filename);

    fs.writeFile(filePath, content || '', err => {
      if (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ message: 'Error creating file' }));
        return;
      }
      res.writeHead(201);
      res.end(JSON.stringify({ message: 'File created successfully' }));
    });
  });
};

exports.readFile = (req, res, filename) => {
  const filePath = path.join(basePath, filename);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'File not found' }));
      return;
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ content: data }));
  });
};

exports.deleteFile = (req, res, filename) => {
  const filePath = path.join(basePath, filename);

  fs.unlink(filePath, err => {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'File not found or error deleting' }));
      return;
    }
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'File deleted successfully' }));
  });
};
