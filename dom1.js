//console dir ,,,object printing
// console.dir(window.document);
// console.dir(document.body.childNodes[1]);

// console.dir(document);
// document.body.childNodes[3].innerText = "abcd";
//selecting id by id(unique)

//class html collection

// let heading = document.getElementById("heading"); //value of h1

// console.dir(heading);

// let headings = document.getElementsByClassName("heading");

// let button = document.getElementById("myId");

// let paragraph = document.getElementsByTagName("p");
// let firstEle = document.querySelector("p");  //return the first element

// let allEl = document.querySelectorAll("p"); //return node list

// let firstEleC = document.querySelector(".heading");  //return the first element (class name using.)

// let allElC = document.querySelectorAll(".heading");
// let allElI = document.querySelectorAll("#myId"); //# id

// console.dir(button);
// console.log(button);

// console.dir(headings);
// console.log(headings);

// console.dir(paragraph);
// console.log(paragraph);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

let div = document.querySelector("div");

// console.log(div.getAttribute("class"));

// console.log(div.setAttribute("class", "newClass"));
// div.style.backgroundColor = "red";

// div.style.visibility = "hidden";

// let newHeading = document.createElement("h1");

// newHeading.innerHTML = "<i> New Heading</i>";

// document.querySelector("body").prepend(newHeading);


// let btn = document.createElement("button");
// btn.innerText = "click me!";

// div.after(btn);

// newHeading.remove();

let btn1 = document.createElement("button");
btn1.innerText = "Click me!";

btn1.style.color = "white";
btn1.style.backgroundColor = "red";

document.querySelector("body").prepend(btn1);

let para = document.querySelector("p");

para.classList.remove("newClass");


