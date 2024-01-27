const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_URL
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser); //sent as response in postman or frontend.
    console.log(savedUser);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("wrong credentials");
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_URL
    );

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);
    OriginalPassword !== req.body.password &&
      res.send(401).json("wrong credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    console.log("_doc", user);

    res.status(200).json({ ...others, accessToken });
    // res.status(201).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
