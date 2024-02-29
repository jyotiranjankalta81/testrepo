const express = require('express');
const app = express();
const port = 3000;

// Define a simple endpoint
app.get('/', (req, res) => {
  res.send('Hello, this is your demonodejs app!');
});

// Define another endpoint
app.get('/api/greet', (req, res) => {
  res.json({ message: 'Greetings from your demonodejs API!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
