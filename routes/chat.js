import express from "express";
import axios from "axios";

const router = express.Router();

const API_KEY = "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";

router.post("/", async (req, res) => {

  try {

    const message = req.body.message;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "mistralai/mistral-7b-instruct",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "HTTP-Referer": "https://v-ai-chat-assist-2.onrender.com",
          "X-Title": "V AI",
          "Content-Type": "application/json"
        }
      }
    );

    const reply =
      response.data.choices[0].message.content;

    res.json({
      reply
    });

  } catch (error) {

    console.log(error);

    res.json({
      reply: "AI Error"
    });

  }

});

export default router;
