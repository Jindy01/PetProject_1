"use strict";
//  TASKS
//  Доделать прибавление общей суммы товара
//  Приём ! Оптимизация кода !!!
//  Доделать функцию и массив !!

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

//   Глобальное рандомное число
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
  // Вызов рандомного числа
  globalRandomNumber();
  //    После сбора данных создаёт объект
  const objectForProductCard = {
    nameProduct: names[i],
    priceProbuct: prices[i],
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

function renderCart() {
  const basketStore = document.querySelector(".basket-store");

  let htmlBlock = "";

  basketForProductCard.forEach((product) => {
    if (!product || !product.nameProduct) {
      return;
    }
    htmlBlock = `<div id="product-ID"  class="product">
    <p>Товар:${product.nameProduct}</p>
    <p class="price" id="price">Цена:${product.priceProbuct}</p>
    <button onclick="deleteProductCard(this)"
    id="${pullRandomNumber[0]}">Удалить</button>
    </div>`;
  });

  basketStore.innerHTML += htmlBlock;
  costElementRender();
}

//  Удаления товара с корзины
function deleteProductCard(button) {
  const idS = button.getAttribute("id");
  let resultArr = basketForProductCard.filter((obj, index) => {
    if (obj.id == idS) {
      basketForProductCard.splice(index, 1);
    }
  });
  button.parentNode.remove();
  //  Костыль ! Убирает undefined
  costElementRender();
  costElementRender();
}
//  Выводит параметры в корзине
function getInformationInBasket() {
  let resultPrice = basketForProductCard.map((obj) => {
    let resultForSumm = parseFloat(obj.priceProbuct.replace("$", ""));
    return resultForSumm;
  });
  try {
    let result = resultPrice.reduce(
      (firstNum, secondNum) => firstNum + secondNum
    );
    // if (basketForProductCard.length >= 3) {
    //   result = (result/100) * 3;
    // }
    return result;
  } catch {
    return;
  }
}

function checkObj() {
  console.log(basketForProductCard);
}
//  Показывает цену и кол-во товаров
function costElementRender() {
  const costElement = document.getElementById("load-cost");
  let normalNumb = getInformationInBasket();
  if (costElement.textContent == "undefined") {
    costElement.textContent = `0`;
  } else {
    try {
      costElement.textContent = `${normalNumb.toFixed(2)}`;
    } catch {
      costElement.textContent = `0`;
    }
  }

  const quantityElement = document.getElementById("load-quantity");
  let renderQuantityElement = (quantityElement.textContent =
    basketForProductCard.length);
  if (basketForProductCard.length == 0) {
    quantityElement.textContent = "0";
  }

  const discountElement = document.getElementById("load-discount");
  let discount = getInformationInBasket();
  if (basketForProductCard.length < 2 && basketForProductCard.length >2) {
    discountElement.textContent = "0";
  } else if (basketForProductCard.length == 3) {
    discount = (discount/100) * 3;
  }
  // } else if (basketForProductCard.length >= 3) discount = (discount / 100) * 3;

  // else if (basketForProductCard.length >= 5) {
  //   discount = (discount / 100) * 5;
  // } else if (basketForProductCard.length < 3) {
  //   discountElement.textContent = "0";
  // }
  // try {
  //   discountElement.textContent = `${discount.toFixed(2)}`;
  //   if (discountElement.textContent == "NaN") {
  //     discountElement.textContent = "0";
  //   }
  // } catch {
  //   discountElement.textContent = "0";
  // }
}

//  Для поиска и удаления кнопки
// function deleteProductCard(productCardInfoAndBuying) {
//   console.log(productCardInfoAndBuying.id);
//   // console.log(getIdForButton);

//   if (productCardInfoAndBuying.id == getIdForButton) {
//     console.log("=");
//   }
// }

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
