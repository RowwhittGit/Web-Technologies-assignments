import { Request, Response, NextFunction } from "express";
import jwt, { Secret } from "jsonwebtoken";
import { IResponse } from "../controllers/auth.Controller";

// Extend Express Request type to include user info
declare global {
  namespace Express {
    interface Request {
      id?: string;
      role?: string;
    }
  }
}

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Get token from cookies (you could also support headers)
    const token = req.cookies.accessToken || req.cookies.token;
    if (!token) {
      const response: IResponse = {
        message: "Unauthorized: No token provided",
        data: null,
        success: false,
        status: 401,
      };
      return res.status(401).json(response);
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET as Secret) as {
      id: string;
      role: string;
      iat: number;
      exp: number;
    };

    // Attach user info to request
    req.id = decoded.id;
    req.role = decoded.role;

    // Proceed to next middleware / route
    next();
  } catch (error: any) {
    let message = "Unauthorized";
    if (error.name === "TokenExpiredError") {
      message = "Token expired, please login again";
    } else if (error.name === "JsonWebTokenError") {
      message = "Invalid token";
    }

    const response: IResponse = {
      message,
      data: null,
      success: false,
      status: 401,
    };
    return res.status(401).json(response);
  }
};

export default verifyToken;