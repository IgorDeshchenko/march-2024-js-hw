//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const calculateRectangleArea = (length, width) => length * width;

let sideA = 5;
let sideB = 10;
let result = calculateRectangleArea(sideA, sideB);

document.write('<p>Area of the rectangle:' + result + '</p>');
console.log('Area of the rectangle:', result);




//- створити функцію яка обчислює та повертає площу кола з радіусом r

//  !!!!!друга задача закоментована, бо є схожий елемент radius!!!!!

//const calculateCircleArea = radius => Math.PI * (radius * radius);

//let radius = 5;
//let area = calculateCircleArea(radius);
//let roundedArea = Math.round(area);

//document.write('<p>Area of the circle: ' + roundedArea + '</p>');
//console.log('Area of the circle:', roundedArea);





//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const calculateCylinderSurfaceArea = (radius, height) => {
    let circleArea = Math.PI * (radius * radius);
    let lateralArea = 2 * Math.PI * radius * height;
    return 2 * circleArea + lateralArea;
};

let radius = 5;
let height = 10;
let surfaceArea = calculateCylinderSurfaceArea(radius, height);
let roundedSurfaceArea = Math.round(surfaceArea);

document.write('<p>Surface area of the cylinder: ' + roundedSurfaceArea + '</p>');
console.log('Surface area of the cylinder:', roundedSurfaceArea);





//- створити функцію яка приймає масив та виводить кожен його елемент

const printArrayElements = arr => {
    for (let i = 0; i < arr.length; i++) {
        document.write('<p>Element ' + (i + 1) + ': ' + arr[i] + '</p>');
        console.log('Element ' + (i + 1) + ':', arr[i]);
    }
};

let arr = [10, 20, 30, 40, 50];
printArrayElements(arr);




//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = text => {
    let paragraph = document.createElement('p');
    paragraph.textContent = text;
    document.body.appendChild(paragraph);
    console.log(text);
};

createParagraph('Текст1');




//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createListWithItems = text => {
    let ul = document.createElement('ul');
    for (let i = 0; i < 3; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    console.log(text);
};

createListWithItems('Текст2');





//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const Items = (text, count) => {
    let ul = document.createElement('ul');
    for (let i = 0; i < count; i++) {
        let li = document.createElement('li');
        li.textContent = text;
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
    console.log(text);
};

Items('Текст3', 3);




//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список


const createListFromArray = arr => {
    let ul = document.createElement('ul');

    arr.forEach(item => {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
};

let myArray = [10, 'Hello', true, 3.14];
createListFromArray(myArray);




//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

const displayObjects = objects => {
    objects.forEach(object => {
        let div = document.createElement('div');
        let content = '<p>ID: ' + object.id + '</p>' +
            '<p>Name: ' + object.name + '</p>' +
            '<p>Age: ' + object.age + '</p>';
        div.innerHTML = content;
        document.body.appendChild(div);
    });
};

let objectsArray = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];

displayObjects(objectsArray);



//- створити функцію яка повертає найменьше число з масиву



const findMinNumber = arr => {
    if (arr.length === 0) {
        return undefined;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return min;
};

let numbers = [5, 3, 8, 1, 6];
let minNumber = findMinNumber(numbers);
console.log('Найменше число:', minNumber);




//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13




const sum = arr => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }

    return total;
};

let array = [1, 2, 10];
let result = sum(array);
console.log('Сума елементів масиву:', result);




//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (arr, index1, index2) => {
    if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
        console.log("Недійсні індекси");
        return arr;
    }
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
};

let array = [11, 22, 33, 44];
console.log("Початковий масив:", array);

swap(array, 0, 1);
console.log("Масив після заміни:", array);




//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }
    if (exchangeRate === undefined) {
        console.log("Обмінний курс для вказаної валюти не знайдено");
        return undefined;
    }
    return sumUAH / exchangeRate;
};

let result = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log("Результат обміну:", result);





















