/**
 * scnPersons2
 * ===========
 *
 * This scenario tests the implementation of the bi-directional
 * OwnsCars association .
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Color, Person, Car } = require( '../cybercars')

// Zoe is 5 years old.
zoe = new Person('zoe', 5)
    affirmEquals(zoe.getOwnedCars(), new Set())

// Zoe's dream is owning a red car.

// Time has gone. Zoe is now 18 years old.
zoe.setAge(18)
    affirmEquals(zoe.getOwnedCars(), new Set())

// Djamila is 55 years old.
djamila = new Person('djamila', 55)
    affirmEquals(djamila.getOwnedCars(), new Set())

// The car AB-99-ER is red.
carAB38ER = new Car('AB-38-ER', Color.red,  null)

// Zoe buys the red car. Now she owns it.

carAB38ER.setOwner(zoe)
    affirmEquals(
        zoe.getOwnedCars(),
        new Set([carAB38ER]))

// Now Djamila becomes the owner of the red car.
carAB38ER.setOwner(djamila)
    affirmEquals(
        djamila.getOwnedCars(),
        new Set([carAB38ER]))
    affirmEquals(
        zoe.getOwnedCars(),
        new Set())

// Djamila sells the red car.
carAB38ER.setOwner(null)
    affirmEquals(
        djamila.getOwnedCars(),
        new Set())
// OK
// Zoe buys a blue car BL-38-EU.
carBL38EU = new Car('BL-38-EU', Color.blue, zoe)
// The car NO-38-IR is black.
carNO38IR = new Car('NO-38-IR', Color.black)

zoe.addOwnedCar(carNO38IR)

    affirmEquals(
        zoe.getOwnedCars(),
        new Set([carNO38IR, carBL38EU]))

zoe.removeOwnedCar(carNO38IR)
    affirmEquals(
        zoe.getOwnedCars(),
        new Set([carBL38EU]))

// Zoe buys now the black car and again the red car.
zoe.addOwnedCars(
    new Set([carNO38IR, carAB38ER]))
    affirmEquals(
        zoe.getOwnedCars(),
        new Set([carNO38IR, carAB38ER, carBL38EU]))



