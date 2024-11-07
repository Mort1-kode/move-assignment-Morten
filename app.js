const movableElement = document.querySelector("#movableElement");

let position = { x: 50, y: 50 };
const step = 10;

function updatePosition() {
  movableElement.style.left = `${position.x}px`;
  movableElement.style.top = `${position.y}px`;
}

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      position.y = Math.max(0, position.y - step);
      break;
    case "ArrowDown":
      position.y += step;
      break;
    case "ArrowLeft":
      position.x = Math.max(0, position.x - step);
      break;
    case "ArrowRight":
      position.x += step;
      break;
  }
  updatePosition();
});

document.addEventListener("click", (event) => {
  position.x = event.clientX - movableElement.offsetWidth / 2;
  position.y = event.clientY - movableElement.offsetWidth / 2;
  updatePosition();
});
