const eas_body = document.getElementById("eas-body");

function createScreen(pixels) {
    const screen = document.createElement("div");
    screen.id = "screen"
    screen.style.gridTemplateColumns = "repeat(" + pixels + ", 1fr)";

    for (let x = 0; x < pixels; x++) {
        for (let y = 0; y < pixels; y++) {
            const pixel = document.createElement("div");
            pixel.classList.add("pixel");
            pixel.setAttribute("id", "x" + x + "y" + y);
            pixel.addEventListener("mouseover", () => {
                pixel.classList.add("active");
            })
            screen.appendChild(pixel);
        }
    }
    eas_body.appendChild(screen);

    console.log("pixels:" + pixels)
}

function clearScreen() {
    document.getElementById("screen").remove()
    let pixels = prompt("Enter a number of pixels per side (lower than 100):");
    if (pixels > 100) {
        pixels = 100;
    }
    createScreen(pixels);
}

createScreen(16);