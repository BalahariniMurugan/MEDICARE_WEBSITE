var answer = document.getElementById("answer");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;
var error = false;

button.addEventListener("click", function(){

  while(textbox.value != password && !error){
    if(entryCount < entryLimit){
      answer.innerHTML = "Wrong Password";
      entryCount++;
      textbox.value = "";
    } else{
      error = true;
    }
  }

  if(error){
    answer.innerHTML = "Out of entries";
  } else{
    answer.innerHTML = "Correct Password";
  }