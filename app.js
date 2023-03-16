const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { Configuration, OpenAIApi } = require("openai");

dotenv.config();

const app = express();

// Configure OpenAI API
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.post("/generate-email", async (req, res) => {
    const { theme, receiver, sender ,language} = req.body;

    try {
        const promptLanguage = language === "繁體中文" ? "以台灣商業信件語調" : "in a professional style";
        const prompt = `${promptLanguage}，從 "${sender}" 寄給 "${receiver}"，主題為 "${theme}" 的專業電子郵件內容。`;


        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            max_tokens: 2000,
            n: 1,
            stop: null,
            temperature: 0.7,
        });

        const email = response.data.choices[0].text.trim();
        res.json({ email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to generate email" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
