let cart = document.querySelector("#cart");
let cross = document.querySelectorAll("#cross");
let crossContainer = document.querySelector("#crossContainer");
let cartItemText = document.querySelector(".cartItemText");
let shoes = document.querySelector("#shoes");
let cartBlock = document.querySelector(".cartBlock");
let cartBlockContainer = document.querySelector(".container");
let buttonShop = document.querySelectorAll(".shop");
let total = document.querySelector("#total");

let itemCartTemplate = document.querySelector("[data-item-card]");
let itemCartContainer = document.querySelector("[data-items-container]");

let card = itemCartTemplate.content.cloneNode(true).children[0];

let header = card.querySelector("[data-header]");
let headerParagraph = card.querySelector("[data-header-paragraph]");
let footer = card.querySelector("[data-footer]");

const addItemToCart = (result) => {
  console.log(itemCartContainer);
  result.forEach((item) => {
    let itemCartTemplate = document.querySelector("[data-item-card]");
    let itemCartContainer = document.querySelector("[data-items-container]");

    let card = itemCartTemplate.content.cloneNode(true).children[0];

    let header = card.querySelector("[data-header]");
    let headerParagraph = card.querySelector("[data-header-paragraph]");
    let footer = card.querySelector("[data-footer]");
    header.textContent = item.name;
    footer.textContent = item.price;
    headerParagraph.innerHTML = "paragraph";
    header.appendChild(headerParagraph);
    itemCartContainer.appendChild(card);
  });
};

let div = document.createElement("div");

let totalCart = 0;
let cartArray = [];
let result = [];
let priceArray = [];

//Set attributes function
const setAttributes = (el, attrs) => {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
};
//Handele cart icon click
cart.addEventListener("click", () => {
  cartBlock.classList.remove("cartBlock");
  cartBlock.classList.toggle("activeCart");
  /* cartBlockContainer.appendChild(span); */
  //Calculatin the sum of cart items
  const totalPrice = result
    .map((item) => item.price)
    .reduce((a, b) => parseInt(a) + parseInt(b), 0);
  /*  span.innerHTML = `Total: ${totalPrice}`; */
});

const renderCartItem = (result) => {
  let { id, name, price } = result;
  /* let div = document.createElement("div");
  let inputsDiv = document.createElement("div");

  let nameParagrahp = document.createElement("p");
  let priceParagraph = document.createElement("p");
  let input = document.createElement("input");
  let button = document.createElement("button");
  let img = document.createElement("img");
  let span = document.createElement("span");

  setAttributes(button, { class: "delete-button" });
  div.setAttribute("class", "cart-item");
  input.setAttribute("value", "1");

  button.innerText = "Remove";

  div.appendChild(nameParagrahp);
  div.appendChild(priceParagraph);
  div.appendChild(img);
  div.appendChild(inputsDiv);
  inputsDiv.appendChild(input);
  inputsDiv.appendChild(button); */

  /* for (let i = 0; i < result.length; i++) {
    nameParagrahp.innerHTML = result[i].name;
    priceParagraph.innerHTML = `Price: ${result[i].price}$`;
    img.setAttribute("src", result[i].img);
    cartBlockContainer.appendChild(div);
  } */

  addItemToCart(result);

  /*  div.appendChild(nameParagrahp);
  let priceParagraph = document.createElement("p");

  cartBlockContainer.appendChild(div);

  renderCartItem(result); */
};
//Remove individual item in the cart
document.addEventListener("click", (e) => {
  if (e.target.getAttribute("class") == "delete-button") {
    e.target.parentElement.parentElement.remove();
  }
});
const updateCart = () => {
  div.remove();
};
//Function to remove item from cart
cross.forEach((item) => {
  item.addEventListener("click", (event) => {
    /* console.log("Click"); */
    event.target.parentElement.parentElement.remove();
    /* if (cartArray.length === 0) {
      closeCart();
    } */
    console.log(cartArray);
    /* cartBlock.classList.toggle("activeCart"); */
  });
});
/* shoes.addEventListener("click", () => {
  console.log("shoes");
  for (let i = 0; i < cartArray.length; i++) {
  
  }
}); */
document.addEventListener("click", (e) => {
  /* console.log(e); */
});
let con = document.querySelector(".container");

//close cart block
crossContainer.addEventListener("click", () => {
  closeCart();
  updateCart();
});

buttonShop.forEach((item) => {
  item.addEventListener("click", (e) => {
    let obj = JSON.parse(e.target.getAttribute("data-product"));
    let { id, name, price, img } = obj;

    let ids = result.map((item) => parseInt(item.id));
    console.log(ids.includes(parseInt(id)));
    if (result.length > 0 && ids.includes(parseInt(id))) {
      return false;
    } else {
      result.push(obj);
    }
    renderCartItem(result);
    /*  for (let i = 0; i < result.length; i++) {
      
      renderCartItem(result);
    } */
    // renderCartItem(result);
    /*   console.log(
      e.target.getAttribute("data-price"),
      e.target.getAttribute("data-id"),
      name
    );
 */
    updateCart(e);
  });
});
const closeCart = () => {
  cartBlock.classList.remove("activeCart");
  cartBlock.classList.add("cartBlock");
};
/* updateCart = (event) => {
  let target = event.target;

  switch (parseInt(target.getAttribute("data-id"))) {
    case 1:
      cartArray[0] = 1;
      break;
    case 2:
      cartArray[1] = 1;
      break;
    case 3:
      cartArray[2] = 1;
      break;
    case 4:
      cartArray[3] = 1;
      break;
    case 5:
      cartArray[4] = 1;
      break;
    case 6:
      cartArray[5] = 1;
      break;
    case 7:
      cartArray[6] = 1;
      break;
    case 8:
      cartArray[7] = 1;
      break;
    case 9:
      cartArray[8] = 1;
      break;
  }
  let cartArrayNew = cartArray.filter((item) => {
    return item !== "undefined";
  });
  totalCart++;

  document.querySelector("#cartPrice").innerHTML = cartArrayNew.length;
}; */
