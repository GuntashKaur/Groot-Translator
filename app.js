var btnTranslate = document.querySelector("#btn");
var  txtInput = document.querySelector("#textarea");
var outputDiv = document.querySelector("#textarea2");


function getTranslationURL(test){
    return serverURL =  "https://api.funtranslations.com/translate/groot.json" + "?" + "text=" + test;
}

function errorHandler(error){
    console.log("error occured", error);
    alert("something worng with server! try again after some time")
}

  btnTranslate.addEventListener("click", function clickEventHandler()
  {
    var inputText = txtInput.value; 
    
    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;
    })
    .catch(errorHandler)
  });