const randomDog = document.getElementById("randomDog");
const content = document.getElementById("content");

randomDog.addEventListener("click", () => {
  fetch("https://api.thedogapi.com/v1/images/search")
    .then((response) => response.json())
    .then(
      (result) =>
        (content.innerHTML = `
  <strong>id : </strong> ${result[0].id} <br>
  <strong>url : </strong> ${result[0].url} <br>
  <img src="${result[0].url}" alt="Randog" class="cat-image">
  `)
    );
});

/* TODO 코드를 작성해야 하거나, 코드 설명, 코드 내용 포함 주소

    parse() 와 json() 메서드 차이
    
    * JSON.parse()
    JavaScript의 내장 메서드
    JSON 문자열을 JavaScript 객체로 변환
    동기적 처리

    * response.json()
    fetchAPI의 response 객체 메서드
    URL 응답 본문을 JSON으로 받아 JS 객체로 변환
    비동기적 처리

    동기    : 은행 번호표 업무 / 순차적으로 시작하고 종료
            직렬 업무 형태

    비동기  : 카페 주문 / 카페 주문을 먼저 했지만 뒤에 있는 사람의 음료가 먼저 나오기도 함
                         카페 주문을 기다리며 다른 업무를 할 수 있음.
            병렬 업무 형태
*/
