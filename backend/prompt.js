const { GoogleGenerativeAI } = require("@google/generative-ai");
const bodyParser = require("body-parser");
require('dotenv').config()

const express = require('express');
const app = express();
const cors = require('cors');

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(input_from_user) {
  console.time("executionTime");

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});
  const private_policy = input_from_user;
  const prompt = private_policy + " Summarize this text. What are the important things I should know about? Is there anything unethical about it?";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  console.timeEnd("executionTime");

  return text;
}

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(cors());

app.use(express.json());

app.post('/generated-text', async(req, res) => {
  try {
    
    console.log(req.body);
    const { inputData } = req.body;
    const generatedText = await run(inputData.text);
    res.json({ generatedText });
  } 
  catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
