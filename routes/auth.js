import express from "express";
import { body } from "express-validator";

import User from "../models/user.js";
import * as authController from "../controllers/auth.js";

const router = express.Router();

router.post(
  "/signup",
  [
    body("name")
      .trim()
      .exists({ values: "falsy" })
      .withMessage("You must enter your name")
      .isLength({ min: 3 })
      .withMessage("Please enter a name contains more than 2 letters"),
    body("email")
      .normalizeEmail({ gmail_remove_dots: false })
      .isEmail()
      .withMessage("Please enter a valid email address")
      .custom((SigningEmail, { req }) => {
        return User.findOne({ email: SigningEmail }).then((user) => {
          if (user)
            return Promise.reject(
              "This Email is already in use, please try another email"
            );
        });
      }),
    body(
      "password",
      "Password must be at least 5 characters and contains only numbers and letters without spaces"
    )
      .trim()
      .exists({ values: "falsy" })
      .withMessage("You must type a password")
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  authController.signup
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Please enter a valid email address."),
    body("password", "Password has to be valid.")
      .trim()
      .isLength({ min: 5 })
      .isAlphanumeric(),
  ],
  authController.login
);

export default router;
