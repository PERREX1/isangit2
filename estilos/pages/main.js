const burgerMenu = document.querySelector('.menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const orderContent = document.querySelector('.my-order-content');
const shoppingCartNumber = document.querySelector(
  '.navbar-shopping-cart__number'
);

//Deploys
const desktopMenu = document.querySelector('.desktop-menu');
const menuEmail = document.querySelector('.navbar-email');
const mobileMenu = document.querySelector('.mobile-menu');
const myOrder = document.querySelector('.order-detail');
const productDetailContainer = document.querySelector('.product-detail');
const productDetailContainerClose = document.querySelector(
  '.product-detail-close'
);
const productDetailCartBtn = document.querySelector(
  '.product-detail .add-to-cart-button'
);
//Media Query
const mediaQuery = window.matchMedia('(min-width: 640px)');

//EVENT LISTENERS
//Click event listener to toggle visibility of menus
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
cartIcon.addEventListener('click', toggleCartAside);
productDetailContainerClose.addEventListener(
  'click',
  hideProductDetailContainer
);
productDetailCartBtn.addEventListener('click', function (e) {
  let productIndex = e.target.getAttribute('index');
  let text = e.target.innerText;
  let productCard;
  for (pCard of productCards) {
    if (pCard.getAttribute('index') === productIndex) {
      productCard = pCard;
      break;
    }
  }
  let product = productList[productIndex];
  let productCartImg = productCard.querySelector('.product-info figure img');
  if (text === 'Add to cart') {
    setProductDetailBtnStyle(text === 'Add to cart');
    productCartImg.setAttribute('src', './icons/bt_added_to_cart.svg');
    addProductOrder(product, cartList.length);
  } else {
    setProductDetailBtnStyle(text === 'Add to cart');
    productCartImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    removeProductOrder(product, cartList.indexOf(product));
  }
});
//Listener to check mediaQuery
menuDisplay(mediaQuery); //Initial check
mediaQuery.addListener(menuDisplay); // Attach listener function on state changes

//VARIABLES

//Products
//Product DB List
let productList = [];
//Order
let cartList = [];

//INITIALIZE PAGE
setProductList(productList);
renderProducts(productList);
//Order content
renderOrderContent(cartList);

//Product Cards
const productCards = Array.from(document.querySelectorAll('.product-card'));
//Order deploy
const orderTotal = orderContent.querySelector('.order p:nth-of-type(2)');
const orderProducts = document.querySelector('.order-products-container');

//Hide menus on outside clicks
document.onclick = function (e) {
  if (!mobileMenu.contains(e.target) && !burgerMenu.contains(e.target))
    mobileMenu.classList.add('inactive');

  if (!desktopMenu.contains(e.target) && !menuEmail.contains(e.target))
    desktopMenu.classList.add('inactive');

  if (
    !myOrder.contains(e.target) &&
    !cartIcon.contains(e.target) &&
    !e.target.classList.contains('close-icon')
  )
    myOrder.classList.add('inactive');

  let flag = false;
  for (pCard of productCards) {
    if (
      pCard.contains(e.target) &
        (e.target.getAttribute('src') != './icons/bt_add_to_cart.svg') &&
      e.target.getAttribute('src') != './icons/bt_added_to_cart.svg'
    ) {
      flag = true;
      break;
    }
  }
  if (
    e.target.getAttribute('src') === './icons/bt_add_to_cart.svg' ||
    e.target.getAttribute('src') === './icons/bt_added_to_cart.svg'
  ) {
    productDetailContainer.classList.add('inactive');
  }
  if (!productDetailContainer.contains(e.target) && !flag)
    productDetailContainer.classList.add('inactive');
};
//FUNCTIONS
//Toggle menus on click
function toggleDesktopMenu() {
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle('inactive');
}

function toggleCartAside() {
  myOrder.classList.toggle('inactive');
}
function hideProductDetailContainer() {
  productDetailContainer.classList.add('inactive');
}
//Set product List
function setProductList(arr) {
  //'Adidas tenis Forum Buckle Low "White" de adidas x Bad Bunny
  arr.push({
    name: 'Adidas tenis ',
    price: 160,
    image:
      'https://i.blogs.es/ffbdca/dragon-ball-z-asi-habria-terminado-el-anime-si-goku-fuera-mas-inteligente-un-final-realista-que-demuestra-que-la-fuerza-bruta-no-lo-es-todo/450_1000.jpeg',
    description:
      'tenis de color blanco',
  });
  //Infused Gel
  arr.push({
    name: 'Infused Gel',
    price: 70,
    image:
      'https://depor.com/resizer/-ff-6d9vg7CILcQh-WvejY7_3lQ=/1200x1200/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/6FUBT6XQXNHHNFOMCHIT7I34NA.jpg',
    description:
      'Fire up the style with this handcrafted version of the Air Jordan 1 Mid. Its "inside-out"-inspired construction, including unique layers and exposed foam details, elevates the style of this timeless garment from Jordan Brand. Details like decorative stitching on the Swoosh add coveted appeal, while unexpected shading, the rich mix of materials and distressed aesthetics in the midsole give this release a handcrafted finish.',
  });
  //Earrings
  arr.push({
    name: 'Earrings',
    price: 70,
    image:
      'https://images.pexels.com/photos/2849743/pexels-photo-2849743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Fire up the style with this handcrafted version of the Air Jordan 1 Mid. Its "inside-out"-inspired construction, including unique layers and exposed foam details, elevates the style of this timeless garment from Jordan Brand. Details like decorative stitching on the Swoosh add coveted appeal, while unexpected shading, the rich mix of materials and distressed aesthetics in the midsole give this release a handcrafted finish.',
  });
  //Air Jordan 1 Mid SE Craft
  arr.push({
    name: 'Air Jordan 1 Mid SE Craft',
    price: 135,
    image:
      'img/bleach-anime.jpg',
    description:
      'Fire up the style with this handcrafted version of the Air Jordan 1 Mid. Its "inside-out"-inspired construction, including unique layers and exposed foam details, elevates the style of this timeless garment from Jordan Brand. Details like decorative stitching on the Swoosh add coveted appeal, while unexpected shading, the rich mix of materials and distressed aesthetics in the midsole give this release a handcrafted finish.',
  });
  // Milk
  arr.push({
    name: 'Milk',
    price: 5,
    image:
      'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Fire up the style with this handcrafted version of the Air Jordan 1 Mid. Its "inside-out"-inspired construction, including unique layers and exposed foam details, elevates the style of this timeless garment from Jordan Brand. Details like decorative stitching on the Swoosh add coveted appeal, while unexpected shading, the rich mix of materials and distressed aesthetics in the midsole give this release a handcrafted finish.',
  });
  arr.push({
    name: 'Ice Cream',
    price: 14.7,
    image:
      'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Fire up the style with this handcrafted version of the Air Jordan 1 Mid. Its "inside-out"-inspired construction, including unique layers and exposed foam details, elevates the style of this timeless garment from Jordan Brand. Details like decorative stitching on the Swoosh add coveted appeal, while unexpected shading, the rich mix of materials and distressed aesthetics in the midsole give this release a handcrafted finish.',
  });
  //Adidas Tenis ADI2000
  arr.push({
    name: 'Camera',
    price: 156.99,
    image:
      'https://images.pexels.com/photos/3907507/pexels-photo-3907507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'Show your rebellious side in the adi2000 shoes, inspired by the bold era of the early 2000s. With skate DNA and a versatile color palette, these adidas shoes were designed with your unique style in mind. An updated 3-Stripes design adds a playful touch, while the leather upper and rubber outsole ensure comfort.',
  });
  //Pineapple
  arr.push({
    name: 'Piña',
    price: 1000.0,
    image:
      'https://images.pexels.com/photos/4195527/pexels-photo-4195527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:
      'la piña dulce para la niña .',
  });
  //Cupcake
  arr.push({
    name: 'Cupcake',
    price: 1000.0,
    image:
      'https://images.pexels.com/photos/1026123/pexels-photo-1026123.jpeg?auto=compress&cs=tinysrgb&w=1600',
    description:
      'Simple and clean, not overloaded. We recreate a classic, timeless sneaker with this tribute to the pros of the 90s and the streetwear that defined a generation of basketball. Made for the player who knows the authenticity and origin of the New Balance 550. EVA cushioning. The 550s streamlined, low-top silhouette offers a clean take on the rugged designs of the late 80s, while the reliable suede and leather upper construction is a classic look for any era.',
  });
  //New Balance 550 - BeigeGreen
  arr.push({
    name: 'New Balance 550 - BeigeGreen',
    price: 100.0,
    image:
      'https://media.revistagq.com/photos/619389b5fc5992de454ecb76/1:1/w_1079,h_1079,c_limit/245641983_888969852012096_2359717687648261478_n.jpg',
    description:
      'Simple and clean, not overloaded. We recreate a classic, timeless sneaker with this tribute to the pros of the 90s and the streetwear that defined a generation of basketball. Made for the player who knows the authenticity and origin of the New Balance 550. EVA cushioning. The 550s streamlined, low-top silhouette offers a clean take on the rugged designs of the late 80s, while the reliable suede and leather upper construction is a classic look for any era.',
  });
  arr.push({
    name: 'dragon ball',
    price: 100.0,
    image:
      'img/dragon.jpg',
    description:
      'la pelicula de dragon ball',
  });
  arr.push({
    name: 'dragon ball',
    price: 100.0,
    image:
      'https://i.blogs.es/67fd3e/dragon-ball-este-es-el-diseno-original-de-goku-adulto-que-nunca-vimos-en-el-anime/840_560.jpeg',
    description:
      'la pelicula de dragon ball',
  });
  arr.push({
    name: 'dragon ball',
    price: 100.0,
    image:
      'https://pics.filmaffinity.com/Dragon_Ball_Z_Vuelven_Son_Goku_y_sus_amigos-602299142-large.jpg',
    description:
      'la pelicula de dragon ball',
  });
}
//Render products on page
function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.setAttribute('index', arr.indexOf(product));

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productInfoDiv = document.createElement('div');
    const productPrice = document.createElement('p');
    const productName = document.createElement('p');

    productPrice.innerText = '$' + product.price.toFixed(2);
    productName.innerText = product.name;
    productInfoDiv.append(productPrice, productName);

    const productInfoFigure = document.createElement('figure');
    const productCardIcon = document.createElement('img');
    productCardIcon.addEventListener('click', changeCartList);
    productCardIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
    productInfoFigure.appendChild(productCardIcon);
    productCardIcon.setAttribute('index', arr.indexOf(product));

    productInfo.append(productInfoDiv, productInfoFigure);
    productCard.append(productImg, productInfo);
    productCard.addEventListener('click', (e) => {
      openProductDetail(e);
    });
    cardsContainer.appendChild(productCard);
    //Differences between append and appendChild on:
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/append
  }
}
//Open product Details
function openProductDetail(e) {
  let srcTarget = e.target.getAttribute('src');
  if (
    srcTarget === './icons/bt_add_to_cart.svg' ||
    srcTarget === './icons/bt_added_to_cart.svg'
  ) {
    return;
  }
  let productSelected;
  let index;
  for (pCard of productCards) {
    if (pCard.contains(e.target)) {
      index = pCard.getAttribute('index');
      productSelected = productList[index];
      break;
    }
  }

  let imgs = productDetailContainer.getElementsByTagName('img');
  const productImg = imgs[1];
  productImg.setAttribute('src', productSelected.image);

  const productPrice = productDetailContainer.querySelector('p:nth-of-type(1)');
  productPrice.innerText = '$' + productSelected.price.toFixed(2);

  const productName = productDetailContainer.querySelector('p:nth-of-type(2)');
  productName.innerText = productSelected.name;

  const productDesc = productDetailContainer.querySelector('p:nth-of-type(3)');
  productDesc.innerText = productSelected.description;

  let addedToCart = cartList.some((element) => {
    if (element.name === productSelected.name) {
      return true;
    }
    return false;
  });
  setProductDetailBtnStyle(addedToCart);
  productDetailCartBtn.setAttribute('index', index);

  productDetailContainer.classList.remove('inactive');
}
function setProductDetailBtnStyle(flag) {
  let img = productDetailCartBtn.querySelector('img');
  if (flag) {
    img.setAttribute('src', './icons/bt_added_to_cart.svg');
    productDetailCartBtn.innerText = '';
    productDetailCartBtn.append(img, 'Added to cart');
    productDetailCartBtn.style.background = '#ffffff';
    productDetailCartBtn.style.color = '#acd9b2';
    productDetailCartBtn.style.border = ' solid 1px #acd9b2';
  } else {
    img.setAttribute('src', './icons/bt_add_to_cart.svg');
    productDetailCartBtn.innerText = '';
    productDetailCartBtn.append(img, 'Add to cart');
    productDetailCartBtn.style = '';
  }
}
//Change cartlist on product cart icon click
function changeCartList() {
  let iconImage = this;
  imageSrc = iconImage.getAttribute('src');
  let index = this.getAttribute('index');

  let product = productList[index];
  if (imageSrc !== './icons/bt_added_to_cart.svg') {
    iconImage.setAttribute('src', './icons/bt_added_to_cart.svg');
    addProductOrder(product, cartList.length);
  } else {
    removeProductOrder(product, cartList.indexOf(product));
  }
}
//My order
function renderOrderContent(arr) {
  let sum = 0.0;
  for (product of arr) {
    const shoppingProduct = document.createElement('div');
    shoppingProduct.classList.add('shopping-cart');
    shoppingProduct.setAttribute('index', arr.indexOf(product));

    const shoppingProductFig = document.createElement('figure');
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productName = document.createElement('p');
    const productPrice = document.createElement('p');

    productName.innerText = product.name;
    productPrice.innerText = '$' + product.price.toFixed(2);
    shoppingProductFig.append(productName, productPrice);

    const closeIcon = document.createElement('img');
    closeIcon.classList.add('close-icon');
    closeIcon.setAttribute('src', './icons/icon_close.png');
    closeIcon.setAttribute('index', arr.indexOf(product));

    shoppingProduct.append(
      shoppingProductFig,
      productName,
      productPrice,
      closeIcon
    );
    sum += product.price;
    shoppingProduct.addEventListener('click', function (e) {
      let ix = e.target.getAttribute('index');
      removeProductOrder(cartList[ix], ix);
    });
    orderProducts.append(shoppingProduct);
  }
  const order = document.createElement('div');
  order.classList.add('order');
  const totalP = document.createElement('p');
  const totalSpan = document.createElement('span');
  totalSpan.innerText = 'Total';
  totalP.append(totalSpan);

  const totalN = document.createElement('p');
  totalN.innerText = sum;

  order.append(totalP, totalN);
  const aCheckout = document.createElement('a');
  aCheckout.setAttribute('href', 'clase9.html');
  const checkoutBtn = document.createElement('button');
  checkoutBtn.classList.add('primary-button');
  checkoutBtn.innerText = 'Checkout';
  aCheckout.append(checkoutBtn);
  shoppingCartNumber.innerText = arr.length;
  orderContent.append(order, aCheckout);
}
function addProductOrder(product, index) {
  cartList.push(product);
  const shoppingProduct = document.createElement('div');
  shoppingProduct.classList.add('shopping-cart');
  shoppingProduct.setAttribute('index', index);

  const shoppingProductFig = document.createElement('figure');
  const productImg = document.createElement('img');
  productImg.setAttribute('src', product.image);
  shoppingProductFig.append(productImg);

  const productName = document.createElement('p');
  const productPrice = document.createElement('p');

  productName.innerText = product.name;
  productPrice.innerText = '$' + product.price;
  shoppingProduct.append(productName, productPrice);

  const closeIcon = document.createElement('img');
  closeIcon.classList.add('close-icon');
  closeIcon.setAttribute('src', './icons/icon_close.png');
  closeIcon.setAttribute('index', index);

  shoppingProduct.append(
    shoppingProductFig,
    productName,
    productPrice,
    closeIcon
  );
  shoppingProduct.addEventListener('click', function (e) {
    let ix = e.target.getAttribute('index');
    removeProductOrder(cartList[ix], ix);
  });
  orderProducts.append(shoppingProduct);
  let curr = parseFloat(orderTotal.innerText.replace('$', ''));
  orderTotal.innerText = '$' + (curr + product.price).toFixed(2);
  shoppingCartNumber.innerText = cartList.length;
}
function removeProductOrder(product, index) {
  let orderProductList = document.querySelectorAll('.shopping-cart');
  orderProductList = Array.from(orderProductList);
  let productToRemove;
  let i = 0;
  for (p of orderProductList) {
    i++;
    console.log(p);
    if (index == p.getAttribute('index')) {
      productToRemove = p;
      break;
    }
  }
  orderProducts.removeChild(productToRemove);
  let curr = parseFloat(orderTotal.innerText.replace('$', ''));
  orderTotal.innerText = '$' + (curr - product.price).toFixed(2);

  //Updates index for the other product after the removed one
  for (i; i < orderProductList.length; i++) {
    orderProductList[i].setAttribute('index', i - 1);
    orderProductList[i]
      .querySelector('.close-icon')
      .setAttribute('index', i - 1);
  }

  let availableProductsList = document.querySelectorAll(
    '.product-info figure img'
  );
  availableProductsList = Array.from(availableProductsList);
  for (p of availableProductsList) {
    let ix = p.getAttribute('index');
    if (productList[ix] === product) {
      p.setAttribute('src', './icons/bt_add_to_cart.svg');
    }
  }
  console.log(index);
  cartList.splice(index, 1);
  shoppingCartNumber.innerText = cartList.length;
}

//Media querie to display menu
function menuDisplay(mediaQuery) {
  if (mediaQuery.matches) mobileMenu.classList.add('inactive');
  else desktopMenu.classList.add('inactive');
}