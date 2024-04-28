function slide() {
  let outputString = "";
  let v = document.getElementById("slide_inner");
  if(v.value==1) {
    outputString = "short";
  }
  else if(v.value==2) {
    outputString = "medium";
  }
  else {
    outputString = "long";
  }
  document.getElementById("slider").querySelectorAll("label")[0].innerHTML = outputString;
  
}
slide()




const priv_pol = document.getElementById('priv-pol');

const inputData = {
  text: '',
  slider: 0
};

document.getElementById('generateButton').addEventListener("click", async() => {
  document.getElementById('response').innerText = 'loading...';
  inputData.text = priv_pol.value;
  inputData.slider = document.getElementById('slide_inner').value;
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










// const slider = document.getElementById("myRange");

// // Get the element where you want to display the value
// const sliderValueElement = document.getElementById("sliderValue");

// // Function to update the displayed value based on slider position
// function updateSliderValue() {
//     const sliderValue = parseInt(slider.value);

//     // Update the content based on slider value
//     switch(sliderValue) {
//         case 1:
//             sliderValueElement.textContent = "Value: short";
//             break;
//         case 2:
//             sliderValueElement.textContent = "Value: medium";
//             break;
//         case 3:
//             sliderValueElement.textContent = "Value: long";
//             break;
//         default:
//             sliderValueElement.textContent = "Invalid value";
//     }
// }

// // Initial call to set the initial value
// updateSliderValue();

// // Add event listener to the slider input
// slider.addEventListener("input", updateSliderValue);