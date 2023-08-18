"use strict";

console.log('Подключено');

function closed() {
  alert("В разработке");
}

function openPage(pageName) {
  let i, tabcontent, buttons;

  for (i = 0; i < tabcontent.length; ++i) {
    tabcontent[i].style.display = "none";
  }

  buttons = document.getElementsByClassName("buttons");
  for (i = 0; i < buttons.length; ++i) {
    buttons[i].className = buttons[i].className.replace("active", "");
  }

  document.getElementById(pageName).style.display = "block";
  alert('оТРАБОТАНО')
}
