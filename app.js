require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");


const app = express();
require("./config")(app);


// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const eventRouter = require("./routes/event.routes");
app.use("/api", isAuthenticated, eventRouter);

const guestRouter = require("./routes/guest.routes");
app.use("/api", isAuthenticated, guestRouter);

const foodRouter = require("./routes/food.routes");
app.use("/api", isAuthenticated, foodRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
