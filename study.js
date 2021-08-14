const myVar = "Foo";

//two functions in global scope

function first() {
  console.log("Inside first()");
  console.log("myVar is currently equal to:", myVar);
}

function second() {
  const myVar = "Bar";

  first();
}

second();
//=> Inside first()
//=> myVar is currently equal to: Foo



/*
//second is in global scope and first is inside second

function second() {
  function first() {
    console.log("Inside first()");
    console.log("myVar is currently equal to:", myVar);
  }

  const myVar = "Bar";

  first();
}

second();
//=> Inside first()
//=> myVar is currently equal to: Bar
*/