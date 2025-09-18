let selectedPage = null;

let locations = {
    "profile-selector": "profile",
    "css-controls-selector": "css-controls",
    "password-selector": "password",
    "mult-selector": "mult"
}

addEventListener("load", () => {
    Array.from(document.getElementsByClassName("tr-off")).forEach(el => {
        el.classList.remove("tr-off");
    });
});

document.getElementById("page-dropdown").addEventListener("click", (e) => {
    const currentStyle = document.getElementById("dropdown-content").style.display;

    if (currentStyle === "flex") {
        document.getElementById("dropdown-icon").style.transform = "rotate(0deg)";
        document.getElementById("dropdown-content").style.display = "none";
    }
    else {
        document.getElementById("dropdown-icon").style.transform = "rotate(90deg)";
        document.getElementById("dropdown-content").style.display = "flex";
        e.stopImmediatePropagation(); // needed to stop the below body click listener from immediately closing it
    }
});

document.body.addEventListener("click", (e) => {
    if (e.target.id === "dropdown-content") return;

    if (document.getElementById("dropdown-content").style.display === "flex") {
        document.getElementById("dropdown-content").style.display = "none";
        document.getElementById("dropdown-icon").style.transform = "rotate(0deg)";
    }
});

document.querySelectorAll(".dropdown-item").forEach((/** @type {HTMLElement} */ item) => {
    item.addEventListener("click", (e) => {
        /** @type {HTMLParagraphElement} */
        const targetTextElement = e.target.parentElement.parentElement.querySelector(".dropdown-text");

        targetTextElement.innerText = e.target.innerText;
        targetTextElement.style.opacity = "1";
        document.getElementById("go-button").disabled = false;
        selectedPage = e.target.id;
    });
});

document.getElementById("go-button").addEventListener("click", () => {
    if (selectedPage) {
        window.location.href = locations[selectedPage];
    }
});

const audio = new Audio("assets/explosion.m4a");
audio.volume = 0.4;

document.getElementById("icon").addEventListener("click", () => {
    navigator.mediaSession.metadata = new MediaMetadata({});
    navigator.mediaSession.playbackState = "none";

    audio.play();
});
