// Code your solution here
function findMatching(value, driver){
    return value.filter(
        (maybeMatch) => maybeMatch.toLowerCase() === driver.toLowerCase()
        );
}

function fuzzyMatch(value, string){
    return value.filter(
        (maybeMatch) => maybeMatch.toLowerCase().indexOf(string.toLowerCase()) === 0
        );
}

function matchName(value, name){
    return value.filter(
        (match) => match.name === name
    );
} 
