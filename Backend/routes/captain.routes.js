const captainController = require("../controllers/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authMiddleware = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("firstname must be al least 3 charactors long"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 charactor long"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("color must be al least 3 charactors long"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("plate must be al least 3 charactors long"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("capacity must be al least 3 charactors long"),
  ],
  captainController.registerCaptain
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("password must be at least 6 charactor long"),
  ],
  captainController.loginCaptain
);

router.get(
  "/profile",
  authMiddleware.authCaptain,
  captainController.getCaptainProfile
);

router.get(
  "/logout",
  authMiddleware.authCaptain,
  captainController.logoutCaptain
);

module.exports = router;
