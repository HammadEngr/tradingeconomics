const router = require("express").Router();
const {
  getForexData,
  getMarketSnap,
  getAvailablePairs,
  getMarketForecast,
  getAllNews,
  getTopNews,
  getCalender,
} = require("../controllers/forex");

// forex
router.get("/forex/:pair", getForexData);
router.get("/availablepairs", getAvailablePairs);
// market snap
router.get("/marketsnap", getMarketSnap);
router.get("/forecast", getMarketForecast);
// news
router.get("/all-news", getAllNews);
router.get("/top-news", getTopNews);
// calender
router.get("/calender", getCalender);

module.exports = router;
