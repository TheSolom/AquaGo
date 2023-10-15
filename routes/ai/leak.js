import express from "express";

import * as leaks from "../../controllers/ai/leak.js";
import { isAuth } from "../middlewares/is-auth.js";

const router = express.Router();

router.use(isAuth);

router.post("/leak/accelerometerbranched", leaks.postAccBranched);

router.post("/leak/accelerometerlooped", leaks.postAccLooped);

router.post("/leak/hydrophonebranched", leaks.postHydrophoneBranched);

router.post("/leak/hydrophonelooped", leaks.postHydrophoneLooped);

router.post("/leak/pressurebranched", leaks.postPressureBranched);

router.post("/leak/pressurelooped", leaks.postPressureLooped);

export default router;
