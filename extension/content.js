
let comments = document.querySelectorAll("yt-formatted-string#content-text");
let commentData = [];
comments.forEach(comment => {
  commentData.push(comment.innerText);
});


chrome.runtime.sendMessage({comments: commentData});
