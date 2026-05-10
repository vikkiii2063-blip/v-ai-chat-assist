import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import chatRoutes from "./routes/chat.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/chat", chatRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
