const wrapper = document.getElementById("bubble_wrapper");

const animateBubble = (x) => {
  const bubble = document.createElement("div");

  bubble.className = "bubble";

  bubble.style.left = `${x}px`;

  wrapper.appendChild(bubble);

  setTimeout(() => wrapper.removeChild(bubble), 2000);
};

window.onmousemove = (e) => animateBubble(e.clientX);

// function showCoords(event) {
//   animateBubble(event.clientX);
//   let text = "X coords: " + event.clientX + ", Y coords: " + event.clientY;
//   document.getElementById("title").innerHTML = text;
// }
