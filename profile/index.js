addEventListener("load", () => {
    Array.from(document.getElementsByClassName("tr-off")).forEach(el => {
        el.classList.remove("tr-off");
    });
});
