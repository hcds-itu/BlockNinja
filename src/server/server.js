const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// Route for the root URL ("/")
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

// Route for the "/question" URL
app.get('/question', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'question.html'));
});

// Route for the "/end" URL
app.get('/end', (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'end.html'));
});

// Other server-side routes and logic

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

