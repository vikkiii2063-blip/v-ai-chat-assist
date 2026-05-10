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
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: message
          }
        ]
      },
      {
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
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

    console.log(
      error.response?.data || error.message
    );

    res.json({
      reply: "AI Error"
    });

  }

});

export default router;
