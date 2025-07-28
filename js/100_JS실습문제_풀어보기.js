function 첫번째함수() {
  alert("안녕하세요!");
}
function 텍스트변경() {
  msg_to_ex = document.getElementById("메시지영역");
  msg_to_ex.innerHTML = "새로운 메시지!";
}
function 배경색변경(색상) {
  const q = document.querySelector("body");
  q.style.backgroundColor = 색상;
}
function 인사하기() {
  const name = document.getElementById("이름입력").value;
  const hello = document.getElementById("인사결과");
  hello.innerHTML = `안녕하세요, [${name}] 님!👋`;
}
function 계산하기(연산자) {
  const num1 = document.getElementById("숫자1").value;
  const num2 = document.getElementById("숫자2").value;
  const res = document.getElementById("계산결과");
  var ans;
  if (연산자 == "+") {
    ans = Number(num1) + Number(num2);
  } else if (연산자 == "-") {
    ans = Number(num1) - Number(num2);
  } else if (연산자 == "*") {
    ans = Number(num1) * Number(num2);
  }
  res.innerHTML = `계산결과 ${num1} ${연산자} ${num2} = ${ans}`;
}
function 이미지크기조절(크기) {
  // javaScript 내에서 작성하는 스타일은 2순위 스타일이기 때문에 지양
  const img_mod = document.getElementById("조절이미지");
  img_mod.style.width = 크기;
  img_mod.style.height = 크기;
}
function 이미지크기조절2(가로, 세로) {
  // javaScript 내에서 작성하는 스타일은 2순위 스타일이기 때문에 지양
  const img_mod = document.getElementById("조절이미지");
  img_mod.style.width = 가로;
  img_mod.style.height = 세로;
}
function 글자스타일변경(색상, 크기, 굵기) {
  const st_txt = document.getElementById("스타일텍스트");
  st_txt.style.color = 색상;
  st_txt.style.fontSize = 크기;
  st_txt.style.fontWeight = 굵기;
}
function 시간보여주기() {
  const now = new Date();
  const time = document.getElementById("시간표시");
  time.innerHTML = `현재 시간 ${now.getFullYear()}년 ${now.getMonth()}월
         ${now.getDay()}일 ${now.getHours()}시 ${now.getMinutes()}분 입니다.⏰`;
}
function 토글기능() {
  const toggle = document.getElementById("토글박스");
  if (toggle.style.display == "none") {
    toggle.style.display = "block";
  } else {
    toggle.style.display = "none";
  }
}
function 게임체크(색상) {
  const res = document.getElementById("게임결과");
  if (색상 == "red") {
    res.innerHTML = "정답!⭕";
  } else {
    res.innerHTML = "땡!❌";
  }
}
