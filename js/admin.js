let elUserName = document.querySelector(".username")
const userData = JSON.parse(window.localStorage.getItem("userData"))
elUserName.textContent = userData.username

function handleClickLogOutBtn() {
    let elConfirmLogOut = confirm("Do you want to log out!")
    if(elConfirmLogOut){
        location.pathname = "index.html"
        window.localStorage.clear()
    }
}
