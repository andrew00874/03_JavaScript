const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("testbutton");
const menus = [
  "곱창",
  "김밥",
  "제육볶음",
  "돈까스",
  "파스타",
  "샐러드",
  "라면",
  "삼겹살",
  "카레라이스",
  "불고기",
  "피자",
  "치킨",
  "쌀국수",
  "감자탕",
  "닭가슴살",
];
selectBtn.addEventListener("click", function () {
  // Math
  // .random() : 0 이상 1 미만의 랜덤한 소수를 생성
  // floor() : 소숫점을 버림하여 정수로 만듦(내림 처리)
  // .ceil() : 소수점을 올림하여 정수로 만듦(올림 처리)
  // .round() : 소수점 반올림하여 정수로 만듦(반올림 처리)
  const randex = Math.floor(Math.random() * menus.length);
  console.log(randex);
  menuResult.innerText = menus[randex];
});
