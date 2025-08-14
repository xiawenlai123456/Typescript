const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static HTML files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Route that responds with "Hello World!" in plain text
app.get('/api', (req, res) => {
  res.send('Hello World!');
});

// Fallback for the root route if no index.html is used
app.get('/', (req, res) => {
  res.send('Hello World! from root');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
