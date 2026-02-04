const redRange = document.getElementById("redRange");
const greenRange = document.getElementById("greenRange");
const blueRange = document.getElementById("blueRange");

const redInput = document.getElementById("redInput");
const greenInput = document.getElementById("greenInput");
const blueInput = document.getElementById("blueInput");

const colorBox = document.getElementById("colorBox");
const hexCode = document.getElementById("hexCode");
const colorPicker = document.getElementById("colorPicker");

function clamp(value) {
    return Math.min(255, Math.max(0, value));
}

function updateFromRGB(r, g, b) {
    // Actualizar controles
    redRange.value = redInput.value = r;
    greenRange.value = greenInput.value = g;
    blueRange.value = blueInput.value = b;

    // Color del cuadro
    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    // HEX
    const hex =
        "#" +
        r.toString(16).padStart(2, "0") +
        g.toString(16).padStart(2, "0") +
        b.toString(16).padStart(2, "0");

    hexCode.textContent = hex.toUpperCase();
    colorPicker.value = hex;
}

// Desde sliders
function fromRange() {
    updateFromRGB(
        Number(redRange.value),
        Number(greenRange.value),
        Number(blueRange.value)
    );
}

// Desde inputs numéricos
function fromInput() {
    const r = clamp(Number(redInput.value));
    const g = clamp(Number(greenInput.value));
    const b = clamp(Number(blueInput.value));

    updateFromRGB(r, g, b);
}

// Desde color picker
function fromColorPicker() {
    const hex = colorPicker.value;

    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);

    updateFromRGB(r, g, b);
}

// Eventos
redRange.addEventListener("input", fromRange);
greenRange.addEventListener("input", fromRange);
blueRange.addEventListener("input", fromRange);

redInput.addEventListener("input", fromInput);
greenInput.addEventListener("input", fromInput);
blueInput.addEventListener("input", fromInput);

colorPicker.addEventListener("input", fromColorPicker);
