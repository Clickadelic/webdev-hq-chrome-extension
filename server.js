const express = require('express')
const dotenv = require('dotenv').config()
const { connectDB } = require('./src/config/db')

connectDB()


const app = express()

app.listen('5000', () => console.log("Server is up and running"))