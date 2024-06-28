import express from "express";

import * as map from "../controllers/map.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

router.use(isAuth);

router.get("/allpins", map.getAllPins);

router.get("/mypins", map.getMyPins);

router.post("/mypins", map.postMyPins);

router.delete("/mypins", map.deleteMyPins);

router.delete("/mypin/:X_axis/:Y_axis", map.deleteMyPin);

export default router;
