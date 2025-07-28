const lotto = new Array(6);
const lottobtn = document.getElementById("lottobtn");
const lottores = document.getElementById("lottores");
lottobtn.addEventListener("click", function () {
  let lotidx = 0;
  while (lotidx < 6) {
    let num = Math.floor(Math.random() * 45 + 1);
    if (lotto.includes(num)) {
      continue;
    }
    lotto[lotidx] = num;
    lotidx++;
  }
  lotto.sort(function (a, b) {
    return a - b;
  });
  lottores.innerText = `${lotto}`;
});
