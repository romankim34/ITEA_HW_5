// Створити пустий об'єкт user;
// Добавити властивість name із значенням Вася;
// Добавити властивість surename із значенням Пупкін;
// Поміняти властивість name на Сергій;
// Видалити властивість name;

var user = {};

user.name = 'Вася';
user.surename = 'Пупкін';
user.name = 'Сергій';
delete user.name;

console.log(user);


// Об'єкт salaries з зарплатами. Напишіть код, який виводить суму всіх зарплат.

 var salaries = {
   "Вася": 100,
   "Петя": 300,
   "Даша": 250,
   "Антон": 500
 };
 var sumSalaries = 0;

for (var key in salaries) {
  sumSalaries += salaries[key]; 
};

console.log(sumSalaries);



// Використовуючи об'єкт salaries напишіть код, який виводить ім'я працівника з найбільшою зарплатою.
// Якщо такого немає, то виводити немає працівника.
var salaries = {
   "Вася": 100,
   "Петя": 300,
   "Даша": 250,
   "Антон": 50
 };

var maxSalery = 0,
    worker,
    allSaleries = 0;

for (var key in salaries) {
  allSaleries += salaries[key]; 
};

if (allSaleries == 0) {
    console.log( 'Такого работника нет' );
  };

for (var key in salaries) {
  if ( salaries[key] > maxSalery ) {
    maxSalery = salaries[key];
    worker = key; 
  };
};

console.log(worker || "");


