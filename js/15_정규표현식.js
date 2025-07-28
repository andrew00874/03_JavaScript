const inputName = document.getElementById("inputName");
const nameResult = document.getElementById("nameResult");

inputName.addEventListener("input", (e) => {
  const name = e.target.value;

  const nameReg = /^[가-힣]{2,10}$/;

  if (nameReg.test(name)) {
    nameResult.textContent = "✅ 유효한 이름 형식입니다.";
    nameResult.style.color = "green";
    inputName.style.borderColor = "green";
  } else {
    nameResult.textContent = "❌ 유효하지 않은 이름 형식입니다.";
    nameResult.style.color = "red";
    inputName.style.borderColor = "red";
  }

  if (name === "") {
    nameResult.textContent = "";
    inputName.style.borderColor = "";
  }
});

const inputPhone = document.getElementById("inputPhone");
const phoneRes = document.getElementById("phoneResult");

inputPhone.addEventListener("input", (e) => {
  const phoneNum = e.target.value;
  const phoneReg = /^01[01679]-\d{3,4}-\d{4}$/;

  if (phoneNum === "") {
    phoneRes.textContent = "";
    return;
  }
  phoneRes.classList.remove("valid", "invalid");

  if (phoneReg.test(phoneNum)) {
    // 유효한 경우
    phoneRes.textContent = "valid";
    phoneRes.classList.add("valid");
  } else {
    phoneRes.textContent = "invalid";
    phoneRes.classList.add("invalid");
  }
});
