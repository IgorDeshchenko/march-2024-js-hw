//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'


const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
 strings.forEach(string => {
     const length = string.length;
   console.log(`'${string}' — довжина: ${length} символів`);
 });



//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'


const strings1 = ['hello world', 'lorem ipsum', 'javascript is cool'];
 strings1.forEach(string => {
     const upperCaseString = string.toUpperCase();
     console.log(upperCaseString);
 });



//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


const strings2 = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
strings2.forEach(string => {
    const lowerCaseString = string.toLowerCase();
    console.log(lowerCaseString);
});



//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let str = ' dirty string   ';
let cleanedStr = str.trim();
console.log(cleanedStr);


//- Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToArray(str) {
    return str.split(' ');
}

let str1 = 'Ревуть воли як ясла повні';
let arr = stringToArray(str1);

console.log(arr);



//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.


const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
const stringNumbers = numbers.map(number => number.toString());

console.log(stringNumbers);


//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {
    if (direction === 'ascending') {
        return nums.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return nums.sort((a, b) => b - a);
    } else {
        throw new Error("Direction must be either 'ascending' or 'descending'");
    }
}

let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

//===========================================================================================================//

//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];



//  -- відсортувати його за спаданням за monthDuration

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

console.log(coursesAndDurationArray);




//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);

console.log(filteredCourses);



//-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

let transformedArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));

console.log(transformedArray);


//================================================================================================================//

//описати колоду карт (від 6 до туза без джокерів)


function generateDeck() {
    const suits = ['spade', 'diamond', 'heart', 'clubs'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    const deck = [];

    for (let suit of suits) {
        for (let value of values) {
            let cardColor = (suit === 'diamond' || suit === 'heart') ? 'red' : 'black';
            deck.push({ cardSuit: suit, value: value, color: cardColor });
        }
    }

    return deck;
}


//  - знайти піковий туз
function findAceOfSpades(deck) {
    return deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
}

const deckAce = generateDeck();
const aceOfSpades = findAceOfSpades(deckAce);

console.log(aceOfSpades);



//- всі шістки
function findAllSixes(deck) {
    return deck.filter(card => card.value === '6');
}

const deckSix = generateDeck();
const allSixes = findAllSixes(deckSix);

console.log(allSixes);




//- всі червоні карти
function findAllRedCards(deck) {
    return deck.filter(card => card.color === 'red');
}

const deckRed = generateDeck();
const allRedCards = findAllRedCards(deckRed);

console.log(allRedCards);




//- всі буби
function findAllDiamonds(deck) {
    return deck.filter(card => card.cardSuit === 'diamond');
}

const deckD = generateDeck();
const allDiamonds = findAllDiamonds(deckD);

console.log(allDiamonds);



//- всі трефи від 9 та більше
function findClubsFromNine(deck) {
    const cardValues = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    return deck.filter(card => card.cardSuit === 'clubs' && cardValues.indexOf(card.value) >= cardValues.indexOf('9'));
}

const deck = generateDeck();
const allClubsFromNine = findClubsFromNine(deck);

console.log(allClubsFromNine);



//=================================================================================================================//

//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
//

const deckBox = generateDeck();

const cardsBySuits = deckBox.reduce((result, card) => {
    if (!result[card.cardSuit]) {
        result[card.cardSuit] = [];
    }
    result[card.cardSuit].push(card);
    return result;
}, {});

console.log(cardsBySuits);



//=================================================================================================================//



//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

//--написати пошук всіх об'єктів, в який в modules є sass

function findModulesWithSass(courses) {
    let coursesWithSass = [];

    for (let course of courses) {
        if (course.modules.includes('sass')) {
            coursesWithSass.push(course);
        }
    }
    return coursesWithSass;
}
let coursesWithSass = findModulesWithSass(coursesArray);

console.log(coursesWithSass);


//--написати пошук всіх об'єктів, в який в modules є docker


function findModulesWithDocker(courses) {
    let coursesWithDocker = [];

    for (let course of courses) {
        if (course.modules.includes('docker')) {
            coursesWithDocker.push(course);
        }
    }
    return coursesWithDocker;
}

let coursesWithDocker = findModulesWithDocker(coursesArray);

console.log(coursesWithDocker);





