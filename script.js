let enteredValue = document.querySelector(".enter input");

let result = document.querySelector(".result h2");

enteredValue.addEventListener('change', ctoF);

function ctoF(){

    let value = enteredValue.value;
    let convert = (value*1.8)+32;

    result.innerHTML= convert;
}
