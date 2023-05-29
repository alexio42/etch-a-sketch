//create initial 16x16 grid
const screen = document.querySelector('#screen');
for (let i = 0; i < 256; i++) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  screen.appendChild(pixel);
};

const pixels = document.querySelectorAll("div.pixel");

//Adds initial hover event listener
pixels.forEach((div) => {
  div.addEventListener('mouseover', hover)
});


//functions to take user input and create new grid
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
  let width = pixelSize(number).toFixed(3);
  for (let i = 0; i < total; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    pixel.style.flexBasis = width + "%";
    pixel.style.height = width + "%";
    screen.appendChild(pixel);
  }};

//function to add event listener for basic effect
function hoverEffectBasic() {
  let pixels = document.querySelectorAll("div.pixel");
  pixels.forEach(div => div.addEventListener('mouseover', hover))};

//turns div black when mousover
function hover() {
  this.style.backgroundColor = '#000000';
}

//function to incremet shade with each mouse
function hoverEffectShades() {
  let pixels = document.querySelectorAll("div.pixel");
  pixels.forEach((div) => {
    div.removeEventListener('mouseover', hover);
    div.addEventListener('mouseover', opacity)})};
//       let a = shadeIncrement(opacity)
//       div.style.backgroundColor = `rgba(0, 0, 0, ${0.1 + a})`;
//     } )
//   })
// }

// const opacity = 0;

// function shadeIncrement(opacity) {
//     opacity += 0.1;
//     return opacity;
//   };

function opacity() {
  if (this.style.backgroundColor.match(/rgba/)) {
    let currentOpacity = Number(this.style.backgroundColor.slice(-4, -1));
    if (currentOpacity <= 0.9) {
        this.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity + 0.1})`;
        this.classList.add('gray');
    }
} else if (this.classList == 'pixel gray' && this.style.backgroundColor == 'rgb(0, 0, 0)') {
    return;
} else {
    this.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';  
}
}

function pixelSize(number) {
  return 100 / number;
}

function userInput() {
  let number = prompt("Enter a number (max 100)", "");
  if (number > 100 || number < 1) {
    alert("Please enter number between 1-100");
    userInput();
  } else {
    removeElementsByClass('pixel');
    createPixels(number);
  } hoverEffectBasic()
};

const sizeButton = document.querySelector('#size-button');

sizeButton.addEventListener('click', () => {
  userInput();
})

const shadeEffect = document.querySelector('#shade-effect');

shadeEffect.addEventListener('click', () => {
  hoverEffectShades();
})