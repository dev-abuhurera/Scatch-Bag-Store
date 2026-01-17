const express = require('express');
const router = express.Router();
const { getAccountPage, updateAccount, uploadProfilePicture } = require('../controllers/accountController');
const isLoggedIn = require('../middlewares/isLoggedIn');
const upload = require('../config/multer-config');

// Create the routes now {get, post}

router.get('/', isLoggedIn, getAccountPage);


// Create the post route now 

router.post('/update', isLoggedIn, updateAccount);


// Create the post route for image

router.post('/update-profile', isLoggedIn, upload.single('picture'), uploadProfilePicture);


module.exports = router;
