
const replaceeWord = (obj) => {
  console.log('replace checks for obj', obj);


  setInterval(function() {
    const elementsToReplace = document.querySelectorAll('.yt-core-attributed-string');
  console.log(".......................///////////////////......................")
  console.log(elementsToReplace)

  elementsToReplace.forEach(element => {
    const lowerCaseText = element.innerText.toLowerCase();
    const lowerCaseKeyword = obj.keyword.toLowerCase();

    if (lowerCaseText.includes(lowerCaseKeyword)) {
      switch (obj.type) {      
        case '0':
          // Remove
          element.innerHTML = element.innerHTML.replace(new RegExp(obj.keyword, 'gi'), '');
          break;
        case '1':
          // Replace
          element.innerHTML = element.innerHTML.replace(new RegExp(obj.keyword, 'gi'), obj.replace);
          break;
        case '2':
          // Bluruuy
          // element.style.color = 'transparent';
          // element.style.textShadow = '0 0 8px rgba(0,0,0,0.5)';
          element.innerHTML = "-----------------------------Hello------------------------------------"
          break;
        default:
          break;
      }
    }
  });
    
  }, 250);
  
};

chrome.storage.sync.get({
    keywordsArray: []
  }, function(items) {
    replacePageWords(items.keywordsArray);
  });

function replacePageWords(keywordsArray){
    //...
    for (var i = 0; i < keywordsArray.length; i++) {
      replaceeWord(keywordsArray[i]);
    }
  }
