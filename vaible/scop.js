
//{}  .... scope lo yaqaana wixii ku dhex jirahabah

var name = "Umal";

console.log("line 6",name);

function sayname(){
    var name ="umooy";
    console.log("line 10", name);
    saynametwo();


    function saynametwo() {
        var name="hoy";
        console.log("lone 16", name);

    }
}
sayname();