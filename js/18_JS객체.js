/* JS 객체
    - {K:V, K:V, K:V} 형태

    - (중요) Key는 무조건 문자열 (string)
        -> "key", 'key', key ("", '' 작성 안해도 JS는 string으로 인식)
    
    - key는 기본적으로 오름차순으로 정렬됨. (short, ASC)

*/
/*{} 객체 생성 + 다루기*/

const btn1 = document.getElementById("btn1");

btn1.addEventListener("click", () => {
  // 1. 객체 생성
  // const product = {}; // 비어있는 객체 생성

  const 제품 = {
    productName: "갤럭시북4프로",
    productBrand: "SAMSUNG",
    price: 200000,
  };
  console.log(제품);

  // 2. 객체 내 key 값을 이용해 원하는 value 얻어오기

  // 1) 객체명.key
  // 가장 많이 사용하는 방법
  console.log(제품.productName, 제품.productBrand, 제품.price);
  console.log("-------------------------------------");
  // 위와 동일한 역할을 하지만, 위에 비해 사용을 많이 하지 않는 방식
  console.log(제품["productName"], 제품["productBrand"], 제품["price"]);
  // ---------------------------------------------------------
  // 3. 객체에 K:V 추가
  // Value 리터럴 값은 하나가 아닌, [] 리스트 목록 형태도 가능
  // 원하는 key를 생각해두고

  // 객체명.key = value;
  // 또는
  // 객체명["key"] = value;

  제품.color = ["black", "silver", "red"];
  console.log(제품);
  console.log(제품.color[1]);

  // 제품 내에 storage 하는
  // key 명칭으로 값을 256GB 512GB 1TB 리스트 형태로 저장
  // 출력
  제품.storage = ["256GB", "512GB", "1TB"];
  console.log(제품);
  //price 를 180000 18만원으로 변경
  제품.price = 180000;
  console.log(제품);

  // 4. 원하는 K:V 삭제하기 (delete 연산자 사용)
  // - delete 객체이름.key

  delete 제품.productName; // productName 삭제
  console.log("delete 후 제품 : ", 제품);
});

// ======================================================== //

const btn2 = document.getElementById("btn2");

/* method(메서드) */
btn2.addEventListener("click", () => {
  const smartphone = {}; // 내부가 비어있는 객체 생성

  smartphone.model = "iphone16promax";
  smartphone.price = 2000000;

  // 메서드(객체의 기능(함수)) 추가
  smartphone.info = function () {
    const brand = "apple";
    /* 
        this 참조 변수
        - 작성되는 위치에 따라서 의미가 다름

        ex) <button onclick=테스트기능(this)>
            -> 이때 this == 클릭된 요소(버튼)에 해당

        ex) 객체명.메서드이름 = function (){
            this.변수이름 = "값" ;
                -> 이때 this == 메서드가 작성된 객체
            }
        */

    // this == 스마트폰을 가리킴
    // smartphone.brand = brand;
    console.log("모델이름 : ", this.model);
    console.log("가격 : ", this.price);
    console.log("브랜드 : ", this.brand);
    console.log("브랜드 : ", brand);
  };
  // 메서드 기능 수행하기
  // 어디서든 info() 기능을 수행했을 때 내용이나 행동을 확인할 수 있는 것이 아니라
  // 스마트폰이라는 내부에 존재하는 기능을 수행하기 위해서는
  // 스마트폰 객체 내부에 존재하는 info() 기능을 호출하겠다 와 같은 형식으로 사용
  smartphone.info();
  /* 
  정규식.test("소비자가 작성한 값 확인하기") = true / false로 일치하는지 확인

  // 1번 방법
  정규식 = {
    test = function() {
        boolean 값으로 확인할 수 있는 코드가 작성
    }
  }
  // 2번 방법
  정규식 = {};
  정규식.test = function (){
    boolean 값으로 확인할 수 있는 코드 작성
  }

  // 1번 방법이나 2번 방법을 활용해서 메서드를 생성하고 나면, 아래와 같이 호출

  정규식.test();

  if (개발자가 원하는 정규식.test(소비자가 작성한 값 확인)){
    // 개발자가 원하는 정규식 == 소비자가 작성한 값 확인
    // true 일 경우에만 실행
  }
  */
});

// ===========================================
/* 생성자 함수 */

/* 
    1. 생성자 함수 선언 + 정의
        (중요) 생성자 함수의 이름은 무조건 '대문자' 로 시작
        영어 이외에 한글 가능, 소문자도 가능하지만 대문자가 국룰
    
    2. 
    
*/
const btn3 = document.getElementById("btn3");

// 학생 객체 생성자 함수
function Student(name, grade, ban, num, score) {
  // 속성
  // 전달 받은 값(parameter, 매개변수, 리터럴) 을 현재 객체(this)에 속성으로 추가
  // 현재 속성에 값 추가
  // this.속성 = 값
  this.name = name;
  this.grade = grade;
  this.ban = ban;
  this.num = num;
  this.score = score;

  // 기능(메서드)
  this.intro = function () {
    console.log(`
    ${this.grade}학년
    ${this.ban}반
    ${this.num}번
    ${this.name}이름
    ${score}점 입니다.
        `);
  };
}

btn3.addEventListener("click", () => {
  const st1 = new Student("김재민", 2, 9, 10, 80);
  console.log(st1);
  const st2 = new Student("엄준식", 1, 5, 57, 30);
  console.log(st2);
});

/* JSON */

const btn4 = document.getElementById("btn4");
btn4.addEventListener("click", () => {
  // JS 객체 생성
  const obj = {
    id: "test01",
    pw: "1234",
    num: 9999,
  };

  // 1. JS 객체 -> JSON 문자열로 반환

  const str = JSON.stringify(obj);
  console.log("obj : ", obj);
  console.log("str : ", str);

  // JSON 문자열 생성
  // syntax error => 모든 key 값에 쌍따옴표 ("")를 씌워줘야함
  const str2 = '{"id": "test01", "pw": "1234", "num": 9999}';

  // 1. JSON 문자열 -> JS 객체 로 반환

  const obj2 = JSON.parse(str2);
  console.log("obj2 : ", obj2);
  console.log("str2 : ", str2);

  // 서버 데이터 비동기 요청
  /* 
  fetch("API_URL")                         : 웹 API로 HTTP 요청을 보냄
                                             비동기 처리 상태로
                                             네트워크 요청이 완료되면 Response 객체 제공
  .then((response) => resonse.json())      : fetch 에서 URL 주소로 접속해서 
                                             요청을 성공적으로 받으면 실행됨.
                                             주로 URL 주소에서는 JSON() 형태로 데이터 존재
                                             이 데이터를 JSON->JS 객체 형태로 변환
  .then((result) => result.response.data); : result -> 변환된 JS 객체 데이터 저장
                                             result 내부에서 원하는 값에 접근해서
                                             원하는 데이터만 출력.
  
전체 흐름
    API 요청    ->      응답 받기       ->      JSON 변환       ->      데이터 출력                                             
    fetch                then1                  then2                 console.log
*/

  fetch(
    "https://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth?serviceKey=fC0CJR9Lmwp3VfoLcND3XVFDW7FKGuTMECDT6TZD3aE7q4XUVL6PYscpePWfKNMwh0p6ZUt%2FmOm5xGbckoRGCQ%3D%3D&returnType=JSON&numOfRows=100&pageNo=1&searchDate=2024-01-22&InformCode=PM10"
  )
    .then((response) => response.json())
    .then((result) => console.log(result.response.header.resultMsg));
});
