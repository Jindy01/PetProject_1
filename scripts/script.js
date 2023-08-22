"use strict";

function closed() {
  alert("В разработке");
}
//  Для перехода между страничками
function openPage(pageName) {
  let i, tabcontent, tabcontentAsort, a;

  tabcontent = document.getElementsByClassName("scroll");
  for (i = 0; i < tabcontent.length; ++i) {
    tabcontent[i].style.display = "none";
  }

  tabcontentAsort = document.getElementsByClassName("scroll_asortiment");
  for (i = 0; i < tabcontentAsort.length; ++i) {
    tabcontentAsort[i].style.display = "none";
  }

  a = document.getElementsByClassName("a");
  for (i = 0; i < a.length; ++i) {
    a[i].className = a[i].className.replace("active", "");
  }

  document.getElementById(pageName).style.display = "flex";
}
//  Для перехода между товарами
function openPageAssortiment(pageName) {
  let i, tabcontentAsort, a;

  tabcontentAsort = document.getElementsByClassName("scroll_asortiment");
  for (i = 0; i < tabcontentAsort.length; ++i) {
    tabcontentAsort[i].style.display = "none";
  }

  a = document.getElementsByClassName("a");
  for (i = 0; i < a.length; ++i) {
    a[i].className = a[i].className.replace("active", "");
  }

  document.getElementById(pageName).style.display = "flex";
}

function openFullPrice() {
  let i, priceContent;
  priceContent = document.getElementsByClassName("scroll_asortiment");
  for (i = 0; i < priceContent.length; ++i) {
    priceContent[i].style.display = "flex";
  }
}

// Вывод имени товаров их стоимости и названия
const productArr = document.getElementsByClassName("product-card");
const productArrName = document.getElementsByClassName("name-product");

console.log(productArr);
console.log(productArrName);

const productCost = document.getElementsByClassName("cost-product");
console.log(productCost.innerText);

const productCostArray = Array.from(productCost).map(
  (elment) => elment.innerText
);

console.log(productCostArray);



function getElemet() {

  const $elem = document.getElementById("test-text");
  const text = $elem.outerText;
  console.log(text);

}
setTimeout(getElemet, 1)

function getFullElements() {

  const $elem = document.querySelectorAll("test-product-card");
  const arrElem = Array.from($elem)
  console.log(arrElem);
  const text = $elem.innerHTML;


}
setTimeout(getFullElements, 1);
 


// for (let costElement of productCostArr) {
//   console.log(costElement);
//   const costArr = []
//   const costText = costElement.innerHTML;
//   costArr.push(costText);
// }

// for (let costElement in productCostArr) {
//   console.log(costElement);
//   const costArr = []
//   const costText = costElement.innerHTML;
//   costArr.push(costText);
// }

// for(let productCard of productArr) {
//   const nameProductParagraph = productCard.getElementsByClassName('name-product');
//   const nameProduct = nameProductParagraph.textContent;
//   console.log(nameProduct);
// }

// function getProductData() {

//   for(let productCard of allDataInProductCard) {
//     const nameProduct = productCard.querySelector('p').textContent;
//     console.log(nameProduct);
//   }

// }

// getProductData(productArrName);
