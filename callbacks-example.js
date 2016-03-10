var fruits = ['strawberry','raspberry'];

var fruits2 = ['kiwi','pineapple'];
fruits.forEach(function(element, index){
    console.log(element);
})



// displayThing(1, fruits);
//
// displayThing(1, fruits2);
//
// displayThing(1, "this is a string");
//
// displayThing(1, 500);
//
// displayThing(1, { name: "david", age: 92 });

// displayThing(1, function(){  console.log('hey!  i ran!')    })

foo (1);

function foo(a){
  var b = a + 1;
  console.log(b);

}
displayThing(function(){ console.log('i ran')} , fruits);

console.log('hey... I am done!   let us go to the bar');


function displayThing(cb, thing){
  console.log("Hey, I'm about to run the callback...");

  setTimeout(function(){
    cb();
  }, 3000);


  // console.log(cb);
  // console.log(thing);


}
