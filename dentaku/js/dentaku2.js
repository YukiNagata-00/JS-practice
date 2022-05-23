const number = document.querySelectorAll(".numbers");
const operator = document.querySelectorAll(".is-operator");
const equal = document.querySelector(".is-equal");
const display = document.querySelector(".display");
const clear = document.querySelector(".is-2col")
let preNumber = "";
let parsedPreNumber = "";
let curNumber = "";
let parsedCurNumber = "";
let chosenOpe = "";
let ans = "";
let count = 0;



function linking (elm){
    
    if(count === 1){
        if(elm === "00"){
            curNumber = "";
            count = 0;
            console.log("reset");
            elm = "0";
        }else{
            curNumber = "";
            count = 0;
            console.log("reset");
        }
    }
    curNumber += elm;
    console.log(curNumber);
    display.innerText = curNumber;
    
    
}

function calculation(){
    parsedPreNumber = parseInt(preNumber);
    parsedCurNumber = parseInt(curNumber);
    console.log(parsedPreNumber, parsedCurNumber);
    switch(chosenOpe){
        case "＋":
            ans = parsedPreNumber + parsedCurNumber;
            console.log(ans);
            break;
        case "ー":
            ans = parsedPreNumber - parsedCurNumber;
            console.log(ans);
            break;
        case "×":
            ans = parsedPreNumber *  parsedCurNumber;
            console.log(ans);
            break;
        case "÷":
            ans = parsedPreNumber / parsedCurNumber;
            console.log(ans);
            break;
        default:
            break;
    }
    curNumber = ans;
    display.innerText = curNumber;
    chosenOpeNext = "";
    preNumber = "";
    console.log(preNumber, curNumber);
}

number.forEach(el => {
    el.addEventListener("click", ()=>{
        console.log(el.innerText);
        if(el.innerText === "00" && curNumber === "" || el.innerText === "00" && curNumber === "0"){
            display.innerText = "0";
            curNumber = "0";
        }else if(el.innerText === "0" && curNumber === "" || el.innerText === "0" && curNumber === "0"){
            display.innerText = "0";
            curNumber = "0";
        }else{
            linking(el.innerText);}
    })
})

operator.forEach(ope => {
    ope.addEventListener("click", ()=>{
        if(preNumber !== "" && curNumber !== ""){
            calculation();
            chosenOpe = ope.innerText;
            preNumber = curNumber;
            curNumber = "";
        }else if(preNumber !== "" && curNumber === ""){
            chosenOpe = ope.innerText;
        }else if(preNumber === "" && curNumber !== ""){
            console.log(preNumber, curNumber);
            chosenOpe = ope.innerText;
            preNumber = curNumber;
            console.log(preNumber, curNumber);
            curNumber = "";
            console.log(preNumber, curNumber);
        }
    })
})

equal.addEventListener("click",()=>{
    console.log(preNumber, curNumber);
    calculation();
    count = 1;
})

clear.addEventListener("click", ()=>{
    curNumber = "";
    preNumber = "";
    display.innerText = 0;  
})