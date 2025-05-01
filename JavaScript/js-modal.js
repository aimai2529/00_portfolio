const modal = document.querySelector(".js-modal");
const modalImg = document.querySelector(".js-modalContent");
const closeBtn = document.querySelector(".js-modalClose");
const thumbnails = document.querySelectorAll(".js-modalImg");

// 全てのサムネイルにクリックイベントを追加
thumbnails.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
        modalImg.alt = img.alt;
    });
});

// 閉じる（×ボタン）
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// 背景クリックで閉じる
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});