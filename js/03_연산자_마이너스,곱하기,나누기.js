// 변수 선언

/*
document(문서) : HTML 문서 파일 안에서 존재하는 메서드 기능들 중에서
    . 이 항목을 선택하겠다.
    getElementById = 함수 안에서 메서드 기능으로, document를 사용해야만
                     호출할 수 있는 기능으로, 이 기능의 역할은 Element (요소)
                     태그 내부에 존재하는 값을 Id로 식별하여 호출하는 것이다.
    ("아이디명칭") : 요소 태그 내부에서 <input id="아이디명칭">으로 존재하는
                    태그 내부에 요소를 바라보겠다.

    .value          바라만 보는 상태에서 input 내부에 클라이언트(소비자)가 작성한
                    값을 가져오기 위해서 value를 사용
                    value또한 마찬가지로 하위기능이기 때문에 단독으로 사용 불가능
                    주로 html 내부에 존재하는 값을 가져올 때 사용하는 명칭

    
*/

// 대소문자 구분할 경우
// const ABC = "알파벳 ABC 대문자";
// const abc = "알파벳 abc 소문자";

// console.log(ABC);
// console.log(abc);

/*
대문자로 변수 이름을 작성할 경우에는, 상수라는 의미로 개발자들간의 암묵적인 룰.
그래서, 주로 DB연결이나 Email 아이디 인증키와 같은 설정은 대문자로 작성해줌.

개발자, 소비자가 작성한 값을 주고 받는 역할을 하는 변수 명칭은 소문자로 작성함.
*/

// 함수 내부에서 공통으로 사용하는 변수 명칭은 맨 위에 작성 (전역변수)

const num1 = document.getElementById("input1");
const num2 = document.getElementById("input2");
const result = document.getElementById("계산결과");

function minusFn() {
  const val1 = num1.value;
  const val2 = num2.value;
  result.innerHTML = Number(val1) - Number(val2);
}

function multiFn() {
  result.innerHTML = Number(num1.value) * Number(num2.value);
}

function divFn() {
  if (Number(num2.value) == 0) {
    alert("cannot divide with 0!");
    return 0;
  }
  result.innerHTML = Number(num1.value) / Number(num2.value);
}

function modFn() {
  if (Number(num2.value) == 0) {
    alert("cannot divide with 0!");
    return 0;
  }
  result.innerHTML = Number(num1.value) % Number(num2.value);
}
