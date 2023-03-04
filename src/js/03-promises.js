import Notiflix from 'notiflix';

const refs = {
  delayValue: document.querySelector('input[name ="delay"]'),
  stepValue: document.querySelector('input[name ="step"]'),
  amountValue: document.querySelector('input[name ="amount"]'),
  submitBtn: document.querySelector('button[type ="submit"]'),
};

const onDelay = e => {
  e.preventDefault();

  let delay = Number(refs.delayValue.value);
  let step = Number(refs.stepValue.value);

  for (let i = 0; i < refs.amountValue.value; i += 1)
    createPromise(1 + i, delay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
};

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  return promise;
}

refs.submitBtn.addEventListener('click', onDelay);
