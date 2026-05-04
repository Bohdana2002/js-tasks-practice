// У невеликій анкеті користувач вказує своє місто.
// Потрібно, щоб це значення не зникало після випадкового
// оновлення сторінки.
/* 
Розширене ТЗ:
•	Значення потрібно серіалізувати через JSON перед записом у localStorage.
•	Рішення не повинно викликати помилку, якщо в localStorage немає даних.
•	У .city-status потрібно показувати введене місто або 
повідомлення «Місто не вказане».
•	Після перезавантаження сторінки поле має автоматично відновлюватися.
•	Після кожного введення в .city-input значення потрібно 
зберігати в localStorage.
*/
import { onInputClic } from './js/handlers';
import { refsTwo } from './js/refs';

const localStorageKey = 'User_city';

const savedCity = JSON.parse(localStorage.getItem(localStorageKey));

if (savedCity) {
  refsTwo.cityInput.value = savedCity;
  refsTwo.cityStatus.textContent = savedCity;
} else {
  refsTwo.cityStatus.textContent = 'Місто не вказане';
}

refsTwo.cityInput.addEventListener('input', onInputClic);
