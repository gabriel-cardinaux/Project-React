const products = [
    {"id": 1, "name": "CPU A", "price": 200000, "category": "PC", "img": '*', "stock": 10, "description": "Good Quality + price"},
    {"id": 2, "name": "CPU B", "price": 300000, "category": "PC", "img": '*', "stock": 10, "description":"Good CPU for gaming"},
    {"id": 3, "name": "CPU C", "price": 500000, "category": "PC", "img": '*', "stock": 10, "description": "Solid CPU + price + gaming"},
    {"id": 4, "name": "Keyboard", "price": 15000, "category": "Accesories", "img": '*', "stock": 5, "description": "Keyboard for gaming"},
    {"id": 5, "name": "PC monitor", "price": 200000, "category": "Accesories", "img": "*", "stock": 30, "description": "PC monitor 4k"},
    {"id": 6, "name": "Mouse", "price": 50000, "category": "Accesories", "img": "*", "stock": 20, "description": "Mouse for gaming"},
    {"id": 7, "name": "Gaming chair", "price": 100000, "category": "Others", "img": "*", "stock": 5, "description": "Excellent gaming chair"},
    {"id": 8, "name": "Headphone", "price": 45000, "category": "Others", "img": "*", "stock": 10, "description": "Headphone"},
    {"id": 9, "name": "Webcam", "price": 23000, "category": "Others", "img": "*", "stock": 5, "description": "Good webcam for streaming"}


]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductByid = (productId) => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(product.find(prod => prod.id === productId))
        }, 500)
    })
}