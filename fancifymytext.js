const bigButton = document.getElementById("bigger")
const text = document.getElementById("textBox")
const borButton = document.getElementById("boring")
const fancyButton = document.getElementById("fancy")
const mooButton = document.getElementById("moo")


bigButton.onclick = test;
borButton.onclick = normalText;
fancyButton.onclick = styleText;
mooButton.onclick = mooCase;

function test(){
    text.style.fontSize = "24pt";
}
function normalText(){
    text.style.fontWeight = "normal";
    text.style.color = "black";
    text.style.textDecoration = "none";
}

function styleText(){
    text.style.fontWeight = "bold";
    text.style.color = "blue";
    text.style.textDecoration = "underline";
}

function mooCase(){
    const newStr = text.value.split(".").join(". -Moo");
    text.value = newStr;
    text.value = text.value.toUpperCase();        
}