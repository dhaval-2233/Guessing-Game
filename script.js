const input = document.querySelector(".guess_input input");
const guessBtn = document.querySelector(".guess");
const guessNum = document.querySelector(".guess_no");
const guessStatus = document.querySelector(".guess_status");
let count = 0;
let digit = Math.floor(Math.random() * 100) + 1;
console.log(digit);
guessBtn.addEventListener("click", () => {
  let inputVal = input.value;
  if (inputVal < 1 || inputVal > 100) {
    alert("pls enter number between 1 to 100");
  } else {
    count += 1;
    if (inputVal > digit) {
      guessStatus.innerHTML = "You Guessed little bit greater 🤦🏻‍♂️";
      input.value = "";
      guessNum.innerHTML = `No of Guess: ${count}`;
    } else if (inputVal < digit) {
      guessStatus.innerHTML = "You Guessed little bit smaller 🤦🏻‍♂️";
      guessNum.innerHTML = `No of Guess: ${count}`;
      input.value = "";
    } else if (inputVal == digit) {
      guessStatus.innerHTML = "Yo Guessed It...🎉";
      guessNum.innerHTML = `You Guessed it in: ${count} attempts`;
      setInterval(() => {
        window.location.reload();
      }, 5000);
      input.innerHTML = "";
    }
  }
});
