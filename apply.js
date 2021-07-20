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

printInfo.apply(name, ["Maharashtra"]);
printInfo.apply(name2, ["Delhi"]);