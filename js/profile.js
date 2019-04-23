const name = localStorage.getItem("username")
document.getElementById("greeting").innerHTML = "Welcome " + name + " " + "!";

const allProducts = [
    { id: 1001, name: `Computer`, price: 2000, img: `comp.png`, catId: 2001, purpose: `sel`}, 
    { id: 1002, name: `Notebook`, price: 20, img: `notebook.png`, catId: 2003, purpose: `fav` },
    { id: 1003, name: `Mouse`, price: 40, img: `mouse.png`, catId: 2001, purpose: `fav` },
    { id: 1004, name: `Laptop`, price: 3000, img: `laptop.png`, catId: 2001, purpose: `sol` },
];

// const solAr = [1001, 1003];
// const favAr = [1001, 1003];
// const selAr = [1004, 1003];



const printOneProduct = (prod) => {
    return  `<div class="product1">
        <a href="#">
            <img src="img/desk.JPG" alt="desk">
            <p>Herman Miller Mirra Office Chair</p>
        </a>
    </div>`;
};


const elProducts = document.getElementById('products');
const filterTabs = document.getElementById('tabs');

const printList = () => {
    if (filterTabs.filter.value == 'sel')
        elProducts.innerHTML = allProducts.filter(prod => prod.purpose == `sel`).map(printOneProduct);
    else if (filterTabs.filter.value == 'fav')
        elProducts.innerHTML = allProducts.filter(prod => prod.purpose == `fav`).map(printOneProduct);
     else if (filterTabs.filter.value == 'sol')
        elProducts.innerHTML = allProducts.filter(prod => prod.purpose == `sol`).map(printOneProduct);
}

printList();
filterTabs.addEventListener('change', printList)
