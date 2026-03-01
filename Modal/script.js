"use strict;"

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".close-modal")
const btnsOpenModal = document.querySelectorAll(".show-modal")

const openModal = function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

const closeModal = function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
}

for (let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener("click", openModal)  
}

btnCloseModal.addEventListener("click", closeModal) // DO NOT USE closeModal()
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function(e){
    if (e.key === "Escape"){
        if (!modal.classList.contains("hidden")) // If the modal does not contain the hidden class, the close
        closeModal();
    }
})