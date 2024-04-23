const imageConteinerEl = document.querySelector(".conteiner");
const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

let x = 0;
let time;
nextEl.addEventListener("click", function () {
    x = x - 45;
    clearTimeout(time)
    updateImage();
});

prevEl.addEventListener("click", function () {
    x = x + 45;
    clearTimeout(time)
    updateImage();
});

function updateImage() {
    imageConteinerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    time = setTimeout(function () {
        x = x - 45;
        updateImage();
    }, 3000);
}
updateImage();
