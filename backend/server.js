const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/authRoutes");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
