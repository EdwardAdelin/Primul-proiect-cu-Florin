function onUploadClick() {
  // declare a constant variable to access the input text element with the ID 'simpleText' (declared in index.html)
  const inputElement = document.getElementById('simpleText');

  // declare a constant variable with the text value of the input
  // see: https://www.w3schools.com/jsref/prop_text_value.asp
  const textContent = inputElement.value;
  console.log('input text: ' + textContent)

  // declare a constant to access the DIV element with the ID 'output' (declared in index.html)
  const outputElement = document.getElementById('output');

  // update the text content of the DIV
  // see: https://bobbyhadz.com/blog/javascript-change-text-of-div-element
  outputElement.textContent = textContent
}

    