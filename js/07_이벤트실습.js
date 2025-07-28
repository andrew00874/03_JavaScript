const box4 = document.getElementById("box4");
const input4 = document.getElementById("input4");
const btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function () {
  box4.style.backgroundColor = input4.value;
  btn4.style.backgroundColor = input4.value;
});
input4.addEventListener("keydown", function (event) {
  if (event.key == "Enter") {
    btn4.style.backgroundColor = "black";
  }
});
