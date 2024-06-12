//Event handler (same in the next will be overwrite)

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {

//     console.log("Btn 1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);

// };

// let box = document.querySelector("div");

// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log("You are inside div");

// };

// box.onmouseover = () => {
//     console.log("You are inside div");
// };

//Event listener  (we can do multiple work)

// btn1.addEventListener('click', () => {
//     console.log("Bt1 was clicked");
// })

// btn1.addEventListener('click', () => {
//     console.log("Bt2 was clicked");
// })

// const handler = () => {
//     console.log("Bt3 clicked");
// };

// btn1.addEventListener("click", handler);


// btn1.removeEventListener("click", handler);

let modeBtn = document.querySelector("#mode");

let body = document.querySelector("body");

let currMode = 'light';

modeBtn.addEventListener("click", () => {
    if (currMode === 'light') {
        currMode = 'dark';
        body.classList.add('dark');
        body.classList.remove('light');
    }
    else {
        currMode = 'light';
        body.classList.add('light');
        body.classList.remove('dark');
    }
    console.log(currMode);

});

let changePara = document.querySelector(".para");
console.log(changePara);

let over = false;

let original = changePara.innerHTML;

modeBtn.addEventListener("mouseover", () => {
    if (over) {
        changePara.innerHTML = "Callo JavaScript";
        console.log("Changed");
    }
    else {
        changePara.innerHTML = original;
        console.log("Not changed");

    }
    over = !over;

});
