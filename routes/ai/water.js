import express from "express";

import * as pages from "../../controllers/ai/water.js";
// import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

// router.use(isAuth);

router.post("/portability", pages.postPortability);

router.post("/level", pages.postLevel);

// router.post("/treatment", pages.postTreatment);

router.post("/consumptionTank", pages.postConsumptionTank);

export default router;
