import express from "express";
import axios from "axios";

const router = express.Router();

const API_KEY = process.env.OPENROUTER_API_KEY;

router.post("/", async (req, res) => {

  try {

    const message = req.body.message;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "google/gemma-2-9b-it:free",
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
          "Content-Type": "application/json"
        }
      }
    );

    const reply =
      response.data.choices[0].message.content;

    res.json({ reply });

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
