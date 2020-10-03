let btnChangeLanguage = document.querySelector(".button-change-languages");
let languagesList = document.querySelector(".languages__list");

btnChangeLanguage.addEventListener("click", function() {
    languagesList.classList.toggle("close");
});