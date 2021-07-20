function makeFunc() {
    var name = 'John';
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();