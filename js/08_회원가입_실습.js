const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");
const passwordResult = document.getElementById("password-result");

passwordConfirm.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    if (password.value === "" || passwordConfirm.value === "") {
      return;
    } else if (password.value === passwordConfirm.value) {
      passwordResult.innerHTML = "비밀번호가 일치합니다.";
    } else {
      passwordResult.innerHTML = "비밀번호가 불일치합니다.";
    }
  }
});
