const express = require ('express');
const path = require ('path');
const cookieSession = require ('cookie-session');
const routes = require ('./routes');

const FeedbackService = require ('./services/FeedbackService');
const SpeakerService = require ('./services/SpeakerService');

const feedbackService = new FeedbackService ('./data/feedback.json');
const speakerService = new SpeakerService ('./data/speakers.json');

const app = express ();

const port = 5000;

app.use (
  cookieSession ({
    name: 'session',
    keys: ['anajbdsj', 'lhxsjsjz'],
  })
);

app.set ('view engine', 'ejs');
app.set ('views', path.join (__dirname, './views'));

app.use (express.static (path.join (__dirname, './static')));

app.use (
  '/',
  routes ({
    feedbackService,
    speakerService,
  })
);

app.get ('/speakers', (req, res) => {
  res.sendFile (path.join (__dirname, './static/speakers.html'));
});

app.listen (port, () => {
  console.log (`Express server listening on port ${port}!`);
});
