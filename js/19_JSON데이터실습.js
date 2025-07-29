const fetchPost = document.getElementById("fetchPost");
const result = document.getElementById("result");
const content = document.getElementById("content");

fetchPost.addEventListener("click", function () {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      content.innerHTML = `<strong>userID:</strong>${data.userId}<br>
                           <strong>ID:</strong>${data.id}<br>
                           <strong>Title:</strong>${data.title}<br>
                           <strong>body:</strong>${data.body}<br>`;
    });
});
