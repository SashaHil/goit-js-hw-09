import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
  dateChose: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('button[data-start]'),
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

const onStart = () => {
  let timer = setInterval(() => {
    let countdown = new Date(refs.dateChose.value) - new Date();

    refs.startBtn.disabled = true;

    if (countdown >= 0) {
      let timeObject = convertMs(countdown);

      refs.daysValue.textContent = addLeadingZero(timeObject.days);
      refs.hoursValue.textContent = addLeadingZero(timeObject.hours);
      refs.minutesValue.textContent = addLeadingZero(timeObject.minutes);
      refs.secondsValue.textContent = addLeadingZero(timeObject.seconds);
    } else {
      clearInterval(timer);
    }
  }, 1000);
};

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
};

const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

refs.startBtn.addEventListener('click', onStart);
