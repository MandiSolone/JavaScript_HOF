console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function plus(number) {
    return function (plusNumber) {
        return number + plusNumber;
    };
}

const plus15 = plus(15);

console.log(plus15(10));


////

let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

users.forEach(function(names){
    console.log(names.name);
  });

  //another way to do this 

  users.forEach(whatever =>
    console.log(whatever.name));

// Exercise 3 Section//using the objects from above
console.log("EXERCISE 3:\n==========\n");

let results = users.map((x) => {
    return { name: x.name, score: x.score};
}); 

console.log(results);

// Exercise 4 Section//using the objects from above
console.log("EXERCISE 4:\n==========\n");

const result = users.filter((h) => h.isActive === true);

console.log(result); 

// Exercise 5 Section//using the objects from above
console.log("EXERCISE 5:\n==========\n");

 users.sort((a, b) => {
  if (a.score < b.score) return 1; 
  else return -1;
 });
 console.log(users);

 // Exercise 6 Section//using the objects from above
console.log("EXERCISE 6:\n==========\n");

const sum = users.reduce((a, b) => a + b.score, 0) / users.length; 

console.log(sum);