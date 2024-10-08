const express = require("express");
const authController = require("./../controllers/authController");
const userController = require("./../controllers/userController");

const router = express.Router();

// Routes for auth
router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);
router.route("/signout").get(authController.protect, authController.signout);
router
  .route("/isLoggedIn")
  .get(authController.protect, authController.isLoggedIn);
router.route("/forgotPassword").post(authController.forgotPassword);
// Routes for data about users
router
  .route("/myProfile")
  .get(authController.protect, userController.getCurrentUserProfile);

// Routes for user's habits
router
  .route("/:id/habits")
  .get(authController.protect, userController.getUserHabits)
  .post(authController.protect, userController.createHabit);

router.route("/:token/resetPassword").post(authController.resetPassword);

router
  .route("/:userId/habits/:habitId")
  .patch(authController.protect, userController.updateHabit)
  .delete(authController.protect, userController.deleteHabit);

router
  .route("/:id/todaysHabits")
  .get(authController.protect, userController.getCurrentHabits);

module.exports = router;
