let elLoginForm = document.querySelector(".login-form")

elLoginForm.addEventListener("submit", (evt) => {
    evt.preventDefault();
    let regex = /[1-9]/
    const userData = {
        username:evt.target.username.value,
        password:evt.target.password.value
    }
    if(regex.test(userData.password)){
        if(userData.username == "nurillo" && userData.password == "123"){
            window.localStorage.setItem("userData", JSON.stringify(userData))
            setTimeout(() => {
                location.pathname = "./admin.html"
            },1000)
        }
        else{
            alert("Failed!")
        }
    }
    else{
        alert("Password includes only numbers!")
    }

})