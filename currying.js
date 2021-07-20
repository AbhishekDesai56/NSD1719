let add = function(x) {
    return function(y) {
        console.log(x+y);
    }
}

let callAdd = add(2);
callAdd(3);