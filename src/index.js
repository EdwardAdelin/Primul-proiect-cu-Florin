function onUploadClick() {

  const inputElement = document.getElementById('simpleText');
  const inputElement2 = document.getElementById('simpleText2');
  const textContent = inputElement.value;
  const textContent2 = inputElement2.value;
  console.log('input text: ' + textContent + textContent2)
  const outputElement = document.getElementById('output');
  outputElement.textContent = textContent+textContent2;
}