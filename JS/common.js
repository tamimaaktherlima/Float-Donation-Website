function getTextById(id){
    const text = document.getElementById(id).innerText;
    const textIntoNumber = parseFloat(text);
    return textIntoNumber;
}

function getValueById(id){
    const value = document.getElementById(id).value;
    const valueIntoNumber = parseFloat(value);
    return valueIntoNumber
}