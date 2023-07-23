const aInputs = document.getElementsByClassName("exp-input");
const oResult = document.getElementById("result");

const calcExp = () => {
    const iBigExp = +aInputs['big-input'].value;
    const iMediumExp = +aInputs['medium-input'].value;
    const iSmallExp = +aInputs['small-input'].value;

    if (!aInputs['big-input'].value.length) {
        aInputs['big-input'].value = 0
    } else if (!aInputs['medium-input'].value.length) {
        aInputs['medium-input'].value = 0
    } else if (!aInputs['small-input'].value.length) {
        aInputs['small-input'].value = 0
    }

    oResult.innerText = iBigExp + Math.floor((iMediumExp*5000 + iSmallExp*1000) / 20000);
}

window.onload = () => calcExp();