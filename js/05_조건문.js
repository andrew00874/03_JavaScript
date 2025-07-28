const 인풋1 = document.getElementById("input1");
// 양수인지 검사하는 기능 설정
function 체크1() {
  const val = Number(인풋1.value); //입력받는 값을 숫자로 변경

  // 만약에 클라이언트가 입력한 숫자값이 0보다 클 경우 = true
  if (val > 0) {
    alert("클라이언트가 입력한 숫자는 0보다 큰 양수입니다.");
  }
  if (val <= 0) {
    alert("클라이언트가 입력한 숫자는 0이거나 작은 음수입니다.");
  }
}

function 체크2() {
  const 인풋2 = document.getElementById("input2");
  const 값 = Number(인풋2.value);
  if (값 > 0) {
    alert("양수입니다.");
  } else {
    alert("0이거나 음수입니다.");
  }
}
