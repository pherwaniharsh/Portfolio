let localStorageTheme = localStorage.getItem("theme");
let systemSettingDarkTheme = window.matchMedia("(prefers-color-theme: dark)");

function getSystemTheme(systemtheme, browsertheme) {
    if (localStorageTheme != null) {
        return localStorageTheme;
    }

    if (systemSettingDarkTheme.matches) {
        return 'dark';
    }

    return 'light';
}

let currentTheme = getSystemTheme(localStorageTheme, systemSettingDarkTheme);

function updateHtmlTheme() {
    document.querySelector('html').setAttribute('data-theme', currentTheme);
}

updateHtmlTheme();

let themeBtn = document.querySelector(".fa-regular");

function setThemeBtn() {
    if (currentTheme == 'dark') {
        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");
    }
    else {
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    }
}

setThemeBtn();

function ToggleTheme() {
    if (currentTheme == 'dark') {
        currentTheme = 'light';
        updateHtmlTheme();
        
        themeBtn.classList.remove("fa-moon");
        themeBtn.classList.add("fa-sun");
    }
    else {
        currentTheme = 'dark';
        updateHtmlTheme();

        themeBtn.classList.remove("fa-sun");
        themeBtn.classList.add("fa-moon");
    }

    localStorage.setItem("theme", currentTheme);
}

themeBtn.onclick = ToggleTheme;