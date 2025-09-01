import { Router } from "express";
import userModel from "../models/user.model.js";
import { register, login } from "../controller/auth.controller.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);

export default router;