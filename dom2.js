// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// let text = prompt("Enter text: ");

// h2.innerText = h2.innerText + " " + text;

let divs = document.querySelectorAll(".box");

let idx = 1;

for (let div of divs) {
    div.innerText = `new unique value ${idx}`
    idx++;
}

// divs[0].innerText = "New Unique value 1";
// divs[1].innerText = "New unique value 2";
// divs[2].innerText = "new unique value 3";
