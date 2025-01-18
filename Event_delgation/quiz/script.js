const correctAnswers = ["D", "B", "C", "B", "D"];
const quizForm = document.querySelector(".quiz-form");
const questions = document.querySelectorAll(".question");
const result = document.querySelector(".result");

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value,
  ];
  let score = 0;

  userAnswers.forEach(function (userAnswer, index) {
    if (userAnswer === correctAnswers[index]) {
      score++;
      //questions[index].classList.remove("wrong");
      questions[index].classList.add("correct");
    } else {
      //questions[index].classList.remove("correct");
      questions[index].classList.add("wrong");
    }
  });

  result.classList.remove("hide");
  result.querySelector(".score-result").innerText = `You Scored ${score}/5`;
});
