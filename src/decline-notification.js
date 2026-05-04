/*
! Контекст: 
На сторінці планувальника користувач задає текст нагадування і запускає таймер. 
До моменту спрацювання він може передумати і скасувати нагадування однією кнопкою.
! Розширене ТЗ:
*	Після кліку на .start-reminder потрібно запустити setTimeout на 5 секунд, 
* який виведе текст нагадування у .reminder-status.
*	Ідентифікатор таймера, що повертає setTimeout, треба зберегти
* у змінній на рівні скрипта.
*	Після кліку на .cancel-reminder треба викликати clearTimeout 
*   із цим ідентифікатором і показати у .reminder-status текст "Нагадування скасоване".
*	Поки таймер активний, у .reminder-status має бути "Нагадування заплановане".
•	Якщо .reminder-input порожній, не запускати таймер і показати 
"Введіть текст нагадування".
*/
import { refsRemindes } from './js/refs';
import { onReminderBtn, onCancelBtn } from './js/handlers';

refsRemindes.startsReminderBtn.addEventListener('click', onReminderBtn);
refsRemindes.cancelsReminderBtn.addEventListener('click', onCancelBtn);
