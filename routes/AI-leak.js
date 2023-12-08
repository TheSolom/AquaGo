import express from "express";

import * as leaks from "../controllers/AI-leak.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

router.use(isAuth);

router.post("/accelerometerbranched", leaks.postAccBranched);

router.post("/accelerometerlooped", leaks.postAccLooped);

router.post("/hydrophonebranched", leaks.postHydrophoneBranched);

router.post("/hydrophonelooped", leaks.postHydrophoneLooped);

router.post("/pressurebranched", leaks.postPressureBranched);

router.post("/pressurelooped", leaks.postPressureLooped);

export default router;
