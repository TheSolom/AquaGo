import express from "express";

import * as consumption from "../controllers/consumption.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

router.use(isAuth);

router.get("/allconsumption", consumption.getAllConsumption);

router.get("/myconsumption", consumption.getMyConsumption);

router.put("/myconsumption", consumption.putMyConsumption);

export default router;
