const { signup } = require('../controllers/userControllers');

const router = require('express').Router();

router.post("/signup",signup)

module.exports = router;
