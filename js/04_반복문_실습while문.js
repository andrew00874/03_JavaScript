/*
            주문 완료기능을 이용해서 switch case문으로 주문 완료

            switch문으로 메뉴주문 받아오기
            let orders; 라는 명칭으로 주문 담기
        */
// id = "menuSelect"
// const를 이용해서 아이디값 가져오기
// id위치를 바라보거나, value값을 확인할 때는 let보다 const를 활용하는 것이 바람직함
let totalprice = 0,
  foodname = "",
  quant1 = 0,
  quant2 = 0,
  quant3 = 0,
  quant4 = 0;

function 주문추가기능() {
  const result = document.getElementById("price");
  const orders = document.getElementById("menuSelect").value;

  switch (orders) {
    case "1":
      quant1++;
      totalprice += 15000;
      break;
    case "2":
      quant2++;
      totalprice += 18000;
      break;
    case "3":
      quant3++;
      totalprice += 8000;
      break;
    case "4":
      quant4++;
      totalprice += 3000;
      break;
    default:
      break;
  }
  // orders= `${orders} ${foodname} - ${totalprice} 원<br>`;
  result.innerHTML = `<h3>주문목록</h3>피자 ${quant1}<br>치킨 ${quant2}<br>햄버거 ${quant3}<br>음료 ${quant4}<hr/>총 가격은 ${totalprice.toLocaleString()} 입니다.`;
}
function 초기화() {
  const result = document.getElementById("price");
  const orders = document.getElementById("menuSelect");

  orders.value = "";
  totalprice = 0;
  quant1 = quant2 = quant3 = quant4 = 0;
  result.innerHTML = "";
}
function 주문완료기능() {
  if (totalprice == 0) {
    alert("주문할 메뉴가 없습니다!");
  } else {
    alert(`총 가격은 ${totalprice.toLocaleString()}원입니다. `);
  }
  초기화();
}

let try_cnt = 0;

function 비밀번호체크() {
  // while문으로 계속 체크 while문이 false가 될 때 까지 무한 반복
  let password = document.getElementById("비밀번호입력").value;

  while (password != "1234"){
    try_cnt++;
    password = prompt(`비밀번호가 틀렸습니다. 다시 입력하세요. 시도횟수 ${try_cnt}`);
    if(password == null){
      document.getElementById("결과창").innerHTML = "로그인이 취소되었습니다.";
      return;
    }
  }
  try_cnt++;
  document.getElementById("결과창").innerHTML = `<h3>정답입니다. 시도횟수 ${try_cnt}</h3>`
  try_cnt = 0;
  // if (password != "1234") {
  //   try_cnt++; 
  //   document.getElementById("결과창").innerHTML=`<h6>다시입력하세요. 시도횟수 ${try_cnt}</h6>`    
  // } else {
  // try_cnt++;
  // document.getElementById("결과창").innerHTML=`<h6>정답입니다. 시도횟수 ${try_cnt}</h6>`
  // try_cnt = 0;    
  // }
}