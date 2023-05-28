const screen = document.querySelector('#screen');


for (let i = 0; i < 256; i++) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  screen.appendChild(pixel);
};

const pixels = document.querySelectorAll("div.pixel");

pixels.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('hover');
  } )
});

function squareSize(number) {
  return number * number;
};

function removeElementsByClass(className){
  const elements = document.getElementsByClassName(className);
  while(elements.length > 0){
      elements[0].parentNode.removeChild(elements[0]);
  }
}

function createPixels(number) {
  let total = squareSize(number)
  let width = pixelSize(number).toFixed(2);
  for (let i = 0; i < total; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.flexBasis = width + "%";
    pixel.style.height = width + "%";
    screen.appendChild(pixel);
  }};

function hoverEffect() {
  let pixels = document.querySelectorAll("div.pixel");
  pixels.forEach((div) => {
    div.addEventListener('mouseover', () => {
      div.classList.add('hover');
    } )
  })
};

function pixelSize(number) {
  return 100 / number;
}

function userInput() {
  let number = prompt("Enter number", "");
  if (number > 100 || number < 1) {
    alert("Please enter number between 1-100");
    userInput();
  } else {
    removeElementsByClass('pixel');
    createPixels(number);
    console.log(pixelSize(number).toFixed(2));
    hoverEffect();
  }
};

const sizeButton = document.querySelector('#size-button');

sizeButton.addEventListener('click', () => {
  userInput();
})