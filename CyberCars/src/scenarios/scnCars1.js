/**
 * scnPersons1
 * ===========
 *
 * This scenario tests the implementation of the association
 * OwnsCar assuming that it is navigable in the direction from car
 * to the owner of this car (but not on the other way around:
 * a person does not "know" her or his car.
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Color, Person, Car } = require( '../cybercars')

// Zoe is 5 years old.
zoe = new Person('zoe', 5)
    affirmEquals(zoe.getName(), 'zoe')
    affirmEquals(zoe.getAge(), 5 )

// Zoe's dream is owning a red car.

// Time has gone. Zoe is now 18 years old.
zoe.setAge(18)
    affirmEquals(zoe.getAge(), 18)

// Djamila is 55 years old.
djamila = new Person('djamila', 55)
    affirmEquals(djamila.getName(), 'djamila')
    affirmEquals(djamila.getAge(), 55)

// The car AB-99-ER is red.
carAB38ER = new Car('AB-38-ER', Color.red,  null)
    affirmEquals(carAB38ER.getPlateNumber(), 'AB-38-ER')
    affirmEquals(carAB38ER.getColor(), Color.red)
    affirmEquals(carAB38ER.getOwner(), null)

// Zoe buys the red car. Now she owns it.
carAB38ER.setOwner(zoe)
    affirmEquals(carAB38ER.getPlateNumber(), 'AB-38-ER')
    affirmEquals(carAB38ER.getColor(), Color.red)
    affirmEquals(carAB38ER.getOwner(), zoe)

// Now Djamila becomes the owner of the red car.
carAB38ER.setOwner(djamila)
    affirmEquals(carAB38ER.getOwner(), djamila)




