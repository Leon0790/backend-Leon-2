const router = require('express').Router();
const { signup, login } = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);

module.exports = router;

git add routes/auth.js
git add routes/students.js
git add controllers/authController.js
git add controllers/studentController.js
git add middleware/auth.js
git add models/User.js
git add models/Student.js
