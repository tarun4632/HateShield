

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.comments) {

      console.log("comments...")
      console.log(request.comments);
    }
  });
  