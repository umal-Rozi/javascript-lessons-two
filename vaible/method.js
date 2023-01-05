//method and objective in javasript../....

// this means the corrent contex or carrent refevrnce 

var user ={
    firstname: "umal",
    lastName: "rozi",
    role: "Admin",
    loginIn: "2345",
    facebooksignIn: true,
    courselist:[],
    buyCourse: function(courseName){
        this.courselist.push(courseName);
    },
    getCourses: function () {
        return `${this.firstname} is enrolled in total of ${this.courselist.length} courses`;
    },
}; 
var courselist=true;
console.log(user.firstname);
console.log(user.getCourses());
console.buyCourse("HTML COURSES");
console.log(user.getCourses());


// code waxa uu sharxayaa user and courses........
// Info assig   four