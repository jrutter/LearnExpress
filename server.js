const express = require('express');
const app = express();

const PORT = process.env.PORT || 4001;
// Use static server to serve the Express Yourself Website
// app.use(express.static('public'));

// Open a call to `app.get()` below:
const moods = [{ mood: 'excited about express!'}, { mood: 'route-tastic!' }];
app.get('/expressions', (req, res, next) => {
  // Here we would send back the moods array in response
  console.log(req)
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
