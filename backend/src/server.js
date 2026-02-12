import "dotenv/config";
import express from "express";
import { connectionDB } from "./config/database.js";
import authRoutes from "./routes/authRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import userRoutes from "./routes/userRoutes.js";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health',(req,res)=>{
    res.json({status:"ok",message:"server is running"});
})


app.use("/api/auth",authRoutes);
app.use("/api/chats",chatRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);




const startServer = async () => {
    await connectionDB();

    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT} in ${process.env.NODE_ENV} mode`);
    });
};

startServer();