/**
 * scnPersons0
 * ===========
 *
 * This scenario is used to define the structure of the constructor,
 * getter and setters. The implementation of the application is not
 * checked meaning that methods do not have to implement any kind
 * of code.
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Person, Color, Car } = require( '../cybercars')

var _  // A "whatever" variable used just for anonymous expressions

// Some nice colors
_ = Color.red
_ = Color.blue
_ = Color.green
_ = Color.black
_ = Color.white

// Zoe is 5 years old.
const zoe = new Person('zoe', 5)
_ = zoe.getName()                   // value not checked
_ = zoe.getAge()                    // value not checked
_ = zoe.toString()                 // value not checked

// Zoe's dream is owning a red car.

// Time has gone. Zoe is now 18 years old.
zoe.setAge(18)

// The car AB-99-ER is red.
const carAB38ER = new Car('AB-38-ER', Color.red,  null)
_ = carAB38ER.getPlateNumber()      // value not checked
_ = carAB38ER.getColor()            // value not checked
_ = carAB38ER.toString()                 // value not checked
_ = carAB38ER.getOwner()            // value not checked

// Zoe buys the red car. Now she owns it.
carAB38ER.setOwner(zoe)
_ = zoe.getOwnedCars()              // value not checked

// Zoe buys a blue car BL-38-EU.
const carBL38EU = new Car('BL-38-EU', Color.blue, zoe)

// The car NO-38-IR is black.
const carNO38IR = new Car('NO-38-IR', Color.black)

// Zoe buys the black car.
zoe.addOwnedCar(carNO38IR)

// Zoe does not like the black car. Zoe sells it.
zoe.removeOwnedCar(carNO38IR)

// Zoe buys now the black car and again the red car.
zoe.addOwnedCar(carAB38ER)


zoe.addOwnedCars(
    new Set([carNO38IR, carAB38ER]))

