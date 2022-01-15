let container = document.getElementById("container");
let tileGenerator = document.getElementById("tileGenerator");
let gameBoard = document.getElementById("gameBoard");
let tileGeneratorButton = document.getElementById("tileGeneratorButton");
let slotForTile = document.getElementById("slotForTile");

let selectedTileNewX;
let selectedTileNewY;
let generatedTile;

function handleDragStart() {}

tileGeneratorButton.addEventListener("click", () => {
  if (slotForTile.children.length > 0) return;
  generatedTile = document.createElement("div");
  generatedTile.className = "generatedTile";
  generatedTile.draggable = "true";
  generatedTile.id = "#" + Math.floor(Math.random() * 16777215).toString(16);
  generatedTile.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  generatedTile.addEventListener("dragstart", (event) => {
    generatedTile = event.target;
    const rect = event.target.getBoundingClientRect();
    selectedTileNewX = parseInt(event.clientX - rect.left);
    selectedTileNewY = parseInt(event.clientY - rect.top);
  });
  slotForTile.appendChild(generatedTile);
});
function dropTileOnTile(event) {
  const rect = event.target.getBoundingClientRect();
  console.log(event.target);
  console.log(event.target.offsetTop);
  if (rect.x + 2 * rect.width < gameBoard.offsetWidth) {
    generatedTile.style.left = `${rect.x + rect.width}px`;
    generatedTile.style.top = `${event.target.offsetTop}px`;
  } else {
    generatedTile.style.left = `0px`;
    generatedTile.style.top = `${event.target.offsetTop - rect.height}px`;
  }
  generatedTile.style.margin = "0px";
  generatedTile.addEventListener("drop", dropTileOnTile);
  gameBoard.appendChild(generatedTile);
  event.stopPropagation();
}

gameBoard.addEventListener("dragover", (event) => {
  event.preventDefault();
});
gameBoard.addEventListener("drop", (event) => {
  const rect = event.target.getBoundingClientRect();
  console.log(rect);
  const x = parseInt(event.clientX - rect.left);
  const y = parseInt(event.clientY - rect.top);
  selectedTileNewX = x - selectedTileNewX;
  selectedTileNewY = y - selectedTileNewY;
  generatedTile.style.left =
    selectedTileNewX < 0 ? "0px" : `${selectedTileNewX}px`;
  generatedTile.style.top =
    selectedTileNewY < 0 ? "0px" : `${selectedTileNewY}px`;
  generatedTile.style.margin = "0px";
  generatedTile.addEventListener("drop", dropTileOnTile);
  gameBoard.appendChild(generatedTile);
});
