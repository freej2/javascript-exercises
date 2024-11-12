const findTheOldest = function(people) {
    const year = new Date().getFullYear();
    const how_old = people.map(person => {
        let age;
        if (!person.yearOfDeath)
            age = year - person.yearOfBirth
        else
            age = person.yearOfDeath - person.yearOfBirth
        return {name: person.name, age: age}
    })
    const age_sorted = how_old.sort((a,b) => {
        return a.age > b.age ? 1 : -1
    })
    return age_sorted[age_sorted.length -1];
};

// Do not edit below this line
module.exports = findTheOldest;
