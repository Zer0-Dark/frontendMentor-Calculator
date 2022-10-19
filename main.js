//Theme
let themeButtons = document.querySelectorAll(".themeArea button")
console.log(themeButtons);
let themeStyleLink = document.querySelector("#theme");
themeButtons.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        themeStyleLink.setAttribute("href", `theme${e.target.value}.css`)
    })})
//Toggle button
themeButtons.forEach((ele) =>{
    ele.addEventListener("click",toggleButton);
})
function toggleButton(e){
    themeButtons.forEach((ele)=>{
        ele.classList.remove("active");
    })
    e.target.classList = "active";
}

    //get buttons 
    let buttons = document.querySelectorAll(".calc");
    let screen = document.querySelector("#screen");

    //make all buttons type
    buttons.forEach((ele) => {
        ele.addEventListener("click", add);
    })
    function add(e) {
        screen.value += e.target.innerHTML;
    };

    // make the del button
    let delButton = document.querySelector("#delete");
    function deleteNum() {
        screen.value = screen.value.slice(0, -1);
    }
    delButton.addEventListener("click", deleteNum);

    //make the rest button
    let restButton = document.querySelector("#rest");
    function restScreen() {
        screen.value = "";
    }
    restButton.addEventListener("click", restScreen);
    //get the numbers functions
    function getFirstNum() {
        let numbers = [...screen.value];
        if (numbers.includes("+") || numbers.includes("x") || numbers.includes("-") || numbers.includes("/")) {
            let firstNum = [];
            for (let i = 0; i < numbers.length; i++) {
                if (numbers[i] === "+" || numbers[i] === "-" || numbers[i] === "x" || numbers[i] === "/") {
                    break;
                }
                firstNum.push(numbers[i]);
                console.log(firstNum);
            }
            console.log(firstNum);
            return firstNum.join("");
        }
    }
    function getSecondNum() {
        let numbers = [...screen.value];
        let secondNum = [];
        if (numbers.includes("+") || numbers.includes("x") || numbers.includes("-") || numbers.includes("/")) {
            for (let i = numbers.length - 1; i > 0; i--) {
                if (numbers[i] === "+" || numbers[i] === "-" || numbers[i] === "x" || numbers[i] === "/") {
                    break;
                }
                secondNum.unshift(numbers[i]);
                console.log(secondNum);
            }
            return secondNum.join("");
        }
    }
    // the sum function
    let equalButton = document.querySelector("#equal");
    function equal() {
        let firstNum = getFirstNum();
        let secondNum = getSecondNum();
        console.log(firstNum);
        console.log(secondNum);
        if ([...screen.value].includes("+")) {
            screen.value = +firstNum + +secondNum;
        } else if ([...screen.value].includes("-")) {
            screen.value = +firstNum - +secondNum;
        } else if ([...screen.value].includes("x")) {
            screen.value = +firstNum * +secondNum;
        } else if ([...screen.value].includes("/")) {
            screen.value = +firstNum / +secondNum;
        }
    }
    equalButton.addEventListener("click", equal);

