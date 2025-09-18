addEventListener("load", () => {
    Array.from(document.getElementsByClassName("tr-off")).forEach(el => {
        el.classList.remove("tr-off");
    });

    /** @type {HTMLInputElement} */
    const input = document.getElementById("mult-input");
    if (input.value && !isNaN(input.value) && input.value > 0) {
        goButton.disabled = false;
    }
});

const goButton = document.getElementById("go-button");

document.getElementById("mult-input").addEventListener("input", (e) => {
    if (e.target.value && !isNaN(e.target.value) && e.target.value > 0) {
        goButton.disabled = false;
    }
    else {
        goButton.disabled = true;
    }
});

goButton.addEventListener("click", () => {
    const size = parseInt(document.getElementById("mult-input").value);
    if (isNaN(size) || size <= 0) return;

    window.location.href = `table.php?size=${size}`;
});
