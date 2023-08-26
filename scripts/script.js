"use strict";
//  Сделать удаление товара через id и булево выражение

function closed() {
  alert("В разработке");
}
//  Для перехода между страничками
function openPage(pageName) {
  let i, tabcontent, tabcontentAsort, tabcontentBasket, a;

  tabcontent = document.getElementsByClassName("scroll");
  for (i = 0; i < tabcontent.length; ++i) {
    tabcontent[i].style.display = "none";
  }

  tabcontentAsort = document.getElementsByClassName("scroll_asortiment");
  for (i = 0; i < tabcontentAsort.length; ++i) {
    tabcontentAsort[i].style.display = "none";
  }

  tabcontentBasket = document.getElementsByClassName("basket-container");
  for (i = 0; i < tabcontentBasket.length; ++i) {
    tabcontentBasket[i].style.display = "none";
  }

  a = document.getElementsByClassName("a");
  for (i = 0; i < a.length; ++i) {
    a[i].className = a[i].className.replace("active", "");
  }

  if (pageName === "shop-page") {
    document.getElementById("shop-chears").style.display = "flex";
    document.getElementById("shop-tables").style.display = "flex";
    document.getElementById("shop-couch").style.display = "flex";
    document.getElementById("shop-bed").style.display = "flex";
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
//  Для отоброжения всего при переходе в товары
function openFullPrice() {
  let i, priceContent;
  priceContent = document.getElementsByClassName("scroll_asortiment");
  for (i = 0; i < priceContent.length; ++i) {
    priceContent[i].style.display = "flex";
  }
}

const pullRandomNumber = [];

function globalRandomNumber() {
  let globalRandomNumber = Math.random();
  pullRandomNumber.unshift(globalRandomNumber);
  return pullRandomNumber;
}

//  Корзина
const basketForProductCard = [];
//  Сабирает данные по продуктовым карточкам
function productCardInfoAndBuying(i) {
  const productCards = document.querySelectorAll(".product-card");
  const names = Array.from(productCards).map((card) => {
    const nameElements = card.querySelector(".name-product");
    return nameElements.textContent;
  });

  const prices = Array.from(productCards).map((card) => {
    const priceElment = card.querySelector(".cost-product");
    return priceElment.textContent;
  });

  const buttons = Array.from(productCards).map((card) => {
    const buttonElement = card.querySelector(".product-button");
    return buttonElement.textContent;
  });
  // Вызов рандомного числа
  globalRandomNumber();
  //    После сбора данных создаёт объект
  const objectForProductCard = {
    nameProduct: names[i],
    priceProbuct: prices[i],
    idButton: buttons[i],
    delete: false,
    id: pullRandomNumber[0],
  };
//  Проверка на пустой обьект
  if (objectForProductCard.nameProduct == undefined) {
    return;
  }

  basketForProductCard.push(objectForProductCard);
  console.log(basketForProductCard);
  // Вызывается для отрисовки на странице
  renderCart();
  return objectForProductCard;
}

setTimeout(productCardInfoAndBuying, 100);

function deleteProductCard() {

}

function renderCart() {
  const basketStore = document.querySelector(".basket-store");
  console.log(basketStore);
  // let randomNumber = Math.random();

  let htmlBlock = "";

  basketForProductCard.forEach((product) => {
    if (!product || !product.nameProduct) {
      return;
    }
    htmlBlock += `<div class="product">
    <p>Товар:${product.nameProduct}</p>
    <p>Цена:${product.priceProbuct}</p>
    <button id="${pullRandomNumber[0]}">Удалить</button>
    </div>`;
  });

  basketStore.innerHTML = htmlBlock;
}

//  Проверка с удалением 
function checkArr() {
  basketForProductCard.pop();
  console.log(basketForProductCard);
}
checkArr();

// function deleteComponentInBasket() {
//   const component = document.getElementsByClassName('product');
//   const remove = document.getElementsByClassName('remove');

//   console.log(component);
//   console.log(remove);

// }

// document.addEventListener('DOMContentLoaded', function(){

//   if (basketForProductCard.length == 0) {
//     const basketStoreZero = document.getElementsByClassName("product-none");
//     basketStoreZero.style.display = 'none'
//   }
// })

// const searchShopPage = document.querySelectorAll("shop-couch");
// console.log(searchShopPage);

// function logCouch() {
//   const searchShopPage = document.querySelectorAll(".scroll_asortiment");
//   const shopPage = Array.from(searchShopPage).map((card) => {
//     const page = card.querySelector.
//   })
//   console.log(searchShopPage);
// }

// setTimeout(logCouch, 100);

// function priceProduct() {

//   const productCards = document.querySelectorAll(".product-card");
//   const prices = Array.from(productCards).map((card) => {
//     const priceElment = card.querySelector(".cost-product");
//     return priceElment.textContent;
//   });
//   console.log(prices);
// }
// setTimeout(priceProduct, 100);

// function nameProduct() {

//   const productCards = document.querySelectorAll(".product-card");
//   const names = Array.from(productCards).map((card) => {
//     const nameElements = card.querySelector(".name-product");
//     return nameElements.textContent;
//   });
//   console.log(names);
// }
// setTimeout(nameProduct, 100)

// function buyingProduct() {

//   const productButton = document.querySelectorAll(".product-card");
//   const buttons = Array.from(productButton).map((card) => {
//     const priceElment = card.querySelector(".product-button");
//     return priceElment.textContent;
//   });
//   console.log(buttons);
// }
// setTimeout(buyingProduct, 100)

// function getElementsText() {
//   try {
//     const testQuery = document.querySelectorAll(".product-card");
//     const resultSortTestQuery = testQuery.map((element) =>
//       element.querySelector(".cost-product")
//     );

//     console.log(testQuery);
//     console.log(resultSortTestQuery);
//   } catch {
//     console.log("Ошибка!");
//   }
// }
// setTimeout(getElementsText, 100);

// function testGetAllPriceList() {

//   const elements = document.getElementById('test-product-card');
//   const arrElemets = Array.from(elements);
//   for(let key of elements) {
//     console.log(key);
//   }
// }

// setTimeout(testGetAllPriceList, 1)

//  TASK додлать поис эллементов для пкупки товаров

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
