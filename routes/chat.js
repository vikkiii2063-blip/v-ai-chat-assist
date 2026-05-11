import express from "express";
import axios from "axios";

const router = express.Router();

const API_KEY = "AIzaSyCjqHTe4Ry3s4-o7vfbmBiEdKtwYlkYud0";

router.post("/", async (req, res) => {

  try {

    const message = req.body.message;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: message
              }
            ]
          }
        ]
      }
    );

    const reply =
      response.data.candidates[0].content.parts[0].text;

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
