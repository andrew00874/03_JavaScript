/* 매개변수, 전달인자 */
// const input1 = document.querySelector("#input1");
//     // querySelcetor -> #을 작성하지 않아도 되는 메서드로 교체
// const btn1 = document.querySelector("#btn1");

const input1 = document.getElementById("input1");
const btn1 = document.getElementById("btn1");

/* btn1 클릭 시 #input1의 값을 읽어와 print1() 함수를 호출 하겠다. */

// 자주 사용하는 기능을 분리해서
// 기능 명칭으로 사용할 수 있다.
function print1(val, res) {
  alert(`${res}은(는) ${val}입니다.`);
}

btn1.addEventListener("click", function () {
  const val = input1.value;
  let res;
  if (val.trim().length == 0) {
    alert("숫자를 입력해주세요.");
    return;
  }

  if (Number(val) == 0) {
    res = "0";
    alert(`입력하신 숫자는${res}, ${val}입니다.`);
  } else if (Number(val) > 0) {
    res = "양수";
    alert(`입력하신 숫자는 ${res}, ${val}입니다.`);
  } else if (Number(val) < 0) {
    res = "음수";
    alert(`입력하신 숫자는 ${res}, ${val}입니다.`);
  }
  print1(val, res);
  print1(res, val);
  /* 함수 호출 (값 전달) */
  // [!! 중요 !!] 전달되는 값의 순서가 중요하다
});

const btn3a = document.getElementById("btn3a");
btn3a.addEventListener("click", function () {
  const numbers = [];

  numbers[0] = 30;
  numbers[2] = 10;

  console.log(numbers);

  /* 배열.push(값) : 배열의 마지막 요소로 값을 추가 */
  numbers.push(30);
  console.log(numbers);

  // pow(a,b) = a의 b제곱
  numbers.push(pow(2, 4)); // == numbers.push(16);
  console.log(numbers);
  // push나 numbers[idx] 를 이용해서 값을 추가할 때
  // 함수로 만든 기능을 활용해서 숫자나 글자를 추가할 수 있다.

  // 배열.pop() : 배열의 마지막 요소 삭제
  numbers.pop();
  console.log(numbers);
});

function pow(num, x) {
  let result = 1; //곱했을 때 결과에 영향을 주지 않기 위해 1 초기화
  for (let i = 0; i < x; i++) {
    result *= num;
  }
  return result;
}
/* 화살표 함수 */
// 클래스가 arrow인 요소를 모두 가져오기 (배열 Array 형태로 확인할 것)
const arrowList = document.querySelectorAll(".arrow");

/* 화살표 함수 기본 형태 */
arrowList[0].addEventListener("click", () => {
  alert("화살표 함수 기본 형태 실습");
});
/* 매개 변수가 1개인 경우 */
arrowList[1].addEventListener("click", (e) => {
  // e        : 이벤트 객체 (모든 이벤트 관련 정보가 담겨있는 객체)
  // e.target : 이벤트가 발생한 요소
  if (e.target.style.backgroundColor != "hotpink") {
    e.target.style.backgroundColor = "hotpink";
  } else {
    e.target.style.backgroundColor = "";
  }
});
/* return 한 줄만 작성된 경우 */
arrowList[2].addEventListener("click", (e) => {
  // alert(input1 + input2);

  // alert((input1, input2) => input1 + input2);
  // 화살표 함수 자체를 출력하겠다.
  // (input1, input2) => input1 + input2 내용이 그대로 출력
  // 더하기 계산식이 되지 않고, 더하기 계산 방법을 보여주는 형태.

  계산기능((a, b) => a + b);
  계산기능((a, b) => a - b);
  계산기능((a, b) => a * b);
});

// 1탄 : 일반 함수로 선언
function 계산기능(익명함수기능) {
  const input1 = Number(prompt("첫 번째 값"));
  const input2 = Number(prompt("두 번째 값"));
  alert(익명함수기능(input1, input2));
}
/* return 한 줄인데 object 반환하는 경우 */
arrowList[3].addEventListener("click", () => {
  // const obj = 기능("홍길동", 20);
  확인하기((name, age) => {
    return {
      name: name,
      age: age,
    };
    // JS {Key : Value, Key : Value}
    // 값을 꺼내기 위한 키 : 키 내부에 들어있는 값
  });
});

function 확인하기(기능) {
  const obj = 기능("홍길동", 20);
  console.log("obj.name : ", obj.name);
  console.log("obj.age : ", obj.age);
}
