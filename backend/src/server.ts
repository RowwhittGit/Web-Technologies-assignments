import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import router from './routes';
dotenv.config();


const app = express();
connectDB();

app.use(express.json());
app.use("/api", router);


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});