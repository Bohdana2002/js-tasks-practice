import { refs } from './js/refs';
import { onResetButtonClick } from './js/handlers';
/*
 Контекст: На сторінці блогу є блок, який показує, 
 скільки разів користувач відкривав сайт. 
 Після кожного перезавантаження число збільшується на 1.

ТЗ
При кожному завантаженні сторінки лічильник збільшується на 1.
Значення має зберігатися між перезавантаженнями.
У .visits-count показується актуальне число.
Кнопка "Скинути" видаляє запис і встановлює значення 0
*/

const count = Number(localStorage.getItem('total-number-of-reloads')) || 0;
localStorage.setItem('total-number-of-reloads', count + 1);
refs.visistsCountNumber.textContent = `Ви заходили на сайт: ${count} разів`;

refs.visistsResetBtn.addEventListener('click', onResetButtonClick);
