// // How many Function do we need for this
// // 1-- DefaultBehaviourOnReload Function-->
// // 2-- HandleSlider Function-->
// // 3-- CopyPassword Function-->
// // 4-- Generatepassword Function-->
// // 5-- SetIndicator function-->
// // 6-- RandomInteger(min,max) function-->
// // 7-- GetRandomUpperCase()-->
// // 8-- GetRandomLowerCase()-->
// // 9-- GetRandomSymbols()-->
// // 10--CalculateStrength()-->

// // Take All References for all elements we need

// // Take All References for all elements we need
// let inputSlider = document.querySelector("[data-lengthSlider]");
// let LengthNumber = document.querySelector("[data-lengthNumber]");
// let upperCaseBox = document.querySelector("#uppercase");
// let lowerCaseBox = document.querySelector("#lowercase");
// let numberCheck = document.querySelector("#numbers");
// let symbolsCheck = document.querySelector("#symbol");
// let indicator = document.querySelector("[data-indicator]");
// let generatePassword = document.querySelector("[data-generatePassword]");
// let copyMessage = document.querySelector("[data-copyMessage]");
// let CopyBtn = document.querySelector("[data-CopyBtn]");
// let passwordDisplay = document.querySelector("[data-passwordDisplay]");
// let allCheckBox = document.querySelectorAll("input[type=checkbox]");

// // Set Default Variable and their Values
// let password = "";
// let SymbolString = "!@#$%^&*()_+}{[]?/><,.|";
// let passwordLength = 10;
// let checkCount = 0;




// // Function To Set the Lemgth of Password Using Slider
// function HandleSlider() {
//   inputSlider.value = passwordLength;
//   LengthNumber.innerText = passwordLength;
// }

// HandleSlider();

// // eventListeners for Slider
// inputSlider.addEventListener("input", (e) => {
//   passwordLength = e.target.value;
//   // console.log(e.target.value);
//   HandleSlider();
// });

// // This will copy and Show Copied And Failed Message when user Will Copy The password
// async function copyContent() {
//   try {
//     await navigator.clipboard.writeText(passwordDisplay.value);
//     copyMessage.innerText = "Coppied";
//   } catch (e) {
//     copyMessage.innerText = "Failed";
//   }

//   copyMessage.classList.add("active");
//   setTimeout(() => {
//     copyMessage.classList.remove("active");
//   }, 2000);
// }

// // addeventListeners to Copy mesage
// CopyBtn.addEventListener("click", () => {
//   if (passwordDisplay.value) {
//     copyContent();
//   }
// });

// function GetRandomInteger(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// // Generate Random Number from 0-9
// function getRandomNumber() {
//   return GetRandomInteger(0, 9);
// }
// // Will generate a UpperCase Character using its ASCII value
// function GenerateUpperCase() {
//   return String.fromCharCode(GetRandomInteger(65, 91));
// }
// // Will generate a lowerCase Character using its ASCII value
// function GenerateLowerCase() {
//   return String.fromCharCode(GetRandomInteger(97, 123));
// }

// // Will generate Symbols From hardCoded String using Random index Number

// function GetRandomSymbols() {
//   let RandIndex = GetRandomInteger(0, SymbolString.length);
//   let SymIndex = SymbolString.charAt(RandIndex);
//   console.log(SymIndex);
//   return SymIndex;
// }

// //  Function to set Indicator Color
// function SetIndicator(color) {
//   // set color or shadow for indicator
//   indicator.style.backgroundColor = color;
//   indicator.style.boxShadow = `0px 0px 12px 1px ${color}`;
// }

// // Will Set the Color of Strenght Indicator Acc to The Rules Set by Users
// function CalculateStrength() {
//   // first, ensure checkboxes are not null or undefined
//   let hasUpper = upperCaseBox && upperCaseBox.checked;
//   let hasLower = lowerCaseBox && lowerCaseBox.checked;
//   let hasSymbol = symbolsCheck && symbolsCheck.checked;
//   let hasNumber = numberCheck && numberCheck.checked;

//   // Now set the rules according to the user and set the indicator color
//   if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
//     SetIndicator("#0f0");
//     console.log("Strong");
//   }
//    else if (
//     (hasLower || hasUpper) &&
//     (hasNumber || hasSymbol) &&
//     passwordLength >= 6
//   ) {
//     SetIndicator("#ff0");
//     console.log("Average");
//   } else {
//     SetIndicator("#f00");
//     console.log("Weak");
//   }
// }


// function createPassword() {
//   let funcArr = [];
//   password = "";

//   if (upperCaseBox && upperCaseBox.checked) {
//     funcArr.push(GenerateUpperCase);
//   }
//   if (lowerCaseBox && lowerCaseBox.checked) {
//     funcArr.push(GenerateLowerCase);
//   }
//   if (numberCheck && numberCheck.checked) {
//     funcArr.push(getRandomNumber);
//   }
//   if (symbolsCheck && symbolsCheck.checked) {
//     funcArr.push(GetRandomSymbols);
//   }


//   // compulsory Addition
//   for (let i = 0; i < funcArr.length; i++) {
    
//       password += funcArr[i]();
    
//   }
//   console.log("Compulsory addition done");

//   // Remaining addition
//   for (let i = 0; i < passwordLength - funcArr.length; i++) {
//     let RandIndex = GetRandomInteger(0, funcArr.length);
    
//       password += funcArr [RandIndex]();
    
//   }

//   console.log("remaining done");

//   //for shuffle password
//   password = password.split('').sort(()=> Math.random() * 0.5).join('')

//   //to return password
//   CalculateStrength()
//   passwordDisplay.value = password

 
// }


// // main function to generate the password
// generatePassword.addEventListener("click", () => {
//   if (checkCount == 0) {
//     return;
//   }
//   if (passwordLength < checkCount) {
//     passwordLength = checkCount;
//     HandleSlider();
//   }

//   createPassword();
// });

// // function to  traxk Change in checkbox and update CheckCount
// function handleCheckBox() {
//   checkCount = 0;
//   document.querySelectorAll("input[type=checkbox]").forEach((checkbox)=> {
//     if (checkbox.checked) {
//       checkCount++;
//       console.log(checkCount);
//     }
//   })
//   CalculateStrength()
//   // special Condition
//   if (passwordLength < checkCount) {
//     passwordLength = checkCount;
//     HandleSlider();
   
//   }
// }
// // eventListener on every CheckBox to update CheckCont
// document.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
//   checkbox.addEventListener("change", handleCheckBox());
// });



// // function to shuffle your Password
// // function shufflePassword(array) {
// //   // Fisher Yated Method
// //   for (let i = array.length - 1; i > 0; i--) {
// //     const j = Math.floor(Math.random() * (i + 1));
// //     const temp = array[i];
// //     array[i] = array[j];
// //     array[j] = temp;
// //   }
// //   let str = "";
// //   array.forEach((el) => (str += el));
// //   return str;
// // }

// Handle Slider Control and Display Password Length 
let lengthDisplay = document.querySelector('[lengthDisplay');
// console.log(lengthDisplay)
let slider = document.querySelector('input[type=range]');
// console.log(slider)


function handleSlider() {
    slider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;
}

let passwordLength = 10;
handleSlider();

slider.addEventListener('input', (event) => {
    passwordLength = event.target.value;
    handleSlider();
});

// --------------------------------------

// Generate Random Letters and Number and Symbols
const symbol = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';

function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Random Lowercase Letter 
function generateRandomLowercase() {
    return String.fromCharCode(generateRandom(97, 123));
}

// Random Lowercase Letter 
function generateRandomUppercase() {
    return String.fromCharCode(generateRandom(65, 91));
}

// Random Number 
function generateRandomNumber() {
    return generateRandom(1, 10);
}

// Generate Symbol 
function generateRandomSymbol() {
    let index = generateRandom(0, symbol.length);
    return symbol[index];
}



// --------------------------------------


// Strength Color Based on Password 
let indicator = document.querySelector('.indicator');

// Set Indicator 
function setIndicator(color) {
    indicator.style.backgroundColor = color;
    indicator.style.boxShadow = `0 0 12px 1px ${color}`;
}

// Default Indicator 
setIndicator("#ccc");

const uppercase = document.querySelector('#uppercase');
const lowercase = document.querySelector('#lowercase');
const numbers = document.querySelector('#numbers');
const symbols = document.querySelector('#symbols');

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNumber = false;
    let hasSymbol = false;

    if (uppercase.checked) hasUpper = true;
    if (lowercase.checked) hasLower = true;
    if (numbers.checked) hasNumber = true;
    if (symbols.checked) hasSymbol = true;

    if (hasUpper && hasLower && (hasNumber || hasSymbol) && passwordLength >= 8) {
        setIndicator("#0f0");
    } else if (
        (hasLower || hasUpper) &&
        (hasNumber || hasSymbol) &&
        passwordLength >= 6
    ) {
        setIndicator("#ff0");
    } else {
        setIndicator("#f00");
    }
}

// -----------------------------------

// Copy Message 
let copyMessage = document.querySelector("[copyMessage]");
let copyBtn = document.querySelector(".copyBtn");
let passwordDisplay = document.querySelector("input[passwordDisplay]");
passwordDisplay.value = "Password";

// Why we use it - https://stackoverflow.com/questions/45071353/copy-text-string-on-click#:~:text=15-,Use%20the%20Clipboard,-API!
async function copyContent() {
    try {
        await navigator.clipboard.writeText(passwordDisplay.value);

        copyMessage.innerText = "Copied"
    }
    catch (e) {
        // alert("Something went wrong in CopyContent");
        copyMessage.innerText = "Failed";
    }

    copyMessage.classList.add('active');

    setTimeout(() => {
        copyMessage.classList.remove('active');
    }, 2000)
}

copyBtn.addEventListener("click", () => {
    if (passwordDisplay.value)
        copyContent();
});

// ------------------------------------ 

// shuffle algorithm is the Fisher-Yates (aka Knuth) Shuffle.
// Shuffle the array randomly - Fisher Yates Method
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}
// Password Generate 

// By Default UpperCase Checked 
// uppercase.checked = true;

let checkBoxes = document.querySelectorAll("input[type=checkbox]");
// console.log(checkBoxes);

let checkCount = 0;

// CheckBox - Handle 

function handleCheckBoxChange() {
    checkCount = 0;
    checkBoxes.forEach((checkbox) => {
        if (checkbox.checked)
            checkCount++;
    });

    //special condition
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }
}

checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener('change', handleCheckBoxChange);
})


let password = "";
let generateBtn = document.querySelector("#generateBtn");

generateBtn.addEventListener('click', () => {
    if (checkCount <= 0)
        return;

    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        handleSlider();
    }

    // Remove Previous Password 
    password = "";

    let arrayOfCheckedFunction = [];

    if (uppercase.checked) arrayOfCheckedFunction.push(generateRandomUppercase);
    if (lowercase.checked) arrayOfCheckedFunction.push(generateRandomLowercase);
    if (numbers.checked) arrayOfCheckedFunction.push(generateRandomNumber);
    if (symbols.checked) arrayOfCheckedFunction.push(generateRandomSymbol);

    // Compulsory Addition
    for (let i = 0; i < arrayOfCheckedFunction.length; i++) {
        password += arrayOfCheckedFunction[i]();
    }

    // console.log("Password: " + password);

    // Additional addition
    for (let i = 0; i < passwordLength - arrayOfCheckedFunction.length; i++) {
        let randIndex = generateRandom(0, arrayOfCheckedFunction.length);
        password += arrayOfCheckedFunction[randIndex]();
    }
    // console.log("Password: " + password);

    // Shuffle Password 
    password = shuffle(Array.from(password));
    passwordDisplay.value = password;
    calcStrength();
});

