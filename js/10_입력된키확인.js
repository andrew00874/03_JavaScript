const key = document.querySelectorAll(".key");

//특정 요소 X
// 문서(화면 전체)에서 키가 눌러지는 걸 감지했을 때

document.addEventListener("keydown", function (e) {
  // e: 이벤트 객체(이벤트 관련 정보가 모두 담겨 있음)
  // e.key : 입력된 키
  // 문자열.toLowerCase() : 영어를 모두 소문자로 변경
  // 문자열.toUpperCase() : 영어를 모두 대문자로 변경
  // index = 0 번째 부터 시작 마지막은 -1한 숫자값
  // length = 총 글자 수와 같이 길이 수

  let idx; // 인덱스 값을 저장할 변수 이름

  // 입력된 키와 일치하는 case 를 실행
  switch (e.key.toLowerCase()) {
    case "q":
      idx = 0;
      break;
    case "w":
      idx = 1;
      break;
    case "e":
      idx = 2;
      break;
    case "r":
      idx = 3;
      break;
    default:
      alert("준비중입니다!");
      return;
  }
  key[idx].style.color = "#2a9d8f";
});

document.addEventListener("keyup", function (e) {
  let idx;

  switch (e.key.toLowerCase()) {
    case "q":
      idx = 0;
      break;
    case "w":
      idx = 1;
      break;
    case "e":
      idx = 2;
      break;
    case "r":
      idx = 3;
      break;
    default:
      alert("준비중입니다!");
      return;
  }
  key[idx].style.color = "#333";
});
//keyup 했을 때 글자색 = white
