# Array functions

## Overview 
In the previous class we created the filter function, which is one of the built-in methods, from scratch. In this activity you will be using the built-in arrays methods to manipulate the array data.

## Instructions
1. Create a function called `welcomeToTheNewWorld` that should welcome all the straw hats in to the new world in the console.
2. Create a function called `findZoro` that should return only Zoro. Zoro is always lost so he needs his own function 😂
3. Create a function called `findPirate` adding an input called pirateName that could find you the person you're looking for. If the person doesn't exist, it should print "Are you sure that's a pirate?"
4. Create a function called `filterFruitEaters` that should filter the straw hats array and return only the devil fruit eaters. The fruit eaters are "Luffy", "Robin", and "Chopper".

## Test cases
1. All the names should be welcomed in the console log
``` js
welcomeToTheNewWorld() => 
'Welcome to the new world Luffy' "Welcome to the new world Zoro" etc... 
```
2.
``` js
findZoro() => ["Zoro"]
```
3. 
``` js
findPirate("Nami") => ["Nami"]
findPirate("Smoker") => "Are you sure that's a pirate?"
```
4. 
``` js
filterFruitEaters() => ["Luffy", "Robin", "Chopper"]
```