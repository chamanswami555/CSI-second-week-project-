const http = require('http');
const url = require('url');
const fileController = require('./fileController');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  if (req.method === 'POST' && pathname === '/create') {
    fileController.createFile(req, res);
  } else if (req.method === 'GET' && pathname === '/read') {
    fileController.readFile(req, res, parsedUrl.query.filename);
  } else if (req.method === 'DELETE' && pathname === '/delete') {
    fileController.deleteFile(req, res, parsedUrl.query.filename);
  } else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
