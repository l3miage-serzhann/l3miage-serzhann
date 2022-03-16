/**
 * scnPersons3
 * ===========
 *
 * In this scenario type checking have to be added. Errors should be
 * detected. The error message should start with the message provided
 * in the "affirmError" statements (see below). Exception must be raised
 * as following :
 *
 *  if (typeof name !== 'string') {
 *      throw new Error("name must be a string.")
 *  }
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Color, Team, Person,  Car } = require( '../cybercars')

zoe = new Person('zoe', 5)
    affirmError(
        () => new Person(12, 5),
        "name must be a string."
        )
    affirmError(
        () => new Person('ralf', 'ko'),
        "age must be an Integer.")
    affirmError(
        () => new Person('ralf', null),
        "age must be an Integer.")
    affirmError(
        () => new Person('ok', 3.2),
        "age must be an Integer.")
    affirmError(
        () => zoe.setName(15),
        "name must be a string.")
    affirmError(() => zoe.setName(null),
        "name must be a string.")
    affirmError(() => zoe.setAge('bonjour'),
        "age must be an Integer.")
    affirmError(() => zoe.setAge(null),
        "age must be an Integer.")



// The car AB-99-ER is red.
carAB38ER = new Car('AB-38-ER', Color.red,  null)
    affirmError(
        () => new Car(12, Color.red, null),
        "plateNumber must be a string.")
    affirmError(
        () => new Car('AB-99-ER', "red", null),
        "color must be a Color.")
    affirmError(
        () => new Car('AB-99-ER', Color.red, 12),
        "owner must be a Person.")
    affirmError(
        () => carAB38ER.setPlateNumber(12),
        "plateNumber must be a string.")
    affirmError(
        () => carAB38ER.setColor("red"),
        "color must be a Color.")
    affirmError(
        () => carAB38ER.setOwner(12),
        "owner must be a Person.")
    affirmError(
        () => carAB38ER.setOwner("wrong"),
        "owner must be a Person.")




    affirmError(
        () => zoe.addOwnedCar(12),
        "car must be a Car.")
    affirmError(
        () => zoe.removeOwnedCar(12),
        "car must be a Car.")
    affirmError(
        () => zoe.removeOwnedCar(carAB38ER),
        "removal failed: this person is not the owner of the car.")



