// console.log(`Hello Siva`);
// window.alert(`this is an alert`)
let firstName="Siva";
let lastName="Naidu";
let age=25;
let branch ="cse";

document.getElementById("myH1").textContent=`Hello new Developer`;
document.getElementById("myP").textContent=`Good Morning`;
document.getElementById("p1").textContent=`Your FirstName Name Is ${firstName}`;
document.getElementById("p2").textContent=`Your LastName Is ${lastName}`;
document.getElementById("p3").textContent=`Your Age Is ${age}`;
document.getElementById("p4").textContent=`Your Branch Is ${branch}`;



/*operators precedence 
1.parenthesis()
2.exponents
3.multiplication & division & modulo
4. addition & subtraction
*/
let result =4%2+22*5
console.log(result);
// let userNeme=window.prompt("User Name");
// console.log(userNeme);
let userName;
document.getElementById("mySubmit").onclick = function() {
    userName = document.getElementById("myText").value; // Now matches the "myText" id
    console.log(userName);
    document.getElementById("myH2").textContent = `Hello ${userName}`;
};


let pi=3.14;
let radius;
let circumference;

radius=window.prompt('Enter The radius of circle')
radius=Number(radius);


circumference=2*pi*radius;
console.log(circumference);
