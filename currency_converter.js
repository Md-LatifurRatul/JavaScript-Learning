const base_url = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");

const btn = document.querySelector("form button");

const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

let msg = document.querySelector(".msg");



for (let select of dropdowns) {

    for (currCode in countryList) {
        let newOption = document.createElement("option");

        newOption.innerText = currCode;
        newOption.value = currCode;
        select.append(newOption);
        if (select.name == 'from' && currCode == 'USD') {
            newOption.selected = "selected";
        }
        else if (select.name == 'to' && currCode == 'BDT') {
            newOption.selected = "selected";
        }

    }
    select.addEventListener('change', (evt) => {
        updateFlag(evt.target);
    });


}


const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");

    let amtValue = amount.value;
    if (amtValue === "" || amtValue < 1) {
        amtValue = 1;
        amount.value = "1";
    }
    //  console.log(fromCurr.value, toCurr.value);
    const url = `${base_url}/${fromCurr.value.toLowerCase()}.json`;

    let response = await fetch(url);

    let data = await response.json();
    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];

    // console.log(rate);
    let finalAmount = amtValue * rate;
    msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;

}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

};



btn.addEventListener('click', (evt) => {
    evt.preventDefault();
    updateExchangeRate();


});

window.addEventListener("load", () => {
    updateExchangeRate();

})
