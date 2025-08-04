const display = document.querySelector("#display");
const list = document.querySelectorAll("#display > span");
const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#record-container");

let count = 0; // 1/100 초마다 1씩 증가한 값을 저장할 변수
let currInterval; // 인터벌 저장 변수

// --- START/PAUSE 버튼 클릭 이벤트 ---
startBtn.addEventListener("click", (e) => {
  // 1. PAUSE 버튼을 눌렀을 때 (타이머 멈춤)
  if (e.target.textContent === "PAUSE") {
    e.target.textContent = "START";
    window.clearInterval(currInterval); // setInterval 중지
    return;
  }

  // 2. START 버튼을 눌렀을 때 (타이머 시작)
  if (e.target.textContent === "START") {
    e.target.textContent = "PAUSE";
    currInterval = window.setInterval(() => {
      count++; // count 1 증가
      output(); // 화면에 시간 출력
    }, 10); // 10ms(0.01초) 마다 반복
  }
});

// --- RECORD 버튼 클릭 이벤트 ---
recordBtn.addEventListener("click", () => {
  // 현재 출력된 시간을 가져와서 p태그로 만들어 추가
  const recordedTime = `${list[0].textContent}:${list[1].textContent}:${list[2].textContent}`;
  const recordP = document.createElement("p");
  recordP.textContent = recordedTime;
  recordContainer.append(recordP);
});

/* 시계 출력 함수 */
function output() {
  let minute = Math.floor(count / 100 / 60);
  let second = Math.floor((count / 100) % 60);
  let ms = count % 100;

  // 0 붙여서 문자열로 변환해서 반환
  minute = attachZero(minute);
  second = attachZero(second);
  ms = attachZero(ms);

  // minute의 값과 화면에 출력된 분이 다를 경우
  if (list[0].innerText != minute) list[0].innerText = minute;

  // second의 값과 화면에 출력된 초가 다를 경우
  if (list[1].innerText != second) list[1].innerText = second;

  list[2].innerText = ms;
}

/* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attachZero(num) {
  if (num < 10) {
    // 한 자리 숫자인 경우
    return "0" + num;
  }
  return "" + num;
}

/* RESET 버튼이 클릭 되었을 때 */
resetBtn.addEventListener("click", () => {
  // currInterval 제거
  window.clearInterval(currInterval);

  // count, 출력된 시간 모두 0으로
  count = 0;
  output();

  // START 버튼의 내용을 "START"로 변경
  startBtn.textContent = "START";

  // #recordContainer의 내용을 모두 삭제(== 빈 문자열로 변경)
  recordContainer.innerHTML = "";
});
