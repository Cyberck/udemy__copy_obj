'use strict';

const car = {
    name: 'bmw',
    motor: 'power-full', 
    extra: {
        isAirbag: false,
        ballon: 5
    }
};

const clone = JSON.parse(JSON.stringify(car));

clone.extra.ballon = 10;

console.log(clone);
console.log(car);

