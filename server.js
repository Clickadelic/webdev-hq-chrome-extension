const express = require('express')
const dotenv = require('dotenv').config()

const app = express()

app.listen('5000', () => console.log("Server is up and running"))