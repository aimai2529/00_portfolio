const header = document.querySelector(".js-header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150 && header.classList.contains("is-active")) {
        header.classList.remove("is-active");
        console.log("Header deactivated");
    } else if (window.scrollY < 150 && !header.classList.contains("is-active")) {
        header.classList.add("is-active");
    }
});