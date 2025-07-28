const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const shoppingList = document.getElementById("shopping-list");
// const 명칭 = itemInput, addBtn, shoppingList
const items = [];
// 쇼핑 목록을 저장할 배열
// const items = [];
function addItem() {
    const itemName = itemInput.value.trim();
    if (itemName === ""){
        alert("상품명을 입력하세요.");
        return;
    }
    items.push(itemName);
    let listText = "🛒쇼핑 목록 : \n\n";
    for (i = 0; i < items.length; i++){
        listText += `${i+1}. ${items[i]}\n`;
    }
    shoppingList.textContent = listText;
    itemInput.value ="";
    itemInput.focus();
}
// 상품 추가 함수
// function addItem() {
//     const itemName = itemInput.value.trim();

//     빈 값 체크
//     if (itemName === "") {
//         alert("상품명을 입력하세요.");
//         return;
//     }

//     배열에 상품 추가
//     items.push(itemName);

//     화면에 목록 표시
//     let listText = "🛒 쇼핑 목록:\n\n";
//     for (let i = 0; i < items.length; i++) {
//         listText += `${i + 1}. ${items[i]}\n`;
//     }
//     shoppingList.textContent = listText;

//     입력창 비우기
//     itemInput.value = "";
//     itemInput.focus();
// }
addBtn.addEventListener("click", function(){
    addItem();
});
// 버튼 클릭 이벤트
//

itemInput.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        addItem();
    }
});
// 엔터키 이벤트
// itemInput.addEventListener("keyup", function(e) {
//     if (e.key === "Enter") {
//         addItem();
//     }
// });
