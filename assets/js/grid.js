function showMenu() {
    var menu = document.getElementById("menu");
    if (menu.className === "header-menu") {
        menu.className += " show";
    }
    else {
        menu.className = "header-menu"
    }
}

function Progress(circularProgress, progressValue) {
    let progressStartValue = 0,
        progressEndValue = progressValue.textContent,
        speed = 100;

    let progress = setInterval(() => {
        progressStartValue++;

        progressValue.textContent = `${progressStartValue}%`
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
    }, speed)
};


function callback() {
    Progress(document.querySelector(".circular-progress"), document.querySelector(".progress-value"))
    Progress(document.querySelectorAll(".circular-progress")[1], document.querySelectorAll(".progress-value")[1])
    Progress(document.querySelectorAll(".circular-progress")[2], document.querySelectorAll(".progress-value")[2])
    Progress(document.querySelectorAll(".circular-progress")[3], document.querySelectorAll(".progress-value")[3])
    Progress(document.querySelectorAll(".circular-progress")[4], document.querySelectorAll(".progress-value")[4])


}


callback()

