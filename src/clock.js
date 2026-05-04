/* 
* Контекст: 
На навчальному лендингу потрібен простий годинник, 
який оновлює час кожну секунду. Користувач має можливість 
зупинити його, щоб не відволікав.

* Розширене ТЗ:
*	Після кліку на .start-clock потрібно через setInterval із затримкою 1000 мс оновлювати 
*   текст .clock-display у форматі HH:MM:SS.
*	Години, хвилини і секунди мають завжди складатися з двох цифр (наприклад, "09:05:03").
*	Поточний час отримати через новий об’єкт Date та методи getHours, getMinutes, getSeconds.
*	Ідентифікатор інтервалу треба зберегти у змінній, щоб можна було його зупинити.
*	Після кліку на .stop-clock викликати clearInterval і залишити у .clock-display 
* останнє значення часу.
*/

import { onStartBtn, onStopBtn } from './js/handlers';
import { refsClock } from './js/refs';

refsClock.startClockBtn.addEventListener('click', onStartBtn);
refsClock.stopClockBtn.addEventListener('click', onStopBtn);
