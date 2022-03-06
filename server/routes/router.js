/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');

const router = express.Router();
const eventController = require('../controllers/eventController');
const userController = require('../controllers/userController');

// Log in
router.post('/user/login', userController.login, (req, res) => {
  res.status(200).json(res.locals.result);
});
router.post('/user/signup', userController.signup, (req, res) => {
  res.status(200).json(res.locals.result);
});

router.post('/rsvp', userController.rsvp, (req, res) => {
  res.status(200).json(res.locals.result);
});

// add event
router.post('/event', eventController.addEvent, (req, res) => {
  res.sendStatus(200);
});
// delete
router.delete('/event', eventController.deleteEvent, (req, res) => {
  res.sendStatus(200);
});
// update

module.exports = router;
