const express = require('express')
const { Passport } = require('passport')
const passport = require('passport')
const router = express.Router()

router.get('/google', Passport.authenticate({scope: ['profile', 'email']}))
router.get('/google/callback', passport.authenticate('google', {
	successRedirect: 'http://localhost:3000/dashboard'
}))