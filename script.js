const menu = document.getElementById("menu")
const cartBtn = document.getElementById("card-btn")
const cartModal = document.getElementById("card-modal")
const cartItemsContainer = document.getElementById("cart-tems")
const cartTotal = document.getElementById("cart-total")
const checkoutBtn = document.getElementById("checkout-btn") 
const closeModalBtn = document.getElementById("close-modal-btn")
const cartCounter = document.getElementById("card-count")
const adressInput = document.getElementById("adress")
const adressWarning = document.getElementById("adress-warning")

let cart = []

// abrir modal
cartBtn.addEventListener("click", function(){
    cartModal.style.display = "flex"
})
cartModal.addEventListener("click", function (event) {
    if (event.target===cartModal) {
        cartModal.style.display = "none"
    }
})
closeModalBtn.addEventListener("click", function () {
        cartModal.style.display = "none"
})
menu.addEventListener("click",function (event){
    let parentButton = event.target.closest("#add-to-cart-btn")
    if (parentButton) {
        const name = parentButton.getAttribute("data-name")
        const price = parseFloat(parentButton.getAttribute("data-price"))
        addToCart(name,price)
}})
// função para adicionar no carrinho
function addToCart(name,price) {
    cart.push({
        name,
        price,
        quantidade: 1,
    })
}