// 계절 판별 함수
function 계절체크기능() {
  const month = document.getElementById("monthSelect").value;
  const resultDiv = document.getElementById("seasonResult");

  // 선택한 계절을 보여주기
  switch (month) {
    case "6":
    case "7":
    case "8":
      alert("여름입니다.");
      resultDiv.innerText = "여름입니다";
      break;
    case "9":
    case "10":
    case "11":
      alert("가을입니다.");
      resultDiv.innerText = "가을입니다.";
      break;
    case "12":
    case "1":
    case "2":
      alert("겨울입니다.");
      resultDiv.innerText = "겨울입니다.";
      break;
    case "3":
    case "4":
    case "5":
      alert("봄입니다.");
      resultDiv.innerText = "봄입니다.";
      break;
    default:
      alert("월을 선택해주세요!");
  }
}

//커피 주문함수
//const coffee 라는 명칭으로 coffeSelect value 값을 담아주기.
//resultCoffee 라는 명칭으로 coffeeResult 요소를 담아주기.

function 커피주문가능() {
  const coffee = document.getElementById("coffeSelect").value;
  const resultCoffee = document.getElementById("coffeeResult");

  let name, price, description;
  switch (coffee) {
    case "americano":
      alert("2,000원입니다.");
      price = "2,000원";
      name = "아메리카노";
      description = "깔끔하고 진한 맛의 기본 커피";
      break;
    case "latte":
      alert("3,500원입니다.");
      price = "3,500원";
      name = "카페라떼";
      description = "진한 우유맛이 나는 부드러운 커피";
      break;
    case "cappuccino":
      alert("3,800원입니다.");
      price = "3,800원";
      name = "카푸치노";
      description = "진한 에스프레소와 우유 거품의 조화";
      break;
    case "mocha":
      alert("4,200원입니다.");
      price = "4,200원";
      name = "카페모카";
      description = "달콤한 초콜릿이 들어간 커피";
      break;
    case "macchiato":
      alert("4,000원입니다.");
      price = "4,000원";
      name = "마키아토";
      description = "카라멜 시럽이 들어간 달콤한 커피";
      break;
    default:
      alert("가격 정보 없음");
      price = "가격 정보 없음";
      break;
  }
  /*
          ${} template literal
           변수 삽입 문법
          */
  resultCoffee.innerHTML = `☕ ${name}<br>💰 가격: ${price}<br>📝 설명: ${description}`;
}
