let generateTileButton = document.getElementById("generateTileButton");

let tileGenerator = document.getElementById("tileGenerator");

let gameBoard = document.getElementById("gameBoard");

let id;

gameBoard.addEventListener("drop", (event) => {
  event.preventDefault();
  console.log(document.getElementById(id));
  event.target.appendChild(document.getElementById(id));
});

gameBoard.addEventListener("dragover", (event) => {
  event.preventDefault();
});

generateTileButton.addEventListener("click", (event) => {
  let generatedTile = document.createElement("div");
  generatedTile.className = "generatedTile";
  generatedTile.draggable = "true";
  generatedTile.id = "#" + Math.floor(Math.random() * 16777215).toString(16);
  generatedTile.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
  generatedTile.addEventListener("drag", (event) => {
    id = event.target.id;
  });
  tileGenerator.appendChild(generatedTile);
});
