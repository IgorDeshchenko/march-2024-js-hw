//- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone)
{
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;

}
let users = [];

users.push(new User(1, 'Vasia', 'Vasiliev', 'vvasiliev@gmail.com', '+380631111111'));
users.push(new User(2, 'Petia', 'Petrov', 'ppetrov@gmail.com', '+380632222222'));
users.push(new User(3, 'Kolia', 'Nikolaev', 'knikolaev@gmail.com', '+380633333333'));
users.push(new User(4, 'Dima', 'Dmitriev', 'ddmitriev@gmail.com', '+380634444444'));
users.push(new User(5, 'Youra', 'Youriev', 'yyouriev@gmail.com', '+380635555555'));
users.push(new User(6, 'Sveta', 'Svetlanova', 'ssvetlanova@gmail.com', '+380636666666'));
users.push(new User(7, 'Roma', 'Romanov', 'rromanov@gmail.com', '+380637777777'));
users.push(new User(8, 'Ira', 'Ireeva', 'iireeva@gmail.com', '+380638888888'));
users.push(new User(9, 'Misha', 'Mishailov', 'mmishailov@gmail.com', '+380639999999'));
users.push(new User(10, 'Andrey', 'Andreyev', 'aandreyev@gmail.com', '+380630000000'));

console.log(users);



//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let filteredUsers = users.filter(user => user.id % 2===0);

console.log(filteredUsers);



//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

users.sort((a, b) => a.id - b.id);

console.log(users);



//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [];

clients.push(new Client(1, 'Vasia', 'Vasiliev', 'vvasiliev@gmail.com', '+380631111111', ['item1', 'item2']));
clients.push(new Client(2, 'Petia', 'Petrov', 'ppetrov@gmail.com', '+380632222222', ['item3', 'item4']));
clients.push(new Client(3, 'Kolia', 'Nikolaev', 'knikolaev@gmail.com', '+380633333333', ['item5', 'item6']));
clients.push(new Client(4, 'Dima', 'Dmitriev', 'ddmitriev@gmail.com', '+380634444444', ['item7']));
clients.push(new Client(5, 'Youra', 'Youriev', 'yyouriev@gmail.com', '+380635555555', ['item8', 'item9', 'item10']));
clients.push(new Client(6, 'Sveta', 'Svetlanova', 'ssvetlanova@gmail.com', '+380636666666', ['item11']));
clients.push(new Client(7, 'Roma', 'Romanov', 'rromanov@gmail.com', '+380637777777', ['item12', 'item13']));
clients.push(new Client(8, 'Ira', 'Ireeva', 'iireeva@gmail.com', '+380638888888', ['item14']));
clients.push(new Client(9, 'Misha', 'Mishailov', 'mmishailov@gmail.com', '+380639999999', ['item15', 'item16']));
clients.push(new Client(10, 'Andrey', 'Andreyev', 'aandreyev@gmail.com', '+380630000000', ['item17', 'item18', 'item19']));

console.log(clients);



//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

clients.sort((a, b) => a.order.length - b.order.length);

console.log(clients);



//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.

function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}

//додати в об'єкт функції:

//  -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
Car.prototype.drive = function() {
    console.log(`speed ${this.maxSpeed} km/h`);
}

//  -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
Car.prototype.info = function() {
    console.log(`Model: ${this.model}`);
    console.log(`Manufacturer: ${this.manufacturer}`);
    console.log(`Year: ${this.year}`);
    console.log(`Max Speed: ${this.maxSpeed} km/h`);
    console.log(`Engine Volume: ${this.engineVolume} L`);
}

//  -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
Car.prototype.increaseMaxSpeed = function(newSpeed) {
    this.maxSpeed += newSpeed;
    console.log(`max speed: ${this.maxSpeed} km/h`);
}

//   -- changeYear (newValue) - змінює рік випуску на значення newValue
Car.prototype.changeYear = function(newValue) {
    this.year = newValue;
    console.log(`year of release: ${this.year}`);
}

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
Car.prototype.addDriver = function(driver) {
    this.driver = driver;
    console.log(`driver: ${JSON.stringify(this.driver)}`);
}

let myCar = new Car('Model S', 'Tesla', 2020, 250, 75);

// Виклик методів
myCar.drive();
myCar.info();

myCar.increaseMaxSpeed(20);
myCar.changeYear(2021);
myCar.addDriver({ name: 'Igor', age: 34, experience: 5 });

myCar.info();



//-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Anna', 19, 36),
    new Cinderella('Bella', 21, 37),
    new Cinderella('Cindy', 18, 38),
    new Cinderella('Diana', 22, 39),
    new Cinderella('Ella', 20, 35),
    new Cinderella('Fiona', 23, 37),
    new Cinderella('Gina', 19, 36),
    new Cinderella('Hanna', 21, 38),
    new Cinderella('Isla', 20, 39),
    new Cinderella('Jill', 22, 35)
];

class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }

    findCinderella(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.shoeSize) {
                console.log(`Попелюшка з принцом: ${cinderella.name}`);
                return cinderella;
            }
        }
        console.log('Попелюшку не знайдено');
        return null;
    }

    findCinderellaUsingFind(cinderellas) {
        let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === this.shoeSize);
        if (foundCinderella) {
            console.log(`Попелюшка з принцом: ${foundCinderella.name}`);
        } else {
            console.log('Попелюшку не знайдено');
        }
        return foundCinderella;
    }
}

let prince = new Prince('Charles', 25, 36);
prince.findCinderella(cinderellas);
prince.findCinderellaUsingFind(cinderellas);



//Через Array.prototype. створити власний foreach, filter, map

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

let arr = [1, 2, 3, 4, 5];

console.log('myForEach:');
arr.myForEach((element, index) => {
    console.log(`Елемент на індексі ${index}: ${element}`);
});

let filteredArr = arr.myFilter(element => element > 2);
console.log('myFilter:', filteredArr); // [3, 4, 5]

let mappedArr = arr.myMap(element => element * 2);
console.log('myMap:', mappedArr); // [2, 4, 6, 8, 10]
