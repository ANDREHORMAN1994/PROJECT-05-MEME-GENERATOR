// MY CONSTANTS
const containerMeme = document.querySelector('#meme-image-container');
const img = document.querySelector('#meme-image');
const loadImg = document.querySelector('#meme-insert');
const textInput = document.querySelector('#text-input');
const loadText = document.querySelector('#meme-text');
const buttonRed = document.querySelector('#fire');
const buttonBlue = document.querySelector('#water');
const buttonBrown = document.querySelector('#earth');

// CONDITION TO CHANGE THE DISPLAY CONTAINER CSS
let imgShow = false;
if (imgShow === false) {
  containerMeme.style.display = 'none';
}

// EVENT TO SELECT A IMAGE IN MY CONTAINER
function selectImg(event) {
  img.src = URL.createObjectURL(event.target.files[0]);
  imgShow = true;
  if (imgShow === true) {
    containerMeme.style.display = 'block';
  }
}
loadImg.addEventListener('change', selectImg);

// EVENT TO ADD TEXT IN MY CONTAINER
function addText() {
  loadText.innerText = textInput.value;
  imgShow = true;
  if (imgShow === true) {
    containerMeme.style.display = 'block';
  }
}
textInput.addEventListener('keyup', addText);

// EVENT IN THE BUTTONS BORDERS
function changeBorderFire() {
  containerMeme.style.border = '3px dashed red';
}
buttonRed.addEventListener('click', changeBorderFire);

function changeBorderWater() {
  containerMeme.style.border = '5px double blue';
}
buttonBlue.addEventListener('click', changeBorderWater);

function changeBorderEarh() {
  containerMeme.style.border = '6px groove green';
}
buttonBrown.addEventListener('click', changeBorderEarh);

// FUNCTION FOR PRE-IMAGES
const preImgs = document.querySelectorAll('.miniatureImg');
for (let i = 0; i < preImgs.length; i += 1) {
  preImgs[i].addEventListener('click', currentImg);

  function currentImg() {
    img.src = preImgs[i].src;
    imgShow = true;
    if (imgShow === true) {
      containerMeme.style.display = 'block';
    }
  }
}
