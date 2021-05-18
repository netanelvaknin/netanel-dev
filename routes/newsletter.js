const router = require("express").Router();
const {registerToNewsletter} = require("../controllers/newsletter");

router.post("/newsletter/signup", registerToNewsletter);

module.exports = router;
