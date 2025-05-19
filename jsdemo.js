const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const numBtn = document.getElementById("numBtn");
const themeBtn = document.getElementById("themeBtn");

yesBtn.addEventListener("click", () => {
    document.getElementById("textToChange").innerHTML = "You changed the text!" });

noBtn.addEventListener("click", () => {
    document.getElementById("noBtnSpace").innerHTML = "You didn't change the text."})

function readInput(){
    const minimum = parseInt(document.getElementById('min').value);
    const maximum = parseInt(document.getElementById('max').value);
    const result = Math.floor(Math.random() * (maximum - minimum + 1) ) + minimum;
    document.getElementById('result').textContent = `Random int: ${result}`;
}


const modules = '["Software Development", " Cloud and Cyber", " Data and Distributed Systems."]';
const modulesArray = JSON.parse(modules);
document.getElementById("json").innerHTML = modulesArray;

function Toggle(){
    let cssStyle = document.getElementById('cssStyle');
    if (cssStyle.getAttribute('href') == 'basestyle.css') {
        cssStyle.setAttribute('href', 'cssdemo.css');
    } else {
        cssStyle.setAttribute('href', 'basestyle.css');
    }
}
