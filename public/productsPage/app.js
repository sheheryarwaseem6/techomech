let menuIcon = document.getElementById("menuIcon")
let responsiveNav = document.getElementById("responsiveNav")
let className = "hide";

menuIcon.addEventListener("click", () => {
    responsiveNav.classList.toggle(className)
})