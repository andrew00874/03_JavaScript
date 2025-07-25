// 인라인 이벤트 모델 확인
function check1(btn) {
  // 매개 변수 : 함수 호출 시 () 내부에 작성된 값을 전달받아 저장하는 함수
  // 매개변수 btn === 클릭한 버튼(this)
  console.log(btn);

  // 버튼의 배경색을 얻어와 저장
  const bgColor = btn.style.backgroundColor;

  // 처음에는 inline-style로 지정된 배경색이 없어서
  // ""빈칸으로 표기됨

  console.log(bgColor);

  // 버튼이 클릭 될 때 마다 pink <-> yellow 변경 만들기
  // if bgClolor == "yellow" 면 pink else yellow
  if (bgColor == "yellow") {
    btn.style.backgroundColor = "pink";
  } else {
    btn.style.backgroundColor = "yellow";
  }
}

const test2 = document.getElementById("test2");
// 표준 이벤트 모델 작성법
// 요소.addEventListener("이벤트 종류", 이벤트 핸들러(함수))

let cnt = 0;
test2.addEventListener("click", function (/*event*/) {
  //투명도 1(불투명) -> 0 0.01씩 투명도 줄이기
  // if (event.key === "Enter") {
  let 현재 = test2.style.opacity; //현재 test2의 투명도 확인

  // 맨 처음에는 투명도 '' -> 1 대입

  if (현재 == "") {
    test2.style.opacity = 1;
    현재 = 1;
  }

  // 투명도 0.1 감소
  test2.style.opacity = 현재 - 0.1;

  if (test2.style.opacity < 0) {
    test2.style.opacity = 1;
  }
  cnt++;
  // 표준 이벤트 모델의 이벤트 핸들러 안에서
  // this == 이벤트가 발생한 요소
  this.innerText = cnt; // 증가한 count 값을 test2내용으로 대입
  // }
});
// #test2 요소를 클릭하면 클릭 횟수 카운트
