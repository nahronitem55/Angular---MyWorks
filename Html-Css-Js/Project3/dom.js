document.getElementById("Text1").innerHTML = "Dom  test text1";
document.getElementById("h3").innerHTML = "Dom  test h3!!!";

var Text2 = document.getElementById("Text2").innerHTML;
var Text3 = document.getElementById("Text3").innerHTML;
Text2.innerHTML = Text3.innerHTML;

var listAll = document.getElementsByTagName("ul");
var list = listAll[0];

allElements = list.getElementsByTagName("li");

for (i = 0; i < listAll.length; i++) {
  console.log(listAll[i]);
}

var textElements = document.getElementsByClassName("text");

alert(textElements[1].innerHTML);
alert(textElements.length);

var queryElements = document.querySelectorAll("p.text");
alert(queryElements.length);

var nameElements = document.getElementsByName("userName");
alert(nameElements.length);
alert(nameElements[0].value);

var orhan = document
  .getElementsById("orhan")
  .addEventListener("click", fillTextColor);

function fillTextColor() {
  document.getElementById("div1").style.color = "red";
  var names = document.getElementsByName("hhh");
  names[0].value = "Mehmet";
}
