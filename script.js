const inputEl = document.getElementById("input-el")
const buttonEl = document.getElementById("button-el")
const vatVal = document.getElementById("vat-el")
function calc(){
    vatVal.innerHTML = ` 
    Amount you entered = ${inputEl.value}<br>
    Your vat to be paid is:  $${(inputEl.value * 0.15).toFixed(2)}`
    inputEl.value = ''
}