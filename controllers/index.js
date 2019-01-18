const express = require('express');
const router = express.Router();

const bio = require('./bio')
const pricing = require('./pricing')
const signup = require('./signup')
const login = require('./login')

router.use('/alt', require('./alt'));
router.use('/', require('./home'));

router.use('/bio', bio)
router.use('/pricing', pricing)
router.use('/signup', signup)
router.use('/login', login)


module.exports = router;
