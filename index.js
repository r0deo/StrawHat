const strawHats = ["Luffy", "Zoro", "Sanji", "Nami", "Usop", "Robin", "Chopper", "Franky"]

// 1. Create a function called `welcomeToTheNewWorld` that should welcome all the straw hats in to the new world in the console.
function welcomeToTheNewWorld(){
  strawHats.forEach(strawHat => console.log(`Welcome to the new world ${strawHat}`));
}

welcomeToTheNewWorld();
console.log("\n************\n");


// 2. Create a function called `findZoro` that should return only Zoro. Zoro is always lost so he needs his own function 😂
function findZoro() {
let Hunter = strawHats.find( char => char === "Zoro");
console.log(Hunter)
}

findZoro();
console.log("\n************\n");

// 3. Create a function called `findPirate` adding an input called pirateName that could find you the person you're looking for. If the person doesn't exist, it should print "Are you sure that's a pirate?"

function findPirate(pirateName) {
  let findPirate = strawHats.find(pirate=>pirate === pirateName);
  if (findPirate) {
    console.log (`Pirate found ${findPirate}`);
  } else {
       console.log (`Are you sure ${pirateName} is a pirate?`);
  }
}

findPirate("Nami");
findPirate("Smoker");
console.log("\n************\n");


 // 4. Create a function called `filterFruitEaters` that should filter the straw hats array and return only the devil fruit eaters. The fruit eaters are "Luffy", "Robin", and "Chopper".
function filterFruitEaters(){
  let fruitEaters = strawHats.filter(strawHat => strawHat === "Luffy" || strawHat === "Robin" || strawHat === "Chopper");
  console.log("The devil fruit eaters : " , fruitEaters);
}

filterFruitEaters();