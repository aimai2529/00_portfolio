const img = document.querySelector(".js-img");
const bar = document.querySelectorAll(".js-bar");
const prevBtn = document.querySelector(".js-prevBtn");
const stopBtn = document.querySelector(".js-stopBtn");
const stopImg = document.querySelector(".js-stopImg");
const nextBtn = document.querySelector(".js-nextBtn");
const title = document.querySelector(".js-title");
const images = ["./images/baritone.JPG", "./images/sky.jpg", "./images/fujiQ.jpeg", "./images/TRPG.jpeg"];
const texts = ["吹奏楽", "スキー", "遊園地", "TRPG"];
let timer;

let count = 0;
let time = 5000;

stopBtn.addEventListener("click", () => {
    stopBtn.classList.toggle("is-stop");
    if (stopBtn.classList.contains("is-stop")) {
        clearInterval(timer);
        stopImg.src = "./images/Play.png";
    } else {
        timer = setInterval(slide, time);
        stopImg.src = "./images/Pause.png";
    }
}
);

prevBtn.addEventListener("click", () => {
    if (count <= 0) {
        count = images.length - 1;
    } else {
        count--;
    }
    img.src = images[count];
    title.innerHTML = texts[count];
    bar.forEach((item) => {
        item.classList.remove("is-active");
    });
    bar[count].classList.add("is-active");
}
);

nextBtn.addEventListener("click", () => {
    if (count >= images.length - 1) {
        count = 0;
    } else {
        count++;
    }
    img.src = images[count];
    title.innerHTML = texts[count];
    bar.forEach((item) => {
        item.classList.remove("is-active");
    });
    bar[count].classList.add("is-active");
}
);

const slide = () => {
    if (count >= images.length - 1) {
        count = 0;
    } else {
        count++;
    }
    img.src = images[count];
    title.innerHTML = texts[count];
    bar.forEach((item) => {
        item.classList.remove("is-active");
    });
    bar[count].classList.add("is-active");
}

timer = setInterval(slide, time);