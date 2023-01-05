// conditional in js

// var tem;

//tem=40;
// var result = tem<20;
// console.log(result);


// true or flase waxay sheegayan ama so sarayaan inta danbeh.
if( true) {
    console.log("xog waa qabobow");
}

//if block
// === ,==, <= ,>= , 

if( tem ==20) {
    console.log("xog waa qabobow");
}else {
    console.log("waa bayl")
}


// check the login  sign up

var email = true;
var facebook = false;
var google = true;

if (email || facebook || google) {
    console.log("login success");
} else{
    console.log("check your login");
}

// assigment two ...........





// sign out the login 
//temparey operator in js 

var auto=true; // false

if( auto){
    console.log("show signout botten");
}else{
    console.log("show login option");
}
// short way 

var auto=true;
auto ? console.log("signout button") : console.log("login");

