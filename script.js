// let taxi = {
//     make: 'Cady',
//     model: 'GM Cadillac',
//     year: 1955,
//     color: 'tan',
//     hood: 'not recline',
//     passengers: 5,
//     'rear seat': 'reclinable',
//     mileage: 2000000

// };


// let prequal = function(car) {
//     if (car.mileage > 10000) {
//         return false;
//     } else if (car.year > 1960) {
//         return false;
//     }
//     return true;
// }

// let worthAlook = prequal(taxi);

// if (worthAlook) {
//     console.log('You gotta check out this ' + taxi.make+ ' ' + taxi.model);

//     } else {
//         console.log('You should realy pass on the ' + taxi.make + ' ' + taxi.model);
//     }




// secret file

function getSecret(file, secretPassword) 
{ file.opened = file.opened + 1;
    if (secretPassword == file.password) {
    return file.contents; }
    else {
    return 'Invalid password! No secret for you.';
    } }
    function setSecret(file, secretPassword, secret) 
    { if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret; }
    }
    let superSecretFile = {
    level: 'classified',
    opened: 0,
    password: 2,
    contents: 'Dr. Evel`s next meeting is in Detroit.'
    };
    let secret = getSecret(superSecretFile, 2); 
    console.log(secret);
    setSecret(superSecretFile, 2, 'Dr. Eve`s next meeting is in Philadelphia.'); 
    secret = getSecret(superSecretFile, 2);
    console.log(secret);


// random new car

function makeCar () {
    let makes = ['Chevy', 'GM', 'Fiat', 'Webville Motors', 'Tucker'];
    let models = ['Cadillac', '500', 'Bel-Air', 'Taxi', 'Torpedo'];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ['red', 'blue', 'tan', 'yellow', 'white'];
    let convertible = [true, false];

    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 4) + 1;
    let rand6 = Math.floor(Math.random() * 2);

    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6]
    };
    return car;
}

function displayCar (car) {
    console.log('Your new car is a ' + car.year + ' ' + car.make + ' ' + car.passengers + ' ' + car.model);
}

let carToSell = makeCar();
displayCar(carToSell);


// objects method

let taxi = {
    make: 'Cady',
    model: 'GM Cadillac',
    year: 1955,
    color: 'tan',
    hood: 'not recline',
    passengers: 5,
    'rear seat': 'reclinable',
    mileage: 20000,
    started: false,

    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            alert('Zoom-zoom');
        } else {
        alert('Hwww-www');
        }
    }

};

//taxi.drive();



// let eightBall = { index: 0,
//     advice: ['yes', 'no', 'maybe', 'not a chance'],
//     shake: function() {
//     this.index = this.index + 1;
//     if (this.index >= this.advice.length) { 
//         this.index = 0;
//     } 
// },
//     look: function() {
//     return this.advice[this.index];
// }
// };
// eightBall.shake();
// eightBall.shake();

// console.log(eightBall.look());



let cadi = { 
    make: 'GM',
    model: 'Cadillac', 
    year: 1955,
    color: 'tan', 
    passengers: 5, 
    convertible: false, 
    mileage: 12892,
    started: false,
    fuel: 0,
    
start: function() { 
    this.started = true;
    alert('The car is on empty, fill up before starting!');
},
stop: function() { 
    this.started = false;
},

drive: function() { 
    if (this.started) {
        if (this.fuel > 0) {
            alert(this.make + ' ' + this.model + ' goes zoom zoom!');
            this.fuel = this.fuel - 1;
        } else {
            alert('Out of fuel.');
            this.stop();
    } 
    } else {
        alert('You need to start first.')
    }
},

addFuel: function (amount) {
    this.fuel = this.fuel + amount;
    }

};


// cadi.start();
// cadi.addFuel(0);
// cadi.drive();
// cadi.drive();
// cadi.drive();
// cadi.start();
// cadi.drive();
// cadi.drive();



let access = document.getElementById('code2');
let code = access.innerHTML;
    code += 'midhight';

console.log(code);