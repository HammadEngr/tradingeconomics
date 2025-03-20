const te = require("tradingeconomics");
const TE_KEY = process.env.TE_KEY;

exports.getCountriesList = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getAllCountries();
    res.json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
    });
  }
};
exports.getIndicators = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getIndicatorData();
    res.json({
      status: true,
      data,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};

exports.getIndicatorData = async (req, res) => {
  try {
    console.log("getIndicatorData");
    console.log(req.query);
    const { country: countryName } = req.query;
    await te.login(TE_KEY);
    const data = await te.getIndicatorData((country = [countryName]));
    res.json({
      status: true,
      data,
    });
  } catch (error) {
    console.log(error.message);
    console.log(error.type);
    let message;
    if (error.type === "system") {
      message = "system srror";
    } else {
      message = "something went wrong";
    }
    res.json({
      status: false,
      message: message,
    });
  }
};
