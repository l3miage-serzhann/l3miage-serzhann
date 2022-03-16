/**
 * scnTeams1
 * =========
 *
 * This scenario tests the implementation of the association
 * HasMembers assuming that it is navigable in the direction from a member
 * to the team but not on the other way around.
 * In this scenario a team does not "know" its members.
 */

const { affirmEquals, affirmError } = require( '../lib/affirm')
const { Color, Team, Person, Car } = require( '../cybercars')

// Zoe is 18 years old.
zoe = new Person('zoe', 5)

// The team 27 is named "The gladiators".
gladiators = new Team("The gladiators", 27)

// Zoe joins the gladiators
zoe.setTeam(gladiators)
    affirmEquals(zoe.getTeam(), gladiators)