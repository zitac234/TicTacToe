const router = require("express").Router();

router.use("/games", require("./games")); // matches

router.use(function (req, res, next) {
  const err = new Error(" yeah Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
