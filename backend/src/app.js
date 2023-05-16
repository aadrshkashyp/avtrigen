const express = require("express");
const cors = require("cors");
const avatarRoutes = require("./routes/avatarRoutes");

const app = express();

app.use(cors());

app.use("/avatar", avatarRoutes);

app.listen(6500, () => {
  console.log("Server running on port 6500");
});

module.exports = app;
