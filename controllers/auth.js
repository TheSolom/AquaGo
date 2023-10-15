// import { validationResult } from "express-validator";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User from "../models/user.js";

// export const signup = async (req, res, next) => {
//   const errors = validationResult(req);
//   try {
//     if (!errors.isEmpty()) {
//       const error = new Error(
//         "Validation failed, Signing up data is incorrect"
//       );
//       error.statusCode = 422;
//       error.data = errors.mapped();
//       throw error;
//     }

//     const { name, email, password } = req.body;

//     const hashedPassword = await bcrypt.hash(password, 10);
//     if (hashedPassword) {
//       const newUser = new User({
//         name,
//         email,
//         password: hashedPassword,
//       });
//       await newUser.save();
//     }

//     res.status(201).json({
//       message: "User created successfully",
//       userId: newUser._id,
//     });
//   } catch (err) {
//     if (!err.statusCode) err.statusCode = 500;
//     next(err);
//   }
// };

// export const login = async (req, res, next) => {
//   const errors = validationResult(req);
//   try {
//     if (!errors.isEmpty()) {
//       const error = new Error(
//         "Validation failed, Signing up data is incorrect"
//       );
//       error.statusCode = 422;
//       error.data = errors.mapped();
//       throw error;
//     }

//     const { email, password } = req.body;

//     const user = await User.findOne({ email });

//     if (!user) {
//       const error = new Error("User not found");
//       error.statusCode = 401;
//       throw error;
//     }

//     const doMatch = await bcrypt.compare(password, user.password);

//     if (!doMatch) {
//       const error = new Error("Wrong password");
//       error.statusCode = 401;
//       throw error;
//     }

//     const token = jwt.sign(
//       {
//         email: user.email,
//         userId: user._id.toString(),
//       },
//       "secret",
//       { expiresIn: "1h" }
//     );

//     res.status(200).json({
//       token: token,
//       userId: user._id,
//     });
//   } catch (err) {
//     if (!err.statusCode) err.statusCode = 500;
//     next(err);
//   }
// };
