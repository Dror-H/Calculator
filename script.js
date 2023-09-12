/* <div class="key">
                <h1>+</h1>
            </div> */

const digit1 = document.querySelector(".digit1")
const digit2 = document.querySelector(".digit2")
const calculationSign = document.querySelector("#calculation_sign")
const equalDOM = document.querySelector("#equal_sign")
const resultDOM = document.querySelector(".result")
const historyDisplay = document.querySelector("#history_display")

let digit1Display = ""
let digit2Display = ""
let html = "";
let digit1input = true
let equalIsClicked = false;
let calculationSignAdded = false;

// step 1 - Selecting all digits and adding them via JS instead of HTML to make our code cleaner and shorter!
const keyboard = [
    "7",
    "8",
    "9",
    "+",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "/",
    "DE",
    "0",
    "=",
    "x",
];



keyboard.forEach((element) => {
    html += `<div class="key">
    <h1>${element}</h1>
</div>`
})

document.querySelector(".keys_container").innerHTML = html;



const keys = document.querySelectorAll(".key");

function init() {
    equalIsClicked = false;
    digit1Display = "";
    digit2Display = "";
    digit1.innerHTML = "";
    digit2.innerHTML = "";
    calculationSign.textContent = "";
    equalDOM.textContent = "";
    resultDOM.innerHTML = "";
}


// Digit functionality - 10
// Delete functionality
// Equal functionality
// + functionality
// - functionality
// / functionality
// x functionality
// step 2 - add eventListner to all of the keys divided by catagories

keys.forEach((element) => {
    if (element.innerText === "DE") {
        element.addEventListener("click", () => {
            console.log("Delete Functionality");
            init();
        });
    } else if (element.innerText === "=") {
        element.addEventListener("click", () => {
            if (!equalIsClicked && digit2Display !== "") {
                equalDOM.textContent = element.innerText;
                const number1 = Number(digit1Display);
                const number2 = Number(digit2Display);
                let result = 0;

                if (calculationSign.innerText === "+") {
                    result = number1 + number2
                } else if (calculationSign.innerText === "-") {
                    result = number1 - number2
                } else if (calculationSign.innerText === "/") {
                    result = number1 / number2
                } else if (calculationSign.innerText === "x") {
                    result = number1 * number2
                }
                resultDOM.innerHTML = `<h2 id="result">${result.toFixed(3)}</h2>`
                const historyCard = document.createElement("div");

                historyCard.classList.add("history_card");
                historyCard.innerHTML = `<div class="digit1">
            <h2>${digit1Display}</h2>
        </div>
        <div class="calculate_sign">
            <h2>${calculationSign.innerText}</h2>
        </div>
        <div class="digit2">
            <h2>${digit2Display}</h2>
        </div>
        <div class="equal_sign">
            <h2>=</h2>
        </div>
        <div class="result">
            <h2>${result.toFixed(3)}</h2>
        </div>`

                historyDisplay.appendChild(historyCard);

                digit1input = true;
                equalIsClicked = true;
            }
        });
    } else if (element.innerText === "+") {
        element.addEventListener("click", () => {
            digit1input = false;
            if (!calculationSignAdded) {
                calculationSign.textContent = element.innerText;
            }
        });
    } else if (element.innerText === "-") {
        element.addEventListener("click", () => {
            digit1input = false;
            if (!calculationSignAdded) {
                calculationSign.textContent = element.innerText;
            }

        });
    } else if (element.innerText === "/") {
        element.addEventListener("click", () => {
            digit1input = false;
            if (!calculationSignAdded) {
                calculationSign.textContent = element.innerText;
            }

        });
    } else if (element.innerText === "x") {
        element.addEventListener("click", () => {
            digit1input = false;
            if (!calculationSignAdded) {
                calculationSign.textContent = element.innerText;
            }

        });
    } else {
        element.addEventListener("click", () => {
            if (equalIsClicked) {
                init()
            }

            if (digit1input) {
                digit1Display += element.innerText;
                digit1.innerHTML = `<h2 id="digit_1">${digit1Display}</h2>`
                calculationSignAdded = false;
            } else {
                digit2Display += element.innerText;
                digit2.innerHTML = `<h2 id="digit_2">${digit2Display}</h2>`;
                calculationSignAdded = true;
            }

        })
    }
})


































