const express = require("express");
const {
  login,
  logut,
  signup,
  verifyMe,
  resetPassword,
  forgetPassword,
} = require("../controllers/auth.controller.js");
const { authMiddleWare } = require("../middlewares/auth.middleware.js");

const router = express.Router();

router.get("/check-auth", authMiddleWare);
router.post("/signup", signup);
router.post("/verify-user", verifyMe);
router.post("/login", login);
router.post("/logout", logut);
router.post("/forgot-password", forgetPassword);
router.post("/reset-password/:token", resetPassword);

module.exports = router;
