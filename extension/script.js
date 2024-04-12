
  console.log('replace checks for obj');

  const slurs = [
    "Chutiye", "Chutya", "Chtiya", "Chutiyapa", "Chutiyae",
    "F*ck", "Fk", "Eff", "Fudge", "Frick",
    "Bc", "Bhench", "Bencho", "Bhencho", "Bchd",
    "Bsdk", "Bsdke", "Bhosdi", "Bhosdk", "Bhosdee",
    "Bish", "Betch", "Bich", "B*tch", "Biatch",
    "Beech", "Bicth", "Bicht", "Bih", "Bizzle",
    "Mc", "Maa ki", "Madar", "Mada", "Mdc",
    "Gandu", "Gndu", "Gaandoo", "Gando", "Gandoo",
    "Bwsr", "Bawasir", "Bawasee", "Bawa", "Bawas",
    "Bhadwe", "Bhdwa", "Bhadva", "Bhadu", "Bhd",
    "Chodo", "Chdu", "Chod", "Chd", "Cho",
    "maa ki chut", "behen ka lauda", "jhaant ke baal", "kutte ki bund", "muthhi",
    "chutiya", "behenchod", "maa ka loda", "bhenchod", "betichod",
    "gaand ka pilla", "jhantu", "asshole","aand", "aandu", "balatkar", "balatkari", "behen chod", "beti chod", "bhadva", "bhadve", "bhandve", "bhangi",
    "bhootni ke", "bhosad", "bhosadi ke", "boobe", "chakke", "chinaal", "chinki", "chod", "chodu", "chodu bhagat",
    "chooche", "choochi", "choope", "choot", "choot ke baal", "chootia", "chootiya", "chuche", "chuchi", "chudaap",
    "chudai khanaa", "chudam chudai", "chude", "chut", "chut ka chuha", "chut ka churan", "chut ka mail", "chut ke baal",
    "chut ke dhakkan", "chut maarli", "chutad", "chutadd", "chutan", "chutia", "chutiya", "gaand", "gaandfat",
    "gaandmasti", "gaandufad", "gandfattu", "gandu", "gashti", "gasti", "ghassa", "ghasti", "gucchi", "gucchu",
    "harami", "haramzade", "hawas", "hawas ke pujari", "hijda", "hijra", "jhant", "jhant chaatu", "jhant ka keeda",
    "jhant ke baal", "jhant ke pissu", "jhantu", "kamine", "kaminey", "kanjar", "kutta", "kutta kamina", "kutte ki aulad",
    "kutte ki jat", "kuttiya", "loda", "lodu", "lund", "lund choos", "lund ka bakkal", "lund khajoor", "lundtopi",
    "lundure", "maa ki chut", "maal", "madar chod", "madarchod", "madhavchod", "mooh mein le", "mutth", "mutthal",
    "najayaz", "najayaz aulaad", "najayaz paidaish", "paki", "pataka", "patakha", "raand", "randaap", "randi",
    "randi rona", "saala", "saala kutta", "saali kutti", "saali randi", "suar", "suar ke lund", "suar ki aulad",
    "tatte", "tatti", "teri maa ka bhosada", "teri maa ka boba chusu", "teri maa ki behenchod", "teri maa ki chut",
    "tharak", "tharki", "tu chuda", "jhat","bkl","dhoomchutad","moti","mota","saala","dalla"
]

var hindiSlur = false;

function findSlangWords(paragraph) {
  
  const words = paragraph.split(/\s+/);
  const dirtyPara = slurs.some(word => paragraph.toLowerCase().includes(word.toLowerCase()));
  if (dirtyPara){
    hindiSlur = true;
    paragraph = "----------Offensive----------"
  }
  return paragraph;
}


  setInterval(function() {
    const elementsToReplace = document.querySelectorAll('.yt-core-attributed-string--white-space-pre-wrap');
  console.log(".......................///////////////////......................")
  // console.log(elementsToReplace)

  elementsToReplace.forEach(element => {
    const lowerCaseText = element.innerText.toLowerCase();
    const text = findSlangWords(lowerCaseText);
    if (hindiSlur){
      element.innerHTML = text;
    }
    
    if (!hindiSlur){
      const inputData = {
        text: lowerCaseText // Replace "Your text here" with the text you want to classify
      };
      const url = 'http://localhost:8000/classify/'; // Replace with your actual endpoint URL
      
      fetch(url, {
    method: 'POST',
    mode: 'cors', // Important: include cors mode
    credentials: 'include', // Optional: include if you need to send cookies
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(inputData),
  })
  .then(response => response.json())
  .then(data => 
    
    {
      console.log(data.predictions[0].label)
      if (data.predictions[0].label === 'acceptable') {
        element.innerHTML = data.predictions[0].comment;
      }
      else {
        element.innerHTML = `-----------------------------${data.predictions[0].label}----------------------------------`}
    }
  )
  .catch(error => console.error('Error:', error));
  

    }
   

    // if (lowerCaseText.includes(lowerCaseKeyword)) {
    //   switch (obj.type) {      
    //     case '0':
    //       // Remove
    //       element.innerHTML = element.innerHTML.replace(new RegExp(obj.keyword, 'gi'), '');
    //       break;
    //     case '1':
    //       // Replace
    //       element.innerHTML = element.innerHTML.replace(new RegExp(obj.keyword, 'gi'), obj.replace);
    //       break;
    //     case '2':
    //       // Bluruuy
    //       // element.style.color = 'transparent';
    //       // element.style.textShadow = '0 0 8px rgba(0,0,0,0.5)';
    //       element.innerHTML = "-----------------------------Hello------------------------------------"
    //       break;
    //     default:
    //       break;
    //   }
    // }
  });
    
  }, 1000);
  

// chrome.storage.sync.get({
//     keywordsArray: []
//   }, function(items) {
//     replacePageWords(items.keywordsArray);
//   });

// function replacePageWords(keywordsArray){
//     //...
//     for (var i = 0; i < keywordsArray.length; i++) {
//       replaceeWord(keywordsArray[i]);
//     }
//   }
