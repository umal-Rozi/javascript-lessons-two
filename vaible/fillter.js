// fill and fillter in array 

// fill wax kasta oo lo bas gareeyo ayaa galya hakii arrayga...
// fillter 


const numbers =[2, 3, 3, 5, 6, 7, 7, 8, 8, 9];
console.log(numbers.fill(0));



const mynumbers= [22, 33, 44, 55, 666, 77, 88, 9, 00];
const result =mynumbers.filter((num) => num != 666);   // usig like condition oo kaleh 

console.log(result);





function main() {
    var country = readLine();
    var capital = readLine();
    
    console.log(countryCard(country, capital));
}

function countryCard(country, capital){
    //complete the function
    //use backtick (` `) for template literal
    return(`Name:${country},Capital:${capital}`);
}