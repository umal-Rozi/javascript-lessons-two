// array  IS collection of the data 
// MDN 

var countries=["soamliald", "somalia" , "Jabtuti"];

var states=new Array("Hargeisa","muqdisho","jabuti");
console.log(states); //usng indexing [0 or 1 ] 

// .length  is using the number of the array or intay ka koobanyahy arraygu
console.log(states.length);


// when you went to replace thing u using this 
states[1]="xamar";
console.log(states);


var user=["Umal-Rozi", "umooy@gmail", 7, true];
console.log(user);

user.pop();
console.log(user);

user.unshift( "helllllo"); //// unshift ku dar weeyeh for xaga hore 
console.log(user);

// shift waa ka sharaa new value ku so dartay 


console.log(user.indexOf("neweyy")); /// 

console.log(Array.from("Umal_Rozi"));  // uu kala saar saarayaa


