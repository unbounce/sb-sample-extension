const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8081;

app.use(cors());
app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

function startServer(port) {
  app
    .listen(port, () => console.log(`Server listening on port: ${port}`))
    .on('error', (error) => {
      if (error.message.includes('listen EADDRINUSE: address already in use')) {
        startServer(port + 1);
      }
    });
}
startServer(PORT);
