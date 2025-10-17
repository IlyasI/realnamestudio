const express = require('express');
const path = require('path');

const app = express();

// Serve static files from public directory
app.use(express.static('public'));

// Serve index.html for root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 realname studio running on http://localhost:${PORT}`);
  console.log(`✨ Looking good at realnamestudio.com and realname.studio`);
});
