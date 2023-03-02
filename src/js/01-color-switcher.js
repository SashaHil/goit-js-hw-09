const refs = {
  startBtn: document.querySelector('button[data-start]'),
  closeBtn: document.querySelector('button[data-stop]'),
  body: document.querySelector('body'),
};

refs.closeBtn.disabled = true;

const onColorChange = () => {
  id = setInterval(() => {
    refs.body.style.backgroundColor = getRandomHexColor();
  }, 1000);

  refs.startBtn.disabled = true;
  refs.closeBtn.disabled = false;
};

const offColorChange = () => {
  clearInterval(id);
  refs.closeBtn.disabled = true;
  refs.startBtn.disabled = false;
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.startBtn.addEventListener('click', onColorChange);
refs.closeBtn.addEventListener('click', offColorChange);
