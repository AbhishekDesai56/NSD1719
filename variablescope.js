//Global Scope

function a() {
    console.log(b + " is a global scope variable")
}
var b = 10;
a();

//Local Scope
function c() {
    var d = 10;
    console.log(d + " is a local scope variable");
}
c();