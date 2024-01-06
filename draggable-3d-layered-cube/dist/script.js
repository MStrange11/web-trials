var cube = document.getElementById("cube");
var cubeWrap = document.getElementById("cube-wrap");
var isDragging = false;

var currentX, currentY, initialX, initialY;
var xOffset = 0,
  yOffset = 0;

cubeWrap.addEventListener("mousedown", dragStart, false);
cubeWrap.addEventListener("mouseup", dragEnd, false);
cubeWrap.addEventListener("mousemove", drag, false);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === cubeWrap) {
    isDragging = true;
  }
}

function dragEnd() {
  initialX = currentX;
  initialY = currentY;
  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;
    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, cube);
  }
}

function setTranslate(xPos, yPos, el) {
  el.style.transform = "rotateX(" + yPos + "deg) rotateY(" + xPos + "deg)";
}