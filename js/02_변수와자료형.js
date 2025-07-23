/* console.log(값)

브라우저 콘솔에 괄호() 내부의 값을 기록 및 출력
*/
console.log(1234);
console.log("문자열은 양쪽 쌍따옴표를 작성해야한다.");
/*
console.log() 와 alert()는 모두 개발자가 값의 문제를 확인하기 위해
작성하는 도구이다.

alert() = 소비자에게 알림 표시를 나타내기도 하지만, 
          개발자에게 값에 대한 표기를 확인하는 용도이기도 함
*/
//console.log("JS는 홑따옴표도 문자열로 취급한다");
//alert("5678")

/* 변수 선언 */
// 메모리에 값을 저장할 공간을 만들고 이름을 붙이는 것
// 작성법 : 변수종류 변수명;
var number1;

/* 변수에 값을 대입함. */
// 작성된 변수에 값을 대입하는 것
// 작성법 : 변수명 = 값;
number1 = 10;
number1 = 20;

let number2 = 20;
number2 = 30;

console.log("number1 의 값 " + number1);
console.log("number1 의 값 " + number2);

const number3 = 40;
number3 = 50;

console.log("number1 의 값 " + number3);

// var의 경우에는 함수(행동, 기능) 내부에 작성하면
// {} 블록의 개념 관계 없이 어디서든 변수 이름이 호출 가능

function var확인기능(){
    if(true){
        var abc = 10;
    }
    abc = 20;
}

function let확인기능(){
    if(true){
        let abc = 10;
        abc = 20;
    }
    //if 블록이 끝나 abc가 사라졌으므로, ReferenceError가 발생
    abc = 30; // ReferenceError
}

function const확인기능(){
    if(true){
        const abc = 10;
        //선언된 상수에 값을 재할당하려고 해 TypeError가 발생
        abc = 20; // TypeError
    }
}