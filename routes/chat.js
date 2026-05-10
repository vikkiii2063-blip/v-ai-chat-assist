import express from "express";
import axios from "axios";
const API_KEY = "AIzaSyAKjOssd6V46pf_yv2nUMSS96NQQorBhFk";
const router = express.Router();

router.post("/", async (req, res) => {

try {

const message = req.body.message;

const response = await axios.post(
`https://generativelanguage.googleapis.com/v1bete/models/gemini-1.5-flash:generateContent?key=${API_KEY}`,
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

console.log(error.response?.data || error.message);

res.json({
reply: "AI Error"
});

}

});

export default router;
