const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config()

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

async function run(input_from_user) {
  // For text-only input, use the gemini-pro model

  console.time("executionTime");

  const model = genAI.getGenerativeModel({ model: "gemini-pro"});

  const private_policy = input_from_user;
  const prompt = private_policy + " Summarize this text. What are the important things I should know about? Is there anything unethical about it?";

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  console.timeEnd("executionTime");
}

run();

