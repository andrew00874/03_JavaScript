function 영화등급확인() {
  const input1 = document.getElementById("input1");
  const age = Number(input1.value);

  if (age >= 19) {
    alert("모든 영화를 관람할 수 있어요! 🌟");
  } else if (15 <= age) {
    alert("15세 관람가까지 볼 수 있어요! 🎭");
  } else if (12 <= age) {
    alert("12세 관람가까지 볼 수 있어요! 🍿");
  } else if (age >= 0) {
    alert("전체관람가 영화만 볼 수 있어요! 🎬");
  } else {
    alert("잘못된 나이입니다.");
  }
}
function 옷차림추천() {
  const input2 = document.getElementById("input2");
  const temp = Number(inptu2.value);
  if (temp >= 25) {
    alert("가디건이나 얇은 겉옷이 좋아요! 👔");
  } else if (temp >= 15) {
    alert("반팔, 반바지로 시원하게! 👕");
  } else if (temp >= 5) {
    alert("코트나 자켓을 입으세요! 🧥");
  } else {
    alert("패딩과 목도리를 꼭 챙기세요! 🧥");
  }
}
function 부모님반응예측() {
  const input3 = document.getElementById("input3");
  const score = Number(input3.value);
  if (score > 100) {
    alert("Non-valid Value");
    return 0;
  }
  if (score >= 90) {
    alert("용돈 인상! 치킨 사줄게! 🍗");
  } else if (score >= 80) {
    alert("잘했다! 계속 열심히 해! 👏");
  } else if (score >= 70) {
    alert("조금 더 노력해보자... 📖");
  } else if (score >= 0) {
    alert("게임은 당분간 금지야... 😤");
  } else {
    alert("Non-valid Value");
  }
}
function 할인쿠폰적용() {
  const input4 = document.getElementById("input4");
  const price = Number(input4.value);
  if (price >= 50000) {
    alert(`30% 할인! 결제금액: ${price * 0.7}원`);
  } else if (price >= 30000) {
    alert(`20% 할인! 결제금액: ${price * 0.8}원`);
  } else if (price >= 10000) {
    alert(`10% 할인! 결제금액: ${price * 0.9}원`);
  } else if (price >= 0) {
    alert(`할인이 적용되지 않습니다. 결제 금액: ${price}원`);
  } else {
    alert("Non-valid Value");
  }
}
function 운동강도추천() {
  const input5 = document.getElementById("input5");
  const time = Number(input5.value);

  if (time >= 120) {
    alert("오늘은 충분히 했어요! 휴식을 취하세요! 😴");
  } else if (time >= 60) {
    alert("고강도 운동으로 도전해보세요! 🔥");
  } else if (time >= 30) {
    alert("중간 강도 운동이 적당해요! 💪");
  } else if (time >= 0) {
    alert("가벼운 스트레칭이나 산책을 추천해요! 🚶‍♀️");
  } else {
    alert("Non-valid value");
  }
}
