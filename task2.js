function showProps(obj, objKeyName) {
    return (objKeyName in obj);
}

const student1 = {
    name: "Oleg", 
    ownCity: "Moscow",
    age: 19,
    course: "Frontend"
}
console.log(showProps(student1, "name"));
