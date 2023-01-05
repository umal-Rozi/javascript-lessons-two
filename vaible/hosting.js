// what is the contex 
// and how the work ..........

var num= 3;

function sayhello(){
    console.log("sayhello")
}
sayhello();  // is excution context...


// galbal contex is collected information for evey thing...........

// excution context   => a) varibale objects   b) scope chain  c) this......


// two  roles:
// 1) function decelaration are scanned and made avaiable 
// 2) varaible declation are scanned and mode undefined....




// marka aad ku darysid wax 
function tipper(a) {
    var bill=a;        //var bill =parsenIn(a)    using to read  numbers as string but lettors is not read 
    console.log(bill+5);
}

tipper(5);   // using ""   markaad badinysid.



bigtippe("5");   
                                                   // two code are very different 
var bigtipper =function(a) {
    var bill=a;       
    console.log(bill+12);
};


