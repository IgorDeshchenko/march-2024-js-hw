"use strict";
//Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

//                 0    1       2        3       4       5       6       7      8       9
let array=[100, true, 'batman', false, 'object', 4007, 'jarvis', 217, 'tony', 'steve'];
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);
console.log(array[5]);
console.log(array[6]);
console.log(array[7]);
console.log(array[8]);
console.log(array[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: 'metro2033',
    pageCount: 381,
    genre: 'post-apocalyptic'
}
console.log(book1.title);
console.log(book1.pageCount);
console.log(book1.genre);

let book2 = {
    title: 'The adventures of Robinson Crusoe',
    pageCount: 295,
    genre: 'adventures'
}
console.log(book2.title);
console.log(book2.pageCount);
console.log(book2.genre);

let book3 = {
    title: 'Journeys of the soul',
    pageCount: 328,
    genre: 'spiritual'
}
console.log(book3.title);
console.log(book3.pageCount);
console.log(book3.genre);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Ready player One',
    pageCount: 480,
    genre: 'science fiction',
    authors: [
        {
            name: 'Ernest Klein',
            age: 52
        }
    ]

}
console.log(book4.title);
console.log(book4.pageCount);
console.log(book4.genre);
console.log(book4.authors);

let book5 = {
    title: 'Animal Farm',
    pageCount: 92,
    genre: 'dystopia',
    authors: [
        {
            name: 'George Orwell',
            age: 46
        }
    ]

}
console.log(book5.title);
console.log(book5.pageCount);
console.log(book5.genre);
console.log(book5.authors);

let book6 = {
    title: '11/22/63',
    pageCount: 896,
    genre: 'science fiction',
    authors: [
        {
            name: 'Stephen King',
            age: 76
        }
    ]

}
console.log(book6.title);
console.log(book6.pageCount);
console.log(book6.genre);
console.log(book6.authors);


// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Tod',
        username:'One',
        password: 12345
    },
    {
        name: 'Bill',
        username: 'Two',
        password: 23456
    },
    {
        name: 'Sid',
        username: 'Three',
        password: 34567
    },
    {
        name: 'Jack',
        username: 'Four',
        password: 45678
    },
    {
        name: 'Russel',
        username: 'Five',
        password: 56789
    },
    {
        name: 'Joel',
        username: 'Six',
        password: 67890
    },
    {
        name: 'Cedrick',
        username: 'Seven',
        password: 78901
    },
    {
        name: 'Philip',
        username: 'Eight',
        password: 89012
    },
    {
        name: 'Tony',
        username: 'Nine',
        password: 90123
    },
    {
        name: 'Rico',
        username: 'Ten',
        password: 85633
    }
    ];
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let temperature_info =
    {
    monday:
        {
            morning: 10,
            noon: 17,
            evening: 16
        },

    tuesday:
        {
            morning: 12,
            noon: 20,
            evening: 17

        },


    wednesday:
        {
            morning: 13,
            noon: 21,
            evening: 18
        },

    thursday:
        {
            morning: 11,
            noon: 17,
            evening: 15
        },

    friday:
        {
            morning: 10,
            noon: 15,
            evening: 12
        },

    saturday:
        {
            morning: 9,
            noon: 12,
            evening: 10
        },

    sunday:
        {
            morning: 7,
            noon: 10,
            evening: 5
        }


}
console.log(temperature_info);



// Логічні розгалуження:

// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 1
if (x !== 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

let a = 1
if (a === 1){
    console.log('Вірно');
}else {
    console.log('Невірно');
}
let b = 1
if (b === 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}
let c = 1
if (c === -3){
    console.log('Вірно');
}else {
    console.log('Невірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = prompt('Дізнайтесь, яка зараз чверть години. Для цього просто напишіть число, яке ви бачите на своєму годиннику');
if (time >=0 && time<=15){
    console.log('Перша чверть')
}
if (time >=16 && time <=30){
    console.log('Друга чверть')
}
if (time >=31 && time <=45){
    console.log('Третя чверть')
}
if (time >=46 && time <=59) {
    console.log('Четверта чверть')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = prompt('Давайте визначемо декаду місяця, який зараз проходить. Для цього напишить число яке ви бачите у своєму календарі')
if (day >=1 && day <=10){
    console.log('Перша декада')
}
if (day >=11 && day <=20){
    console.log('Друга декада')
}
if (day >=21 && day >=31){
    console.log('Третя декада')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let schedule = prompt('Введіть порядковій номер дня тижня, щоб побачити розклад')
switch (schedule) {
    case '1':
        console.log('monday');
        break;

}
switch (schedule) {
    case '2':
        console.log('tuesday');
        break;

}
switch (schedule) {
    case '3':
        console.log('wednesday');
        break;

}
switch (schedule) {
    case '4':
        console.log('thursday');
        break;

}
switch (schedule) {
    case '5':
        console.log('friday');
        break;

}
switch (schedule) {
    case '6':
        console.log('saturday');
        break;

}
switch (schedule) {
    case '7':
        console.log('sunday');
        break;

}


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
if (!isNaN(num1) && !isNaN(num2)) {    //тут я вже пошукав в інтеренеті спосіб, як це зробити, щоб воно визначало саме число
    num1 = Number(num1);
    num2 = Number(num2);
    if (num1 > num2) {
        console.log("Максимальне число:", num1);
    } else if (num2 > num1) {
        console.log("Максимальне число:", num2);
    } else {
        console.log("Числа рівні між собою:", num1);
    }
}



// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let d; //тут написав d тому що в мене вже є змінна x
if (!d){
    d = 'default'
    console.log(d)
}



// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5){
    console.log("Супер",coursesAndDurationArray[0].title)
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log("Супер",coursesAndDurationArray[1].title)
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log("Супер",coursesAndDurationArray[2].title)
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log("Супер",coursesAndDurationArray[3].title)
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log("Супер",coursesAndDurationArray[4].title)
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log("Супер",coursesAndDurationArray[5].title)
}




