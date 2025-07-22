/*
모든 js파일명.js확장자명
*.js 파일 내부를 <script> 태그 내부라고 보면 됨
어떤 특정 js파일 명칭인지 알 수 없으므로 *어떠한 이라는 표기를 작성한 것

*/

function externalFn(){
    alert("HTML 외부 파일에 작성된 externalFn() 함수 기능 호출되었습니다.");
}

/* JS 맛보기 */
//버튼 클릭 시 body 태그의 글자색, 배경색을 변경

const body = document.querySelector("body"); // 웹페이지 문서 내에서 body 태그를 선택할 것
    /* 버튼에 장착된 기능 실행하면 다크모드로 바꾸는 기능(함수) 설정 */
function 어두운모드() {
    body.style.color = "white";
    body.style.backgroundColor = "black";
}
function 밝은모드() {
    body.style.color = "black";
    body.style.backgroundColor = "white";
}
function 블루모드(색상) {
    body.style.backgroundColor = 색상;
}