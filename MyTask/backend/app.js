const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const viewRoutes = require("./routes/viewRoutes");
const indicatorRoutes = require("./routes/indicatorsRoute");
const te = require("tradingeconomics");
const TE_KEY = process.env.TE_KEY;

const app = express();

const stopApi = (req, res) => {
  return res.json({ status: true, data: [] });
};

const getTry = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getIndicatorData();
    res.json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);
  }
};

app.use(cors());
app.use(helmet());

// dummy route
// app.use("/try", getTry);

// ROUTES
app.use("/tradinghour", viewRoutes);
app.use("/tradinghour", indicatorRoutes);

// app.use("/", stopApi, indicatorRoutes);
// app.use("/", stopApi, viewRoutes);

module.exports = app;
