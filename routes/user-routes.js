const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel.js');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cloudinary = require('cloudinary').v2;
const passport = require('passport');
const jwtSecret = process.env.JWT_SECRET