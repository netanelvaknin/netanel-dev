const bcrypt = require("bcrypt");
const User = require("../models/users");

const registerUser = async (req, res) => {
    const body = req.body;
    try {
      const hashedPassword = await bcrypt.hash(body.password, 8);
      const newUser = await User.create({
        email: body.email,
        password: hashedPassword,
      });
  
      res.sendStatus(200);
    } catch {
      res.sendStatus(400);
    }
  };

module.exports = {
    registerUser
}