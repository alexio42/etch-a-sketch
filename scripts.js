const screen = document.querySelector('#screen');


for (let i = 0; i < 256; i++) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel');
  screen.appendChild(pixel);
}

const pixels = document.querySelectorAll("div.pixel")

pixels.forEach((div) => {
  div.addEventListener('mouseover', () => {
    div.classList.add('hover');
  } )
})