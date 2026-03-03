import mongoose, {model, Schema} from "mongoose";

interface IUser {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  username: string;
  phone: number;
  booksAdded?: mongoose.Types.ObjectId[];
  role: "creator" | "visitor" | "admin";
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  booksAdded: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
  },
  role: {
    type: String,
    enum:["creator", "visitor", "admin"],
    default: "visitor"
  }
}, {timestamps: true});

const User = model<IUser>('User', userSchema);
export { User };
export type { IUser };