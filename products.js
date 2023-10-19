const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];
//section 1
let sectionFirst = document.getElementsByClassName('products-section')[0];
let titleSectionFirst = document.createElement('h1');
titleSectionFirst.innerHTML = 'Frutas'
sectionFirst.appendChild(titleSectionFirst);
let mainSectionFirst = document.createElement('main');
sectionFirst.appendChild(mainSectionFirst);
mainSectionFirst.setAttribute('class','products-content fruits');
let uListFirst = document.createElement('ul');
mainSectionFirst.appendChild(uListFirst);

//section 2
let sectionSecond = document.getElementsByClassName('products-section')[1];
let titleSectionSecond = document.createElement('h1');
titleSectionSecond.innerHTML = 'Bebidas'
sectionSecond.appendChild(titleSectionSecond);
let mainSectionSecond = document.createElement('main');
sectionSecond.appendChild(mainSectionSecond);
mainSectionSecond.setAttribute('class','products-content drinks');
let uListSecond = document.createElement('ul');
mainSectionSecond.appendChild(uListSecond);

//section 3
let sectionThird = document.getElementsByClassName('products-section')[2];
let titleSectionThird = document.createElement('h1');
titleSectionThird.innerHTML = 'Higiene'
sectionThird.appendChild(titleSectionThird);
let mainSectionThird = document.createElement('main');
sectionThird.appendChild(mainSectionThird);
mainSectionThird.setAttribute('class','products-content hygiene');
let uListThird = document.createElement('ul');
mainSectionThird.appendChild(uListThird);

//função para criação das li e seus conteúdos e condições para suas respectivas categorias
function createProducts(products){
        //primeiro loop
    for(let i = 0; i < products.length; i++){
            let productCard = document.createElement('li'); 
      if(products[i].category == 'Frutas'){
            uListFirst.appendChild(productCard);
        }else if(products[i].category == 'Bebidas'){
            uListSecond.appendChild(productCard);
        }else if(products[i].category == 'Higiene'){
            uListThird.appendChild(productCard);
        }
          productCard.setAttribute('class','product');
          let productImg = document.createElement('img'); 
          products[i].image == undefined ? productImg.src = '/img/products/no-img.svg' : productImg.src = products[i].image; 
          productImg.setAttribute('class','product-img');
          productCard.appendChild(productImg);
          let productMain = document.createElement('main'); 
          productCard.appendChild(productMain);
          productMain.setAttribute('class','product-main');
          let productTitle = document.createElement('h1'); 
          productTitle.setAttribute('class','product-title');
          productTitle.innerText = `${products[i].title}`;
          productMain.appendChild(productTitle);
          let productCategory = document.createElement('h5'); 
          productCategory.setAttribute('class','product-category');
          productCategory.innerText = `${products[i].category}`;
          productMain.appendChild(productCategory);
          let productPrice = document.createElement('strong'); 
          productPrice.setAttribute('class','product-price');
          productPrice.innerText = `R$ ${products[i].price}`;
          productMain.appendChild(productPrice);  
    }  
}
createProducts(products);