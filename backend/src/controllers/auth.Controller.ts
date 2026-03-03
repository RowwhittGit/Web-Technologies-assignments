import { Request, Response } from "express";
import { IUser, User } from "../models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export interface IResponse {
  message: string;
  success: boolean;
  data?: any;
  status: number;
}

export const signUp = async(req: Request, res: Response) => {
  const {username, email, phone, password, name, role} = req.body;


  if(!username || !email || !phone || !password || !name) {
    return res.status(400).json({message: "All fields are required", data:null, success:false} as IResponse);
  }

  let user: IUser | null;
  user = await User.findOne({email});
  if(user) {
    return res.status(400).json({message: "User already exists", data:null, success:false} as IResponse);
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
      user = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
      name,
      role: role || "visitor",
    });

    return res.status(201).json({message: "User created successfully", data: user, success:true} as IResponse);

  } catch (error: any) {
    return res.status(500).json({message: error.message} as IResponse);
  }
}


export const signIn = async(req: Request, res: Response) => {
  const {email, password} = req.body
  if(!email || !password) {
    return res.status(400).json({message: "Email and password are required", data:null, success:false} as IResponse);
  }

  let user: IUser | null;
  user = await User.findOne({email});
  if(!user) {
    return res.status(400).json({message: "Invalid email or password", data:null, success:false} as IResponse);
  }
  
  const isMatch = await bcrypt.compare(password, user.password);
  if(!isMatch) {
    return res.status(400).json({message: "Invalid email or password", data:null, success:false} as IResponse);
  }

  const payload = {
    id: user._id,
    role: user.role,
  }

  const token = jwt.sign(payload, process.env.JWT_SECRET as string, {expiresIn: "1h"});
  
  return res.status(200).cookie("token", token).json({message: "Sign in successful", data: user, success:true} as IResponse);
}