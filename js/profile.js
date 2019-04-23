const name = localStorage.getItem("username")
document.getElementById("greeting").innerHTML = "Welcome " + name + " " + "!";

const allProducts = [
    { id: 1001, name: `desk`, price: 200, img: `/selling/desk.jpg`, catId: 2001, purpose: `sel`}, 
    { id: 1002, name: `desk1`, price: 208, img: `/selling/desk1.jpg`, catId: 2001, purpose: `sel` },
    { id: 1003, name: `shoes`, price: 100, img: `/selling/shoes.jpg`, catId: 2001, purpose: `sel` },
    { id: 1004, name: `table`, price: 1000, img: `/selling/table.jpg`, catId: 2001, purpose: `sel` },

    { id: 2005, name: `sofa`, price: 1000, img: `/sold/sofa.JPG`, catId: 2002, purpose: `sol` },
    { id: 2006, name: `bed`, price: 1030, img: `/sold/bed.jpg`, catId: 2002, purpose: `sol` },
    { id: 2007, name: `bed1`, price: 2000, img: `/sold/bed1.jpg`, catId: 2002, purpose: `sol` },
    { id: 2008, name: `bike`, price: 3020, img: `/sold/bike.jpg`, catId: 2002, purpose: `sol` },
    { id: 2009, name: `sofa1`, price: 1000, img: `/sold/sofa1.jpg`, catId: 2002, purpose: `sol` },
    { id: 2010, name: `sofa3`, price: 1000, img: `/sold/sofa3.JPG`, catId: 2002, purpose: `sol` },

    { id: 3010, name: `car seat`, price: 1000, img: `/fav/car seat.jpg`, catId: 2003, purpose: `fav` },
    { id: 3010, name: `chair`, price: 1000, img: `/fav/chair.jpg`, catId: 2003, purpose: `fav` },
    { id: 3010, name: `desk lamp`, price: 1000, img: `/fav/desk lamp.jpg`, catId: 2003, purpose: `fav` },
    { id: 3010, name: `lamp`, price: 1000, img: `/fav/lamp.jpg`, catId: 2003, purpose: `fav` },
    { id: 3010, name: `shelf`, price: 1000, img: `/fav/shelf.jpg`, catId: 2003, purpose: `fav` },
    { id: 3010, name: `shelf1`, price: 1000, img: `/fav/shelf1.jpg`, catId: 2003, purpose: `fav` },

];

// const solAr = [1001, 1003];
// const favAr = [1001, 1003];
// const selAr = [1004, 1003];



const printOneProduct = (prod) => {
    return  `
    
    <div class="product1">
        <a href="#">
            <img src="img/${ prod.img }" alt="${prod.name}">
            <p>${prod.name}</p>
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
