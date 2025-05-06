const header = document.querySelector(".js-header");
const btn = document.querySelector(".js-btn");
let bodyHeight;
let windowHeight;
let bottomPoint;

window.addEventListener('scroll', function () {
    bodyHeight = document.body.clientHeight; // bodyの高さを取得
    windowHeight = window.innerHeight; // windowの高さを取得
    bottomPoint = bodyHeight - windowHeight; // ページ最下部までスクロールしたかを判定するための位置を計算
});

window.addEventListener("scroll", () => {
    if (this.location.pathname === '/portfolio/index.html' || this.location.pathname === '/portfolio/') {
        if (window.scrollY > 150 && header.classList.contains("is-active")) {
            header.classList.remove("is-active");
            btn.classList.add("is-close");
        } else if (window.scrollY < 150 && !header.classList.contains("is-active")) {
            header.classList.remove("is-appear");
            header.classList.add("is-active");
            btn.classList.remove("is-close");
            btn.classList.remove("is-open");
        }
    }

    if (window.scrollY >= bottomPoint && !header.classList.contains("is-bottom")) {
        header.classList.remove("is-appear");
        header.classList.add("is-bottom");
        btn.classList.remove("is-close");
        btn.classList.remove("is-open");
        console.log('sita', bottomPoint, bodyHeight, windowHeight)
    } else if (window.scrollY < bottomPoint && header.classList.contains("is-bottom")) {
        header.classList.remove("is-bottom");
        btn.classList.add("is-close");
        console.log('ue')
    }
});

// header.addEventListener('click', () => {
//     if (!header.classList.contains("is-apper") && !header.classList.contains("is-bottom") && !header.classList.contains("is-active")) {
//         header.classList.add("is-appear");
//         btn.classList.remove("is-close");
//         btn.classList.add("is-open");
//     }
// })

btn.addEventListener("click", () => {
    if (btn.classList.contains("is-close")) {
        btn.classList.remove("is-close");
        btn.classList.add("is-open");
        header.classList.add("is-appear");
    } else {
        btn.classList.remove("is-open");
        btn.classList.add("is-close");
        header.classList.remove("is-appear");
    }
}
);
