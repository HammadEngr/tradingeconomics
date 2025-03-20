const router = require("express").Router();
const {
  getCountriesList,
  getIndicators,
  getIndicatorData,
} = require("../controllers/indicators");

// countries list
router.get("/countries", getCountriesList);
// indicators list
router.get("/indicators", getIndicators);
// indicator by country
router.get("/indicator", getIndicatorData);

module.exports = router;
