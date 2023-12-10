import express from "express";

import * as pages from "../controllers/AI-water.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

router.use(isAuth);

router.post("/potability", pages.postPortability);

router.post("/level", pages.postLevel);

export default router;
