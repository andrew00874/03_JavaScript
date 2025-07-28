// 문제 1: 클릭할 때마다 색상 변경
const colorBox = document.querySelector("#colorBox");
const colors = ["red", "blue", "green", "yellow"];
let colorIndex = 0;

colorBox.addEventListener("click", function () {
  this.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});

// 문제 2: 더블클릭으로 크기 변경
const sizeBox = document.querySelector("#sizeBox");
const currentSize = document.querySelector("#currentSize");
const sizes = [100, 150, 200];
let sizeIndex = 0;

sizeBox.addEventListener("dblclick", function () {
  sizeIndex = (sizeIndex + 1) % sizes.length;
  const newSize = sizes[sizeIndex];
  this.style.width = newSize + "px";
  this.style.height = newSize + "px";
  currentSize.innerText = newSize + "px";
});

// 문제 3: 키보드 입력과 실시간 표시
const textInput = document.querySelector("#textInput");
const display = document.querySelector("#display");

textInput.addEventListener("input", function () {
  const text = this.value;
  const length = text.length;
  display.innerHTML = `"${text}" - 글자 수: ${length}`;
});

textInput.addEventListener("keyup", function (e) {
  if (e.key === "Escape") {
    this.value = "";
    display.innerHTML = "글자 수: 0";
  }
});

// 문제 4: 마우스 호버와 이미지 토글
const toggleImage = document.querySelector("#toggleImage");
const hideBtn = document.querySelector("#hideBtn");
const showBtn = document.querySelector("#showBtn");

toggleImage.addEventListener("mouseenter", function () {
  hideBtn.classList.remove("hidden");
});

toggleImage.addEventListener("mouseleave", function () {
  hideBtn.classList.add("hidden");
});

hideBtn.addEventListener("click", function () {
  toggleImage.classList.add("hidden");
  hideBtn.classList.add("hidden");
  showBtn.classList.remove("hidden");
});

showBtn.addEventListener("click", function () {
  toggleImage.classList.remove("hidden");
  showBtn.classList.add("hidden");
});

// 문제 5: 폼 검증과 결과 표시
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const submitBtn = document.querySelector("#submitBtn");
const result = document.querySelector("#result");

submitBtn.addEventListener("click", function () {
  const name = nameInput.value.trim();
  const age = parseInt(ageInput.value);

  let isValid = true;
  let message = "";

  // 이름 검증
  const nameRegex = /^[가-힣]{2,}$/;
  if (!nameRegex.test(name)) {
    isValid = false;
    message += "이름은 2글자 이상의 한글로 입력해주세요.<br>";
  }

  // 나이 검증
  if (isNaN(age) || age < 1 || age > 120) {
    isValid = false;
    message += "나이는 1~120 사이의 숫자로 입력해주세요.<br>";
  }

  if (isValid) {
    result.innerHTML = `<span style="color: green;">✓ 검증 성공!</span><br>이름: ${name}, 나이: ${age}세`;
    result.style.backgroundColor = "#d4edda";
    result.style.borderColor = "#c3e6cb";
  } else {
    result.innerHTML = `<span style="color: red;">✗ 검증 실패</span><br>${message}`;
    result.style.backgroundColor = "#f8d7da";
    result.style.borderColor = "#f5c6cb";
  }
});

// Enter 키로도 검증할 수 있도록
nameInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});

ageInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    submitBtn.click();
  }
});
