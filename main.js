const game_container = document.querySelector("#board");

console.log(game_container);

for (let x = 0; x < 16; x++) {
    for (let y = 0; y < 16; y++) {
        const pixel = document.createElement("div");
        pixel.classList.add("pixel");
        pixel.setAttribute("id", "x" + x + "y" + y);
        pixel.addEventListener("mouseover", () => {
            pixel.classList.add("active")
        })
        game_container.appendChild(pixel);
    }
}