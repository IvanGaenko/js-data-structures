require("../polyfills/intl");

/**
 * Функция принимает дату в виде строки
 * Функция должна вернуть день недели (например "вторник"), который был ровно 10 лет назад
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function timeTravel(dateString) {
  let date = new Date(dateString);
  let days = [
    "воскресенье",
    "понедельник",
    "вторник",
    "среда",
    "четверг",
    "пятница",
    "суббота"
  ];
  date.setFullYear(date.getFullYear() - 10);
  return days[date.getDay()];
}

/**
 * Функция принимает дату - число миллисекунд, прошедших с 1 января 1970 года
 * Функция должна вернуть строку в формате "ср, 21 нояб. 2018 г., 18:48"
 * Используйте Intl: https://learn.javascript.ru/intl
 */
function formatDate(millis) {}

/**
 * Функция принимает функцию для которой нужно провести бенчмарк
 * Функция должна вернуть:
 * "fast" - если функция выполнялась менее 10 мс
 * "normal" - если функция выполнялась менее 10 - 500 мс
 * "slow" - если функция выполнялась более 500 мс
 */
async function benchmark(f) {
  // код

  await f(); // Не меняйте эту строку. Это вызов переданной функции с ожиданием выполнения.

  // код
}

module.exports = {
  timeTravel,
  formatDate,
  benchmark
};
