import { Request, Response } from "express";

export const getAllUsers = (req: Request, res: Response) => {
    res.json({ message: "Get all users" });
}
