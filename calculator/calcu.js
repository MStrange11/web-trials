const display = document.getElementById("display");
const calcu = document.getElementById("calculator_right");
const entend_right_btn = document.getElementById("entend_right_btn");
let save_ans = "";

function appendToDisplay(input) {
  display.value += input;
}
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Syntax error!";
    console.log(error);
  }
}
function save() {
  save_ans = display.value;
}
function displayAns() {
  display.value += save_ans;
}
function clearDisplay() {
  display.value = "";
}
function delete_() {
  display.value = display.value.slice(0, -1);
}
var show_extra = true;

function extend_right() {
  if (show_extra) {
    calcu.style.visibility = "visible";
    // calcu.style.left = "700px";
    calcu.style.left = "96%";
    entend_right_btn.classList.toggle("r_active");
    show_extra = false;
  } else {
    entend_right_btn.classList.toggle("r_active");
    calcu.style.visibility = "hidden";
    // calcu.style.left = "230px";
    calcu.style.left = "45%";
    show_extra = true;
  }
}
