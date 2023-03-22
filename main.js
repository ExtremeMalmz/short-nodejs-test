function sendToTxt(){
    //you have to use value for inputs
    var userInput =  document.getElementById("theText").value;
    localStorage.setItem("userInputText", userInput);
    
    //print this out
    //var getTheUserInput = localStorage.getItem("userInputText");
    //console.log(getTheUserInput);
}