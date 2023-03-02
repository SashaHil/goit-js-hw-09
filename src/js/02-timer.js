import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateChose: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
  time: document.querySelector('.timer'),
  daysValue: document.querySelector('span[data-days]'),
  hoursValue: document.querySelector('span[data-hours]'),
  minutesValue: document.querySelector('span[data-minutes]'),
  secondsValue: document.querySelector('span[data-seconds]'),
};

refs.startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please choose a date in the future');
      refs.startBtn.disabled = true;
    } else {
      refs.startBtn.disabled = false;
    }
  },
};

flatpickr(refs.dateChose, options);

const onChoseDate = () => {};

const onStart = () => {
  //   const startTime = Date.now();
  setInterval(() => {
    const currentTime = new Date();
    // const deltaTime = currentTime - startTime;
    const { days, hours, minutes, seconds } = convertMs(currentTime);
    console.log(`${days}:${hours}:${minutes}:${seconds}`);
  }, 1000);
};

const onTime = () => {};

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );
  return { days, hours, minutes, seconds };
};

refs.dateChose.addEventListener('click', onChoseDate);
refs.startBtn.addEventListener('click', onStart);
refs.time.addEventListener('click', onTime);
