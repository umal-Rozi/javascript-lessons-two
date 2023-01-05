// for loop of javascript 
// // make thing again and agian 
// for (let i=0; i<=10; i++){
//     console.log(i);
// }

const states= ['somaliland',
 'hargeisa',
 'burco',
 35474,
 'boorma' 
];

for( let i=0; i <= states.length; i++){
    if(typeof states[i] !=="string") continue;  // markaad so sarisid kaliya data string ah.......=== just numbers uun weyeh
    console.log(states[i]);  //console.log(states[index rabtid]);

}
// let name = "John";
// let text = `Welcome, ${name}`;
// console.log(text);


let name = 'Tom';
Console.log("Welcome,  "  +  name  +  "!");