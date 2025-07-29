const randomCat = document.getElementById("randomCat");
const result = document.getElementById("result");
const content = document.getElementById("content");

const headers = new Headers({
  "Content-Type": "application/json",
  "x-api-key":
    "live_GTkQAbZInVCj2ccDGgyis6PUdfkN2sogpyqZOTYjPpX0qIG4Ur2Qzixmpw8rcQlg",
});

var requestOptions = {
  method: "GET",
  headers: headers,
  redirect: "follow",
};

randomCat.addEventListener("click", () => {
  /* 
    데이터가 중괄호가 아닌 [] 괄호 형태로 시작하면 대부분 배열, 리스트 목록 형태의 데이터
    data를 활용할 때는 data[0] 가져오고 싶은 index 번호 사용
  */
  fetch(
    "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
    requestOptions
  )
    .then((response) => response.json())
    .then(
      (result) =>
        (content.innerHTML = `
            <strong>id :</strong>${result[0].id}</strong><br>
            <strong>URL 주소 : </strong>${result[0].url}</strong><br>
            <img src="${result[0].url}" alt="Random Cat" class="cat-image">
    `)
    )
    .catch((error) => console.log("error", error));
});
