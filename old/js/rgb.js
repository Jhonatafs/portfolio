const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let rgbColor = `RGB(${red()},${green()},${blue()})`;
    color.textContent = rgbColor;
    document.body.style.backgroundColor = rgbColor;
})

function red(){
    return Math.floor(Math.random() * 255);
}

function green(){
    return Math.floor(Math.random() * 255);
}

function blue(){
    return Math.floor(Math.random() * 255);
}