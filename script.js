const priv_pol = document.getElementById('priv-pol');

document.getElementById('generateButton').addEventListener("click", () => {
  inputData.text = priv_pol.textContent;
  sendToServer();
});

const inputData = {
  text: ''
};


async function sendToServer() {
  console.log('sending to server');
  fetch('http://localhost:3000/generated-text', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ inputData })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.generatedText);
  })
  .catch(error => {
    console.error('Error:', error);
  })

}
