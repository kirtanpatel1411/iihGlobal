const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    const newuser = new User({
      fullName,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    newuser.password = await bcrypt.hash(password, salt);
    const saveduser = await newuser.save();
    const { password: _, ...userWithoutPassword } = saveduser._doc;
    return res.json(userWithoutPassword);
  } catch (error) {
    res.status(500).json({ msg: "Error in registration" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "User does not exist" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({ msg: "Error in login" });
  }
};

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).send("Access denied. No token provided.");
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).send("Invalid token.");
  }
}

module.exports = { register, login, verifyToken };
