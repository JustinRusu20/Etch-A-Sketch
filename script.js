const grid = document.getElementById("grid");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");

sizeSlider.addEventListener('click', console.log("hello"));

var mouseDown = false;

document.body.onmouseover = function() {
  mouseDown = true;
};

document.body.onmouseleave = function() {
  mouseDown = false;
}

function makeRows(rows, cols) {
  grid.style.setProperty('--grid-rows', rows);
  grid.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    cell.addEventListener('mouseover', changeColor);
    cell.addEventListener('mousedown', changeColor);
    grid.appendChild(cell).className = "grid-item";
  };
};

makeRows(16, 16);


function changeColor(e) {
  if (mouseDown) {
    let color1 = Math.floor(Math.random() * 256);
    let color2 = Math.floor(Math.random() * 256);
    let color3 = Math.floor(Math.random() * 256);

    e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
  }
}