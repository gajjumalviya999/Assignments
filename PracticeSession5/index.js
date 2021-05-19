var  add = function(a,b) {
    console.log("add");
    return a+b;
}
console.log(add(2,3));

function minus(a,b){
console.log("Minus")
console.log(a-b);
}
minus(2,3);


(function(){
    console.log("Multiply");
})();


console.log("------------------------------------");


var ticketline=["Ram","shyam","arjun","me"];
var a=ticketline.indexOf("me");
console.log(a);
var b=ticketline.length;
console.log(b);
console.log(ticketline.shift() ,ticketline);
console.log(ticketline.unshift("VIP"),ticketline);
console.log(ticketline);
//console.log(ticketline.splice(2),ticketline);
console.log(ticketline.push("anjani"),ticketline);

var myname="Gajendra Malviya";
var h=myname.split(" ");
console.log(h,h.join(","));

console.log("----------Objects -----------");
//first wayy to create the object;


const biodata={
    fistname:"Gajendra",
    lastname:"Malviya",
    dob:"9/4/1999",
    fullname: function(){
        return this.fistname+" "+this.lastname;
    }
}
console.log(biodata);
console.log(biodata.fistname);
console.log(biodata["lastname"]);
console.log(biodata.fullname());
biodata.company="google";


//second way
var copiedBiodata=Object.assign({},biodata);
biodata.age=23;
console.log(biodata);
console.log(copiedBiodata);


//practice session
var colors=["red","yellow","green","black","white"];
console.log(colors[0]);
console.log(colors[2]);
colors[-1]="ultraviolet";
var fourthcolr=colors[3];
colors.push("lighblue");
colors.unshift("blue");
console.log(colors.length);
colors.pop();
console.log(colors.length);
for(color in colors){
    console.log(color);
}
for(color in colors){
    console.log(colors.indexOf(color),color);
}
var lastcolor=colors[colors.length-1];


