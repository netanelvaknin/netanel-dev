const router = require("express").Router();
const {registerUser} = require('../controllers/users');

router.post("/users/new", registerUser);

module.exports = router;
