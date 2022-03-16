/**
 * scnTeams0
 * =========
 *
 * This scenario is used to define the structure of teams.
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Color, Team, Person, Car } = require( '../cybercars')

// The team 27 is named "The gladiators".
gladiators = new Team('The gladiators', 27)
_ = gladiators.getName()        // value not checked
_ = gladiators.getNumber()      // value not checked

// Zoe is 25 years old.
zoe = new Person('zoe', 25)

// Djamila is 55 years old.
djamila = new Person('djamila', 55)

// Zoe joins the gladiators.
zoe.setTeam(gladiators)
_ = gladiators.getMembers()     // value not checked

// Djamila is added to the gladiators.
gladiators.addMembers(new Set([djamila]))
