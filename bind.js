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

let pInfo = printInfo.bind(name,"Maharashtra");
let pInfo2 = printInfo.bind(name2,"Delhi");
console.log(pInfo);
pInfo();
pInfo2();