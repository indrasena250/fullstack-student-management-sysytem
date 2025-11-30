const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.post('/register', studentController.register);
router.post('/login', studentController.login);
router.get('/', studentController.getAllStudents);

module.exports = router;
