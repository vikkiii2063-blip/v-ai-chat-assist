import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/aichat")
.then(() => console.log("MongoDB connected ✅"))
.catch((err) => console.log(err));

app.use("/chat", chatRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});