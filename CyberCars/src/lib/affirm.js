/**
 * Make assertions available to different execution environments
 * such as node-js. Defines affirmEquals and affirmError. See
 * scenarios for example of usage.
 */

FAIL_AS_ERROR=true

function equSet(s1,s2) {
    return (
        (s1 instanceof Set && s2 instanceof Set)
        && (s1.size === s2.size)
        && (Array.from(s1).every(x => s2.has(x))) )
}

function fail(message) {
    const text = `FAILURE: ${message}`
    if (FAIL_AS_ERROR) {
        throw new Error(text)
    } else {
        console.error(text)
    }
}



function toString(value) {
    if (value instanceof Set) {
        const body = Array.from(value).map(e=>toString(e)).join(',')
        return 'Set(' + body + ')'
    } else if (value.toString() !== undefined) {
            return value.toString()
    } else {
        return value
    }
}

function affirmEquals(value1, value2) {
    if (value1 === value2) {
        return
    }
    if (value1 instanceof Set) {
        if (equSet(value1, value2)) {
            return
        }
    }
    console.error('='.repeat(80))
    console.error('affirmEquals: WRONG VALUE')
    console.error('    FOUND:    ' + toString(value1))
    console.error('    EXPECTED: ' + toString(value2))
    console.error('='.repeat(80))
    fail(`affirmEquals: ${value1} !== ${value2}`)
}

function affirmError(functionExpression, prefix) {
    if (typeof functionExpression !== 'function') {
        throw new Error(
            "Internal error: affirmError first argument is "
            + typeof functionExpression)
    }
    try {
        // evaluate the expression
        functionExpression()
    } catch (error) {
        // the expression raised an error, this is ok
        // but check the message
        const message = error.message
        if (! message.startsWith(prefix)) {
            console.error('='.repeat(80))
            console.error('affirmError : WRONG ERROR MESSAGE')
            console.error(`    FOUND:    ${message}`)
            console.error(`    EXPECTED: ${prefix}`)
            console.error('='.repeat(80))
            fail(`affirmError. "${message}" must starts with ${prefix}`)
            return
        } else {
            return
        }
    }
    // the expression raised no error. This is an error.
    console.error('='.repeat(80))
    console.error(`affirmError : NO ERROR RAISED. Missing error message : "${prefix}"`)
    fail(`affirmError. An error must have been raised : ${prefix}`)
}

affirmEquals(new Set(), new Set() )
affirmEquals(new Set([3,4]), new Set([4,3]) )

module.exports = {affirmEquals, affirmError};
