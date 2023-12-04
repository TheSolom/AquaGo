import express from "express";

import * as pages from "../controllers/AI-water.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

router.use(isAuth);

router.post("/portability", pages.postPortability);

router.post("/level", pages.postLevel);

router.post("/quality", pages.postQuality);

router.post("/consumptionTank", pages.postConsumptionTank);

export default router;
