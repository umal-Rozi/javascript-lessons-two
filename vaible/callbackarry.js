//function in the array......
 
function isEent (element){
    // if (element % 2===0) {
    //     return true;
    // }
    // return false;

    return element % 2===0;
}
console.log(isEent(3));

///// or using other difffrence 

var isEent = (element)  =>{

    return element % 2===0;
}
console.log(isEent(3));


//.every is callback function    // loking for single elements 

 var result= [2,4, 6, 8].every(isEent); 
 console.log(result);


 //other way 
 var result= [2,3, 6, 8].every((e) => (e % 2===0)); 
 console.log(result);

