let borderWidth = 0;

addEventListener("load", () => {
    Array.from(document.getElementsByClassName("tr-off")).forEach(el => {
        el.classList.remove("tr-off");
    });
});

/** @type {HTMLDivElement} */
const colorPicker = document.getElementById("color-picker");
/** @type {HTMLInputElement} */
const colorInput = document.getElementById("color-input");
/** @type {HTMLParagraphElement} */
const targetParagraph = document.getElementById("target-paragraph");
/** @type {SVGGraphicsElement} */
const paletteIcon = document.getElementById("palette");
/** @type {HTMLInputElement} */
const borderTextField = document.getElementById("border-text-field");

colorPicker.addEventListener("click", () => {
    colorInput.click();
});

colorInput.addEventListener("input", () => {
    colorPicker.style.backgroundColor = colorInput.value;
    targetParagraph.style.color = colorInput.value;
    targetParagraph.style.border = `${borderWidth}px solid ${colorInput.value}`;
    paletteIcon.style.color = colorInput.value;
});

borderTextField.addEventListener("input", () => {
    if (borderTextField.value <= 0 || borderTextField.value === "") {
        borderWidth = 0;
        targetParagraph.style.border = "none";
        targetParagraph.style.padding = "0";
        return;
    }

    borderWidth = borderTextField.value;
    targetParagraph.style.border = `${borderWidth}px solid ${colorInput.value}`;
    targetParagraph.style.padding = "0.5rem";
});

// MARK: dark mode with a color picker is a horrible idea
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    colorPicker.style.backgroundColor = "white";
    colorInput.value = "#ffffff";
}

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    if (e.matches && colorPicker.style.backgroundColor === "black" || colorPicker.style.backgroundColor === "") {
        colorPicker.style.backgroundColor = "white";
        colorInput.value = "#ffffff";
        targetParagraph.style.color = "white";
        paletteIcon.style.color = "white";
    }
    else if (!e.matches && colorPicker.style.backgroundColor === "white") {
        colorPicker.style.backgroundColor = "black";
        colorInput.value = "#000000";
        targetParagraph.style.color = "black";
        paletteIcon.style.color = "black";
    }
});
