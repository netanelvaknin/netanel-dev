const Newsletter = require("../models/newsletters");
const validator = require("validator");

const registerToNewsletter = async (req, res) => {
  const email = req.body.email;
  try {
    if (validator.isEmail(email)) {
      const doc = await Newsletter.create({
        email,
      });

      if (doc) {
        res.status(200).send("Successfuly registered");
      } else {
        res.status(400).send("Something went wrong");
      }
    } else {
      res.status(400).send("Please provide valid email");
    }
  } catch (e) {
    res.status(400).send(e);
  }
};

module.exports = {
  registerToNewsletter,
};
