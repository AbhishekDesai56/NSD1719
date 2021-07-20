let name = {
    firstName: "John",
    lastName: "Done"
}

let name2 = {
    firstName: "Alice",
    lastName: "Mary"
}

let printInfo = function(state) {
    console.log(this.firstName + " " + this.lastName + " from state " + state);
}

printInfo.call(name, "Maharashtra");
printInfo.call(name2, "Delhi");