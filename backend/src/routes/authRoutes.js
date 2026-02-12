import {Router} from "express";

const router = Router();

router.get("/me",protectRoute,getMe);
router.post("/callback",authCallBack);


export default router;