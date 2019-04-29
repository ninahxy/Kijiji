
document.getElementById("signInButton").addEventListener("click", showPopup)
document.getElementById("popupCloseButton").addEventListener("click", hidePopup)


function showPopup() {
    // classList.add() adds the "is-active" class to the popup
    document.querySelector(".modal").classList.add("is-active")
}

function hidePopup() {
    document.querySelector(".modal").classList.remove("is-active")
}

const login = () => {

    // user = nina
    // password = 12345

    // 1. get person name from input box
    var name = document.getElementById("usernameBox").value
    var password = document.getElementById("passwordBox").value

    if (name == "nina" && password == "12345") {
        // 2. store name in local storage --> 
        // you will use this on next page
        localStorage.setItem("username", name)

        // 3. send the person to next page
        // this will automatically redirect the person to profilePage.html
        // same as doing <a href="profilePage.html"></a>
        window.location.href = "profilePage.html"
    }
    else if (name == "sunmi" && password == "abcd") {
        // 2. store name in local storage --> 
        // you will use this on next page
        localStorage.setItem("username", name)

        // 3. send the person to next page
        // this will automatically redirect the person to profilePage.html
        // same as doing <a href="profilePage.html"></a>
        window.location.href = "profilePage.html"
    }
    else {
        alert("sorry, wrong user name and password!")
    }
}
document.getElementById("loginButton").addEventListener("click", login) 

// -------- END LOGIN BUTTON --------


document.getElementById("signUpButton").addEventListener("click", ShowPopup)
document.getElementById("PopupCloseButton").addEventListener("click", HidePopup)

function ShowPopup() {
    // classList.add() adds the "is-active" class to the popup
    document.querySelector(".SignUp").classList.add("is-active")
}

function HidePopup() {
    document.querySelector(".SignUp").classList.remove("is-active")
}


// -------- END Signup BUTTON --------




// -------- START FILTER --------

// *** DOM REFERENCES ***********************************

const domProducts = document.getElementById('products');
const domFilters = document.getElementById('filters');
const domCategories = document.getElementById('categories');

// *** DATA ****************************************
const allProducts = [
    { id: 1001, name: `desk`, price: 20, img: `/selling/desk.jpg`, catId: 2001, purpose: `sel`}, 
    { id: 1002, name: `desk1`, price: 28, img: `/selling/desk1.jpg`, catId: 2001, purpose: `sel` },
    { id: 1003, name: `shoes`, price: 100, img: `/selling/shoes.jpg`, catId: 2007 , purpose: `sel` },
    { id: 1004, name: `table`, price: 600, img: `/selling/table.jpg`, catId: 2001, purpose: `sel` },

    { id: 1005, name: `sofa`, price: 100, img: `/sold/sofa.jpg`, catId: 2003, purpose: `sol` },
    { id: 1006, name: `bed`, price: 1030, img: `/sold/bed.jpg`, catId: 2004, purpose: `sol` },
    { id: 1007, name: `bed1`, price: 2000, img: `/sold/bed1.jpg`, catId: 2004, purpose: `sol` },
    { id: 1008, name: `bike`, price: 3020, img: `/sold/bike.jpg`, catId: 2006, purpose: `sol` },
    { id: 1009, name: `sofa1`, price: 1000, img: `/sold/sofa1.jpg`, catId: 2003, purpose: `sol` },
    { id: 1010, name: `sofa3`, price: 1000, img: `/sold/sofa3.jpg`, catId: 2003, purpose: `sol` },

    { id: 1011, name: `car seat`, price: 80, img: `/fav/car seat.jpg`, catId: 2005, purpose: `fav` },
    { id: 1012, name: `chair`, price: 70, img: `/fav/chair.jpg`, catId: 2008, purpose: `fav` },
    { id: 1013, name: `desk lamp`, price: 100, img: `/fav/desk lamp.jpg`, catId: 2002, purpose: `fav` },
    { id: 1014, name: `lamp`, price: 1000, img: `/fav/lamp.jpg`, catId: 2002, purpose: `fav` },
    { id: 1015, name: `shelf`, price: 50, img: `/fav/shelf.jpg`, catId: 2009, purpose: `fav` },
    { id: 1016, name: `shelf1`, price: 1000, img: `/fav/shelf1.jpg`, catId: 2009, purpose: `fav` },

];

const allCategories = [
    { id: 2001, name: `desk`, color: `rgb(163, 163, 225)` },
    { id: 2002, name: `lamp`, color: `rgb(208, 152, 128` },
    { id: 2003, name: `sofa`, color: `rgb(107, 206, 200)` },
    { id: 2004, name: `bed`, color: `rgb(173, 180, 95)` },
    { id: 2005, name: `baby`, color: `rgb(173, 180, 95)` },
    { id: 2006, name: `bike`, color: `rgb(173, 180, 95)` },
    { id: 2007, name: `shoes`, color: `rgb(173, 180, 95)` },
    { id: 2008, name: `chair`, color: `rgb(173, 180, 95)` },
    { id: 2009, name: `shelf`, color: `rgb(173, 180, 95)` },

  ];

  // *** FUNCTION ****************************************

  const getOptionsFromCategories = (cats) => {
    return cats.map(cat => `<li><a href="#" value="${cat.id}"> #${cat.name}</a></li>`).join('');
  };

  const formatProductForHTML = (prod) => {
    return `
      
    <section>
      <li class="product1">
        <a href="#"><img src="img/${ prod.img }" alt="${prod.name}" class="image is-200x150">
        <p>${prod.name}</p></a> 
        <div>$ ${prod.price} 
        <a href="#"><i class="fas fa-heart" ></i></a>
        <button>chat</button</div>
      </li>
    </section>
    `;
  };

  const printProductsArray = (prods) => {
    const productsHTML = prods.map(formatProductForHTML).join('');
    if (prods.length == 0) {
      domProducts.innerHTML = 'No matching products';
      return;
    }
    domProducts.innerHTML = productsHTML;
  };
  
  
  // *** EVENT LISTENER ****************************************
  // When one of the values in the filter form changes, let's filter and then reprint
  domFilters.addEventListener('click', event => {
    
    // 1. Start with the full list of products
    let filteredProducts = allProducts;
    
    
    // *** FILTERING: Reminder that filter() is inclusive! Meaning it fitlers in, not filters out
    
    // 2. If the category dropdown is anything other than "any", filter out anything that doesn't match
    if (domFilters.categories.value != "any") {
      filteredProducts = filteredProducts.filter(prod => prod.catId == domFilters.categories.value)
    }
    
    // 3. If the price is "over" or "under", filter accordingly
    if (domFilters.price.value == "over") {
      filteredProducts = filteredProducts.filter(prod => prod.price >= 100);
    }
    else if (domFilters.price.value == "under") {
      filteredProducts = filteredProducts.filter(prod => prod.price < 100);
    }
    
    // 4. Print whatever products we're left with by the end of this function (callback) handler
    printProductsArray(filteredProducts);
    
  });
  
  
  
  // ******************************************************************
  // *** APPLICATION START ********************************************
  
  // Add all categories to the dropdown
  domCategories.innerHTML += getOptionsFromCategories(allCategories);
  
  // Print the full list by default
  printProductsArray(allProducts);
  
  // ******************************************************************