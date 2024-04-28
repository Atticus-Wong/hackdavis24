import { run } from "./backend/prompt.js"

document.getElementById('GenerateButton').addEventListener("click", function() {

  const priv_policy = document.getElementById("priv-pol").value;
  const answer = run(priv_policy);

  document.getElementById("priv-pol").textContent = answer;
});

