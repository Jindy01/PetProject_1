"use strict";

function closed() {
  alert("В разработке");
}

//  Для перехода между страничками
function openPage(pageName) {
  let i, tabcontent, tabcontentAsort, a;

  tabcontent = document.getElementsByClassName('scroll')
  for (i = 0; i < tabcontent.length; ++i) {
    tabcontent[i].style.display = "none";
  }
  
  tabcontentAsort = document.getElementsByClassName('scroll_asortiment')
  for (i = 0; i < tabcontentAsort.length; ++i) {
    tabcontentAsort[i].style.display = "none";
  }

  a = document.getElementsByClassName("a");
  for (i = 0; i < a.length; ++i) {
    a[i].className = a[i].className.replace("active", "");
  }

  document.getElementById(pageName).style.display = "flex";
}

function openPageAssortiment(pageName) {
  let i, tabcontentAsort, a;

  tabcontentAsort = document.getElementsByClassName('scroll_asortiment')
  for (i = 0; i < tabcontentAsort.length; ++i) {
    tabcontentAsort[i].style.display = "none";
  }

  a = document.getElementsByClassName("a");
  for (i = 0; i < a.length; ++i) {
    a[i].className = a[i].className.replace("active", "");
  }

  document.getElementById(pageName).style.display = "flex";
}
