var fruits = ['strawberry','raspberry'];

var fruits2 = ['kiwi','pineapple'];
fruits.forEach(function(element, index){
    console.log(element);
})



displayThing(1, fruits);

displayThing(1, fruits2);

displayThing(1, "this is a string");

displayThing(1, 500);

displayThing(1, { name: "david", age: 92 });

displayThing(1, function(){  console.log('hey!  i ran!')    })


function displayThing(cb, thing){

  console.log(thing);






}
