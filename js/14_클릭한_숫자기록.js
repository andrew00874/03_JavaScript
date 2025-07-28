// 클릭한 숫자를 10글자 까지만 기록하기
// 1. select all number id 모두 배열로 가져오기
// 2. id 값을 res로 가져오기

//let numarr = new Array();
const numbers = document.querySelectorAll(".number");
const res = document.getElementById("result");
const resetBtn = document.getElementById("resetBtn");

for (let i = 0; i < numbers.length; i++) {
  /*
    아래 방법 모두 가능 / 개발자가 편한 방식으로 사용.
    numbers[i].addEventListener("click", function() {
        result.textContent += this.textContent;
        //function 을 사용할 때는 this를 사용할 수 있음
        // addEventListener 앞에 있는 numbers를 this로 대신 가능
        
    numbers[i].addEventListener("click", () => {
        result.textContent += numbers[i].textContent;
        // function 이 없기 때문에 this 사용할 수 없음
        // addEventListener 앞에 있는 요소 명칭을 직접 작성

    numbers[i].addEventListener("click", e => {
        res.textContent += e.target.textContent;
        //function이 없기 때문에 this 사용 불가

    */
  numbers[i].addEventListener("click", function () {
    if (/*numarr.length >= 10*/ res.textContent.length == 10) {
      alert("10글자 까지만 입력 가능");
      return;
    }
    //numarr.push(this.textContent);
    res.textContent += this.textContent;
  });
}

resetBtn.addEventListener("click", () => {
  // numarr = [];
  res.textContent = "";
});
