const addProduct = () => {
    const productField = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');
    const product = productField.value;
    const quantity = productQuantity.value;
    productField.value ='';
    productQuantity.value ='';

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = `Product Name: ${product}, Quantity: ${quantity}`;
    ul.appendChild(li)
}

const getStoredShoppingCart = () => {
    let cart = {};
    const storedCart = localStorage.getItem('cart');

    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity; // ei line er mane bujhi nai
    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);    
}

const displayLocalToWindow = (product, quantity) => {
    const savedCart = getStoredShoppingCart();
    for(const product in savedCart){
        const quantity = savedCart[product]; // aidau bujhi nai
        displayProduct(product, quantity);
    }
}
displayLocalToWindow();

