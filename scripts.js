const screen = document.querySelector('#screen');


for (let i = 0; i < 256; i++) {
  let pixel = document.createElement('div');
  pixel.classList.add('pixel16');
  screen.appendChild(pixel);
}