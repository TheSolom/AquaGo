import express from "express";

import * as map from "../controllers/map.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

router.use(isAuth);

router.get("/map/allpins", map.getAllPins);

router.get("/map/mypins", map.getMyPins);

router.post("/map/mypins", map.postMyPins);

export default router;
