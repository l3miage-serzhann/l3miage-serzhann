/**
 * scnPersons2
 * ===========
 *
 * This scenario tests the implementation of the bi-directional association
 * HasMembers.
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Color, Team, Person, Car } = require( '../cybercars')

// Zoe is 25 years old.
const zoe = new Person('zoe', 25)

// The team 27 is named "The gladiators".
const gladiators = new Team("The gladiators", 27)
    affirmEquals(gladiators.getMembers(), new Set([]))

// Zoe joins the gladiators
zoe.setTeam(gladiators)
    affirmEquals(zoe.getTeam(), gladiators)
    affirmEquals(gladiators.getMembers(), new Set([zoe]))
zoe.setTeam(gladiators)
    affirmEquals(gladiators.getMembers(), new Set([zoe]))

// Djamila is 55 years old.
const djamila = new Person('djamila', 55)

// Djamila is added to the gladiators team
gladiators.addMembers(new Set([djamila]))
    affirmEquals(djamila.getTeam(), gladiators)
    affirmEquals(gladiators.getMembers(), new Set([zoe, djamila]))

//

// Djamila does not like the gladiators team. She leaves it.
gladiators.addMembers(new Set([djamila]))
    affirmEquals(djamila.getTeam(), gladiators)
    affirmEquals(gladiators.getMembers(), new Set([zoe, djamila]))

// The new team 666 is named "The highway".
const highway = new Team("The highway", 666)
    affirmEquals(highway.getMembers(), new Set([]))

// Zoe left the gladiator and moves to the highway.
zoe.setTeam(highway)
    affirmEquals(gladiators.getMembers(), new Set([djamila]))
    affirmEquals(highway.getMembers(), new Set([zoe]))

// There is a new team in town, the beavers number 42.
const beavers = new Team("The beavers", 42)

// zoe and djamila are enrolled in the beavers.
beavers.addMembers(new Set([djamila, zoe]))
    affirmEquals(djamila.getTeam(), beavers)
    affirmEquals(zoe.getTeam(), beavers)
    affirmEquals(beavers.getMembers(), new Set([zoe, djamila]))
    affirmEquals(highway.getMembers(), new Set([]))
    affirmEquals(gladiators.getMembers(), new Set([]))

// zoe does not like the beavers so she quit.
zoe.setTeam(null)
    affirmEquals(beavers.getMembers(), new Set([djamila]))
    affirmEquals(highway.getMembers(), new Set([]))
    affirmEquals(gladiators.getMembers(), new Set([]))


