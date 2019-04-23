
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