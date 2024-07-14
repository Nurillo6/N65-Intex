let elUserName = document.querySelector(".username")
let elNavBarList = document.querySelector(".list")
let elModalWrapper = document.querySelector(".modal-wrapper")

let navbarItem1 = document.querySelector(".navbar-item1")
let navbarItem2 = document.querySelector(".navbar-item2")

let elTableBody = document.querySelector(".table-body")

const userData = JSON.parse(window.localStorage.getItem("userData"))
elUserName.textContent = userData.username

let poolProducts = JSON.parse(window.localStorage.getItem("products")) || []

function handleClickLogOutBtn() {
    let elConfirmLogOut = confirm("Do you want to log out!")
    if(elConfirmLogOut){
        location.pathname = "index.html"
        window.localStorage.clear()
    }
}

elNavBarList.addEventListener("click", function(e){
    if(e.target.matches(".navbar-item1")){
        e.target.className = "navbar-item1 font-bold text-[35px] leading-[40px]  pb-[8px] text-[#009398] border-b-[3px] border-[#009398]"
        e.target.nextElementSibling.className = "navbar-item2 font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px]"
        renderProducts(poolProducts,elTableBody, "0")
    }
    else if(e.target.matches(".navbar-item2")){
        e.target.previousElementSibling.className = "navbar-item1 font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px]"
        e.target.className = "navbar-item2 font-bold text-[35px] leading-[40px]  pb-[8px] text-[#009398] border-b-[3px] border-[#009398]"
        renderProducts(poolProducts,elTableBody, "1")
    }
})

// Render Products start
function renderProducts(arr, list , id){
    list.innerHTML = null
    arr.filter(item => {
        if(item.categoryId == id){
            let elTR = document.createElement("tr")
            elTR.className = "bg-white"
            elTR.innerHTML = `
                      <td class="py-[14px] text-center rounded-tl-[30px] rounded-bl-[30px]">
                                    <img class="mx-auto" src=${item.imgUrl} alt="Pool img" width="110" height="41">
                                </td>
                                <td class="py-[14px] flex flex-col">
                                    <div class="relative w-[83px]">
                                        <span class="text-[12px] leading-[13px] text-[#A6A6A6]">${item.oldPrice} сум</span>
                                        <img class="absolute top-0 bottom-0 right-0 left-0 m-auto" src="./images/Admin/line.svg" alt="Line" width="100%">
                                    </div>
                                    <span class="font-bold text-[16px] leading-[17px]">${item.newPrice} сум </span>
                                </td>
                                <td class="py-[14px] text-[20px]">${item.count}</td>
                                <td class="py-[14px] text-[20px]">
                                    ${item.frame == "0" ? "Металлический" : ""}
                                    ${item.frame == "1" ? "Прямоугольная" : ""}
                                    ${item.frame == "2" ? "Рамка призмы" : ""}
                                </td>
                                <td class="py-[14px] space-x-[18px  ] rounded-tr-[30px] rounded-br-[30px]">
                                    <button>
                                        <img src="./images/Admin/update-icon.svg" alt="Update icon" width="22" height="22">
                                    </button>
                                    <button>
                                        <img src="./images/Admin/delete-icon.svg" alt="Delete icon" width="22" height="22">
                                    </button>
                                </td>
            `
            list.appendChild(elTR)
        }
    })
} 
renderProducts(poolProducts,elTableBody, "0")
// Render Products  end


function handleClickAddBtn(){
    elModalWrapper.classList.replace("scale-0", "scale-100")
    elModalWrapper.innerHTML = `
      <form class="modal modal-form relative px-[106px] w-[1130px] pt-[41px] pb-[34px] bg-gray-300 mx-auto rounded-[35px]">
            <label class="">
                <input class="changeImgUrl hidden" type="file">
                <img class="render-img mx-auto rounded-[30px]" src="./images/Admin/upload-img.png" alt="Upload" width="619" height="316">
            </label>
            <div class="flex justify-between mt-[33px]">
                <div class="w-[48%] flex flex-col gap-[15px]">
                    <label class="flex flex-col space-y-[2px] w-full">
                        <span class="text[22px] font-bold pl-[10px]">Категории</span>
                        <select name="category" class="w-full py-[20px] pl-[10px] rounded-[20px] outline-none inline-block">
                            <option value="0">Каркасные</option>
                            <option value="1">Надувные</option>
                        </select>
                    </label>
                    <label class="flex flex-col space-y-[2px] w-full">
                        <span class="text[22px] font-bold pl-[10px]">Стартая цена (сум) </span>
                        <input name="oldPrice" class="w-full focus:shadow-lg py-[20px] pl-[10px] rounded-[20px] outline-none inline-block" type="number" placeholder="Стартая цена (сум)">
                    </label>
                    <label class="flex flex-col space-y-[2px] w-full">
                        <span class="text[22px] font-bold pl-[10px]">Цена со скидкой (сум)  </span>
                        <input name="newPrice" class="w-full focus:shadow-lg py-[20px] pl-[10px] rounded-[20px] outline-none inline-block" type="number" placeholder="Цена со скидкой (сум) ">
                    </label>
                </div>
                <div class="w-[48%] flex flex-col gap-[15px]">
                    <label class="flex flex-col space-y-[2px] w-full">
                        <span class="text[22px] font-bold pl-[10px]">Рамка </span>
                        <select name="frame" class="w-full py-[20px] pl-[10px] rounded-[20px] outline-none inline-block">
                            <option value="0">Металлический</option>
                            <option value="1">Прямоугольная</option>
                            <option value="2">Рамка призмы</option>
                        </select>
                    </label>
                    <label class="flex flex-col space-y-[2px] w-full">
                        <span class="text[22px] font-bold pl-[10px]">Количество </span>
                        <input name="count" class="w-full focus:shadow-lg py-[20px] pl-[10px] rounded-[20px] outline-none inline-block" type="number" placeholder="Количество">
                    </label>
                </div>
            </div>
            <div class="text-center mt-[33px]">
                <button class="w-[237px] hover:opacity-[70%] duration-300 inline-block py-[6px] bg-[#009398] rounded-[25px] text-white text-[25px] leading-[29px]" type="submit">Добавить</button>
            </div>
            <button type="button" onclick="closeModal()" class="absolute top-[40px] right-[40px]">
                <img src="./images/Admin/close-icon.svg" alt="Close icon" width="38" height="38">
            </button>
        </form>
    `
    let elChangeImg = document.querySelector(".changeImgUrl")
    let elRenderImg = document.querySelector(".render-img")
    let elSubmitForm = document.querySelector(".modal-form")
    elChangeImg.addEventListener('change', function(e){
        elRenderImg.src = URL.createObjectURL(e.target.files[0]);
    })
    // Create start
    elSubmitForm.addEventListener("submit", function(evt){
        evt.preventDefault()
        const data = {
            id:1,
            imgUrl: elRenderImg.src,
            categoryId:evt.target.category.value,
            oldPrice:evt.target.oldPrice.value,
            newPrice:evt.target.newPrice.value,
            frame:evt.target.frame.value,
            count:evt.target.count.value
        }
        poolProducts.push(data);
        window.localStorage.setItem("products", JSON.stringify(poolProducts));
        elModalWrapper.classList.replace("scale-100", "scale-0")
        renderProducts(poolProducts, elTableBody, data.categoryId )
        if(data.categoryId == "0"){
            navbarItem1.className = "navbar-item1 font-bold text-[35px] leading-[40px] pb-[8px] text-[#009398] border-b-[3px] border-[#009398]"
            navbarItem2.className = "navbar-item2 font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px]"
        }
        else if(data.categoryId == "1"){
             navbarItem1.className = "navbar-item2 font-bold text-[35px] leading-[40px] text-[#A6A6A6] pb-[8px]"
            navbarItem2.className = "navbar-item1 font-bold text-[35px] leading-[40px]  pb-[8px] text-[#009398] border-b-[3px] border-[#009398]"
        }
    })
    // Create end
    
}

function closeModal(){
    elModalWrapper.classList.replace("scale-100", "scale-0")
}

