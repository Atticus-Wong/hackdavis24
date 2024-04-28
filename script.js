import { run } from "./backend/prompt.js";

const generateButton = document.getElementById('generateButton');

generateButton.addEventListener("click", async function() {
  console.log("Generating...");
  const priv_policy = document.getElementById("priv-pol").value;
  
  try {
    const answer = await run(priv_policy);
    document.getElementById("priv-pol").value = answer;
    
  } catch (error) {
    console.error("Error:", error);
  }
});
