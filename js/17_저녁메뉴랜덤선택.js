const menuResult = document.getElementById("menuResult");
const selectBtn = document.getElementById("selectBtn");
const menuInput = document.getElementById("menuInput");
const addBtn = document.getElementById("addBtn");
const validationMessage = document.getElementById("validationMessage");
const menuItems = document.getElementById("menuItems");
const menuCount = document.getElementById("menuCount");

const menus = [
  "곱창",
  "김밥",
  "제육볶음",
  "돈까스",
  "파스타",
  "샐러드",
  "라면",
  "삼겹살",
  "카레라이스",
  "불고기",
  "피자",
  "치킨",
  "쌀국수",
  "감자탕",
  "닭가슴살",
];

// 한글, 영어, 숫자 포함 정규식
const menuRegex = /^[가-힣a-zA-Z0-9\s]{2,20}$/;

// 메뉴 목록 화면에 표시
function displayMenus() {
  menuItems.innerHTML = "";
  /*
        createElement = 태그 내부에 추가로 태그 및 요소를 넣을 수 있음
        forEach = 각 배열의 요소에 대해 주어진 함수를 한번씩 실행하는 배열 메서드

        ex)
        const 과일들 = ["사과", "바나나", "오렌지"];
        내부에 존재하는 과일들을 한번씩 모두 출력하는 향상된 for문
        사용방법
        과일들.foreach((과일) => {
            // 과일을 한번씩 꺼냈을 때 실행할 기능들 작성
            // 주로 배열에서 index 대신에 가볍게 문자열을 순회하여 출력할 때 많이 사용    
        })
        */
  menus.forEach((menu) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item";
    menuItem.textContent = menu;
    menuItems.appendChild(menuItem);
  });
  menuCount.textContent = menus.length;
}

displayMenus();

// Math.random 사용해서 메뉴 랜덤으로 선택하기

//뽑기 버튼에 해당하는 selectBtn에 메뉴 클릭했을 때 현재 메뉴 목록에 작성된 메뉴를
// 랜덤으로 선택하기
selectBtn.addEventListener("click", () => {
  if (menus.length == 0) {
    alert("메뉴가 없습니다!");
    return;
  }
  const selectedMenu = menus[Math.floor(Math.random() * menus.length)];
  menuResult.innerText = selectedMenu;
});

addBtn.addEventListener("click", () => {
  const newmenu = document.getElementById("menuInput").value;
  if (!validator(newmenu)) {
      menuInput.value = "";
      validfail();
    reutrn;
  }
  menus.push(newmenu);
  menuInput.value = "";
  validsuccess();
  displayMenus();
});

/*
className
HTML 요소 전체 class 속성을 문자열로 다루는 방식 한번에 교체할 때 사용

classList
HTML 요소의 clss들을 개별적으로 관리하는 방식
class를 하나씩 추가/제거/토글 기능
*/

menuInput.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    const newmenu = document.getElementById("menuInput").value;
    if (!validator(newmenu)) {
      validfail();
      menuInput.value = "";
      return;
    }
    menus.push(newmenu);
    menuInput.value = "";
    validsuccess();
    displayMenus();
  }
});

function validator(str) {
  if (str.trim() == "") {
    validationMessage.textContent = "메뉴명을 적어주세요";
    return false;
  } else if (!menuRegex.test(str)) {
    validationMessage.textContent = "메뉴명 양식을 지켜주세요";
    return false;
  } else if (menus.includes(str)) {
    validationMessage.textContent = "이미 있는 메뉴입니다.";
    return false;
  } else return true;
}

let messagetimer;

function validsuccess() {
  clearTimeout(messagetimer);
  menuInput.style.borderColor = "";
  validationMessage.className = "validation-message success";
  validationMessage.textContent = "메뉴 추가 성공!";
  messagetimer = setTimeout(() => {
    validationMessage.textContent = "";
  }, 3000);
}

function validfail() {
  clearTimeout(messagetimer);
  menuInput.style.borderColor = "red";
  validationMessage.className = "validation-message error";
  messagetimer = setTimeout(() => {
    validationMessage.textContent = "";
    menuInput.style.borderColor = "";
  }, 3000);
  return;
}
