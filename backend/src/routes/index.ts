import express, { Router } from "express";
import userRouter from "./user.Routes";
import authRouter from "./auth.Route";

const router =Router();

router.use("/user/", userRouter);
router.use("/auth", authRouter)

export default router;