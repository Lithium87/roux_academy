const express = require ('express');
const speakersRoute = require ('./speakers');
const feedbackRoute = require ('./feedback');

const router = express.Router ();

module.exports = params => {
  router.get ('/', (req, res) => {
    res.render ('pages/index', {pageTitle: 'Welcome'});
  });

  router.use ('./speakers', speakersRoute (params));
  router.use ('./feedback', feedbackRoute (params));

  return router;
};
