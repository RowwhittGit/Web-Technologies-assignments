import { Express, Router } from "express";
import { getAllUsers } from "../controllers/user.controller";

const userRouter = Router();
userRouter.get('/users', getAllUsers);

export default userRouter;