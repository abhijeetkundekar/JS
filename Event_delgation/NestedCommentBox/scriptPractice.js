const commentInput = document.querySelector("#commentInput");
const submitComment = document.querySelector("#submitComment");
const commentsContainer = document.querySelector("#commentsContainer");

submitComment.addEventListener("click", function () {
  console.log("clicked on submit", commentInput.value.trim());
  addComment(commentInput.value.trim());
  commentInput.value = "";
});

function addComment(comment) {
  console.log("adding comment", comment);
  const divEle = document.createElement("div");
  divEle.className = "repliesContainer";
  divEle.innerHTML = `
  <p>${comment}</p>
  <button class="replyBtn">Reply</button>
  <textarea class="replyInput" placeholder="Write a reply ..."></textarea>
  `;

  commentsContainer.appendChild(divEle);
}

commentsContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("replyBtn")) {
    console.log(e.target);
    const replyContainer = e.target.closest(".repliesContainer");
    const replyComment = replyContainer.querySelector(".replyInput");
    console.log("reply comment is ", replyComment.value);
    addReplyComment(replyContainer, replyComment.value);
  }
});

function addReplyComment(parentElement, text) {
  const secondBox = document.createElement("div");
  secondBox.className = "repliesContainer";
  secondBox.innerHTML = `
      <p>
          ${text}
      </p>
      `;
  parentElement.appendChild(secondBox);
}
