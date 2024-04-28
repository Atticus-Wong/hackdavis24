const priv_pol = document.getElementById('priv-pol');

const inputData = {
  text: ''
};

document.getElementById('generateButton').addEventListener("click", async() => {
  inputData.text = priv_pol.value;
  const output = await sendToServer();
  document.getElementById('response').innerHTML = output.replaceAll("\n", "<br>");
});

async function sendToServer() {
  try {
    console.log('sending to server');
    const response = await fetch('http://localhost:3000/generated-text', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ inputData })
  })
  const data = await response.json();
  console.log(data.generatedText);
  return data.generatedText;
  }
  catch (error) {
    console.error('Error:', error);
  }
  

}
