// function is  most fonditional blok in js 

// function sayhello(name) {
//     console.log("hello, umo",name);
// }

//  sayhello();


//  function sallam() {
//     return "hello umooy"; 
//  }
//  var wax =sallam();

//  console.log(wax);
//  console.log(sallam());



//  // var getrole fuction =....sidaana waad dhihi kartaa that is the unqic thing of the java script............
 function getRole(name, role) {
    
    switch (role) {
        case "admin":
            return `${name} is full access`;
            break;
            case "subadmin":
            return `${name} is  access`;
            break;
            case "test":
            return `${name} is  access`;
            break;
            case "user":
            return `${name} user access`;
            break;
        default:
            return `${name} user trail user`;
            break;
    }
 }
  
 console.log(getRole("umal", "test"));

 var getrole= getRole("sammy", "user");

 console.log(getrole);



 // asstigment three using with out break , 








 // undesting the contex.....
  var myname="umal";
  if (myname === window.myname) {
    console.log("hey");
  }