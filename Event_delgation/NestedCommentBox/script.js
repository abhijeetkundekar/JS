const textArea = document.querySelector("#commentInput");
const commentButton = document.querySelector("#submitComment");
const commentsContainer = document.querySelector("#commentsContainer");

commentButton.addEventListener("click", (e) => {
  //console.log("clicked on submit ", textArea.value.trim());
  const commentText = textArea.value.trim();
  if (commentText) {
    addComment(commentText);
    textArea.value = ""; //clearing the input
  }
});

function addComment(commentText) {
  //console.log("adding comment");
  const commentElement = document.createElement("div");
  commentElement.className = "repliesContainer";
  commentElement.innerHTML = `
  <p>${commentText}</p> 
   <button class="replyBtn">Reply</button>
   <div class="repliesContainer collapsed"></div>
<textarea class="replyInput" placeholder="Write a reply..."></textarea>
  `;
  commentsContainer.appendChild(commentElement);
}

commentsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("replyBtn")) {
    //or if statement can also be writen as  e.target.className.includes('replyBtn')
    console.log("clicked on ", e.target);
    const replybox = e.target.closest(".repliesContainer");
    const replyInput = replybox.querySelector(".replyInput");
    console.log("replied data is ", replyInput.value);
    createReply(replybox, replyInput.value);
  }
});

function createReply(parentElement, text) {
  const secondBox = document.createElement("div");
  secondBox.className = "repliesContainer";
  secondBox.innerHTML = `
    <p>
        ${text}
    </p>
    `;
  parentElement.appendChild(secondBox);
}
