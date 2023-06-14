import express from "express";
import { HomeControllers } from "../controllers/home.controllers";
import { checkLogin } from "../middleware/checkLogin";

export const router = express.Router();

router.get('/login', checkLogin, HomeControllers.logIn);
