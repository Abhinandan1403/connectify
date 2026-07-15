import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser"
import cors from "cors"
import chatRoutes from "./routes/chat.route.js"
import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import { connectDB } from "./lib/db.js";

const app = express() ;
const PORT = process.env.PORT; 

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true //allow frontend to send the cookies
}));

app.use(express.json());//string to json hence req.body
app.use(cookieParser());//string to json cookie to access req.cookie

// app.get("/api/auth/signup",(req,res)=>{
//     res.send("Signup Route");
// });

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/chat", chatRoutes);


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});