const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let hslColor = `HSL(${degrees()},${shine()}%,${saturation()}%)`;
    color.textContent = hslColor;
    document.body.style.backgroundColor = hslColor;
})

function degrees(){
    return Math.floor(Math.random() * 360);
}

function shine(){
    return Math.floor(Math.random() * 100);
}

function saturation(){
    return Math.floor(Math.random() * 100);
}