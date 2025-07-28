let total = 0;
let orderText = "";
let running = true;
function order() {
  let choice = document.getElementById("choice").value;
  while (running) {
    switch (choice) {
      case "1":
        orderText = "아메리카노";
        total += 3000;
        break;
      case "2":
        orderText = "라떼";
        total += 4000;
        break;
      case "3":
        orderText = "카푸치노";
        total += 4500;
        break;
      case "0":
        running = false;
        alert("주문이 완료되었습니다.");
        document.getElementById(
          "result"
        ).innerHTML = `총 가격은 ${total}입니다.`;
        return;
      default:
        alert("잘못된 입력입니다!");
        break;
    }
    choice = prompt(
      `주문을 추가하시려면 상품코드를 입력해주세요. 주문을 완료하시려면 0을 입력해주세요. 현재까지의 가격 ${total}`
    );
  }
}
