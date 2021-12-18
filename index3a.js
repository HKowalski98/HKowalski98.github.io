let list = document.getElementById("mainList");
let listElements = list.children;
let draggedElement;
let dropElement;
let index;
let dropIndex;

window.addEventListener("DOMNodeInserted", (event) => {
  console.log(event);
});

list.addEventListener("dblclick", (event) => {
  console.log(event.target.parentNode.contentEditable);
  event.preventDefault();
  if (event.target.parentNode.contentEditable === "false")
    list.contentEditable = "true";
  else if ((event.target.parentNode.contentEditable = "true")) {
    list.contentEditable = "false";
  }
});
document.addEventListener("dragstart", (event) => {
  draggedElement = event.target;
  for (let i = 0; i < listElements.length; i++) {
    if (listElements[i].id.toString() === draggedElement.id.toString()) {
      index = i;
    }
  }
});
document.addEventListener("dragover", (event) => {
  event.preventDefault();
});

document.addEventListener("drop", (event) => {
  dropElement = event.target;
  if (event.target.id.toString() !== draggedElement.id.toString()) {
    for (let i = 0; i < listElements.length; i++) {
      if (listElements[i].id.toString() === event.target.id.toString()) {
        dropIndex = i;
      }
    }
    list.replaceChild(draggedElement, listElements[dropIndex]);
    if (index === 0) {
      listElements[index].before(dropElement);
    } else {
      listElements[index - 1].after(dropElement);
    }
  }
});
