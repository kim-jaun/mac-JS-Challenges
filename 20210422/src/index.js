const title = document.querySelector("h1");
const body = document.querySelector("body");

function windowResizeHandleEvent() {
  if (window.innerWidth <= 500) {
    body.style.background = "#2d8cd5";
  } else if (window.innerWidth < 700) {
    body.style.background = "#8e4fae";
  } else {
    body.style.background = "#eebc11";
  }
}

windowResizeHandleEvent();
window.addEventListener("resize", windowResizeHandleEvent);
