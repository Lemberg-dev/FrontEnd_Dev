let show = data => console.log(data);
// Створіть масив styles з елементами «Джаз», «Блюз».
let styles = new Array("Джаз", "Блюз");
show(styles);
// Додайте в кінець значення «Рок-н-Ролл».
styles.push("Рок-н-Ролл");
show(styles);
// Замініть передостаннє значення на «Класика». Код заміни передостаннього значення має працювати для масивів будь-якої довжини.
styles.splice(-2, 1, "Класика");
show(styles);
// Видаліть перше значення масиву і виведіть його на консоль.
show(styles.slice(0, 1));
styles.splice(0, 1);
// Додайте в початок значення «Реп» і «Реггі».
styles.unshift("Реп", "Реггі");
show(styles);
