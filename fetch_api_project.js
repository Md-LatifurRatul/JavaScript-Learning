//Fetch API: Provides an interface for fetching(Sending/receiving) resources
//It uses request and response objects
//The fetch() method is used to fetch a resource(data).

// const URL = "https://cat-fact.herokuapp.com/facts";

// const factPara = document.querySelector("#fact");

// const btnFact = document.querySelector("#btn");

//AJAX is Asynchronous JS & XML
//JSON is Javascript object notation
//json() method: returns a second promise that resolves with the result of parsing the response body text as JSON.(Input is JSON, output is JS object)
//Response JSON format then convert to js object

//Get Request

// const getFacts = async () => {
//     console.log("Getting data...");
//     let response = await fetch(URL);
//     console.log(response);
//     let data = await response.json();
//     console.log(data[0].text);
//     factPara.innerText = data[0].text;

// };

// function getFacts() { //Using promise chain

//     fetch(URL).then((response) => {
//         return response.json();
//     }).then((data) => {
//         console.log(data);
//         factPara.innerText = data[2].text;
//     });

// }

// btnFact.addEventListener('click', getFacts);
