// 치킨 피자 햄버거 족발 보쌈 찜닭

//1.  const 이용해서 menuSelect selectBtn 만들기

// 2. menus 이용해서 배열 생성

// 3. Math floor Math random 이용해서 난수 생성
//    menus 배열 index 범위 내에서

// 난수 번째 index 요소 값을 화면에 출력
// textContent 이용해서 출력

const menuSelect = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");

const menus = ["치킨", "피자", "햄버거", "족발", "보쌈", "찜닭"];

selectBtn.addEventListener("click", function () {
  let menuidx = Math.floor(Math.random() * menus.length);
  menuSelect.textContent = menus[menuidx];
});
