const Open = document.querySelector(".openburger")
const Close = document.querySelector(".closeburger")
const burger = document.querySelector(".burger_menu")

Open.addEventListener("click",()=> {
    burger.classList.add("active")
    document.body.style.overflow = "hidden"
});

Close.addEventListener("click",()=> {
    burger.classList.remove("active")
    document.body.style.overflow = "auto"
});