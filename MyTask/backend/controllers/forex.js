const te = require("tradingeconomics");
const TE_KEY = process.env.TE_KEY;

exports.getForexData = async (req, res) => {
  try {
    const { pair } = req.params;
    await te.login(TE_KEY);
    const data = await te.getHistoricalMarkets(
      (symbol = `${pair.toUpperCase()}:CUR`)
    );
    const pairData = data
      .map((item) => ({
        time:
          new Date(item.Date.split("/").reverse().join("-")).getTime() / 1000,
        value: item.Close,
      }))
      .sort((a, b) => a.time - b.time)
      .slice(0, -1);
    res.json({
      status: true,
      data: pairData,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: "failed",
    });
  }
};
exports.getAvailablePairs = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getMarketSnap((marketsField = "currency"));
    let finalData;
    if (data) {
      finalData = data
        .map((pair) => ({
          name: pair.Name,
          dailyChange: pair.DailyPercentualChange,
          close: pair.Close,
        }))
        .slice(0, -1);
      return res.json({
        status: true,
        data: finalData,
      });
    } else {
      return res.json({
        status: false,
        data: [],
      });
    }
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
    });
  }
};
exports.getMarketSnap = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getMarketSnap((marketsField = "currency"));
    console.log(data);
    const finalData = data.slice(0, -1);
    res.json({
      status: true,
      data: finalData,
    });
  } catch (error) {
    console.log(error);
    res.json({
      status: false,
    });
  }
};
exports.getMarketForecast = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getMarketsForecast((category = "currency"));
    // console.log(data);
    const finalData = data.slice(0, -1);
    res.json({
      status: true,
      data: finalData,
    });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
};
exports.getAllNews = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getNews();
    const finalData = data.slice(0, -1);
    res.json({
      status: true,
      data: finalData,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
exports.getTopNews = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getNews();
    const finalData = data.splice(0, 3);
    res.json({
      status: true,
      data: finalData,
    });
  } catch (error) {
    res.json({
      status: false,
    });
  }
};
exports.getCalender = async (req, res) => {
  try {
    await te.login(TE_KEY);
    const data = await te.getCalendar();
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
