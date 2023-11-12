import express from "express";
import { userLogin } from "../controller/userController.mjs";
const router= express.Router();

 
router.post('/login', userLogin)
export default router; 