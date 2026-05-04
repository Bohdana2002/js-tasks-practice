import { STORAGE_KEYS } from './constants';
import { refs, refsClock, refsRemindes } from './refs';

import { refsTwo } from './refs';

export function onNameInput(event) {
  const userName = event.target.value.trim();
  refs.welcomeText.textContent = `Привіт, ${userName}`;
  localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(userName));
  if (userName === '') {
    refs.welcomeText.textContent = `Привіт, гість!`;
  }
}

export function initWelcomeTaskPage(event) {
  try {
    const storageUserName = JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
    refs.welcomeText.textContent = storageUserName
      ? `Привіт, ${storageUserName}`
      : `Привіт, гість!`;

    refs.nameInput.value = storageUserName;
  } catch (error) {
    console.log(error);
  }
}

export function onResetButtonClick() {
  localStorage.setItem('total-number-of-reloads', 0);
  refs.visistsCountNumber.textContent = `Ви заходили на сайт: 0 разів`;
}

export function onInputClic() {
  localStorage.setItem(
    localStorageKey,
    JSON.stringify(refsTwo.cityInput.value)
  );

  if (refsTwo.cityInput.value === '') {
    refsTwo.cityStatus.textContent = 'Місто не вказане';
  } else {
    refsTwo.cityStatus.textContent = refsTwo.cityInput.value;
  }
}
let timerId;
export const onReminderBtn = () => {
  if (refsRemindes.reminderInput.value.trim() === '') {
    refsRemindes.reminderStatus.textContent = 'Введіть текст нагадування';
    return;
  }
  refsRemindes.reminderStatus.textContent = 'Нагадування заплановане';
  timerId = setTimeout(() => {
    refsRemindes.reminderStatus.textContent = refsRemindes.reminderInput.value;
  }, 5000);
};

export const onCancelBtn = () => {
  clearTimeout(timerId);
  refsRemindes.reminderStatus.textContent = 'Нагадування скасоване';
  refsRemindes.reminderInput.value = '';
};

let intervalId = null;

export const onStartBtn = () => {
  intervalId = setInterval(() => {
    const date = new Date();
    refsClock.clockDisplay.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }, 1000);
};
export const onStopBtn = () => {
  clearInterval(intervalId);
};

export const onCalcDaysBtn = () => {
  if (refs.birthDateInput.value === '') {
    refs.daysResultText.textContent = 'Вкажіть дату народження';
  } else {
    const birthInput = new Date(refs.birthDateInput.value);
    const date = Date.now();
    const differenceDays = Math.floor((date - birthInput) / 86400000);
    refs.daysResultText.textContent = `Минуло ${differenceDays} днів`;
  }
};
