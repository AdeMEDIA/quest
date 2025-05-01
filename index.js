const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/frame', (req, res) => {
  res.json({
    "title": "Are you hyped for incoming Monad mini apps on Farcaster?",
    "description": "Cast your vote below",
    "image": "", // no image for now
    "buttons": [
      { "label": "Yes", "action": "post" },
      { "label": "No", "action": "post" }
    ]
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
