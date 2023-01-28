const express = require ('express');
const path = require ('path');
const routes = require ('./routes');

const app = express ();

const port = 5000;

app.set ('view engine', 'ejs');
app.set ('views', path.join (__dirname, './views'));

app.use (express.static (path.join (__dirname, './static')));

app.use ('/', routes ());

app.get ('/speakers', (req, res) => {
  res.sendFile (path.join (__dirname, './static/speakers.html'));
});

app.listen (port, () => {
  console.log (`Express server listening on port ${port}!`);
});