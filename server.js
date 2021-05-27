const express = require('express');
const app = express(); // creates an app object.

const PORT = process.env.PORT || 3001;

// Our app object has a single GET route.
app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`); // eslint-disable-line no-console
});
