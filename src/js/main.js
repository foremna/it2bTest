new SlimSelect({
    select: '#single'
})

var buttonChangeTheme = document.querySelector(".change-theme");
var bodyBlock = document.querySelector("body");

buttonChangeTheme.addEventListener("click", function() {
    buttonChangeTheme.classList.toggle("change-theme--light")
    buttonChangeTheme.classList.toggle("change-theme--dark")
    bodyBlock.classList.toggle("page-light")
    bodyBlock.classList.toggle("page-dark")
})