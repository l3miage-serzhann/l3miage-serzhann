/**
 * scnTeams3
 * ===========
 *
 * In this scenario type checking have to be added. Errors should be
 * detected. The error messnumber should start with the messnumber provided
 * in the "affirmError" statements (see below). Exception must be raised
 * as following :
 *
 *  if (typeof name !== 'string') {
 *      throw new Error("name must be a string.")
 *  }
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Color, Team, Person, Car } = require( '../cybercars')

const highway = new Team('The highway', 666)
    affirmError(
        () => new Team(12, 5),
        "name must be a string."
        )
    affirmError(
        () => new Team('The highway', 'ko'),
        "number must be an Integer.")
    affirmError(
        () => new Team('The highway', null),
        "number must be an Integer.")
    affirmError(
        () => new Team('The highway', 3.2),
        "number must be an Integer.")
    affirmError(
        () => highway.setName(15),
        "name must be a string.")
    affirmError(() => highway.setName(null),
        "name must be a string.")
    affirmError(() => highway.setNumber('bonjour'),
        "number must be an Integer.")
    affirmError(() => highway.setNumber(null),
        "number must be an Integer.")



const zoe = new Person('zoe', 25)
    affirmError(
        () => zoe.setTeam(12),
        "team must be a Team.")
    affirmError(
        () => zoe.setTeam("wrong"),
        "team must be a Team.")

    affirmError(() =>
        highway.addMembers(14),
        "members must be a set.")
    affirmError(() =>
        highway.addMembers(new Set([zoe,15])),
        "members must be a set of Persons.")

    affirmError(() =>
        highway.addMember(17),
        "member must be a Person.")
    affirmError(() =>
        highway.addMember(highway),
        "member must be a Person.")

const djamila = new Person('djamila', 55)

    affirmError(() =>
        highway.removeMember(17),
        "member must be a Person.")
    affirmError(() =>
        highway.removeMember(djamila),
        "removal failed: this team is not the team of the person.")