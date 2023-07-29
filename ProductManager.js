class ProductManager {
    #_products;
    #_nextId;

    constructor() {
        this.#_products = [];
        this.#_nextId = 1;

    }

    addProduct(title, description, price, thumbnail, code, stock) {
        const product = {
            id: this.#_nextId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }
        const validationParams = () => {
            for (let index = 0; index < this.#_products.length; index++) {
                const element = this.#_products[index];
                if (code === element.code) {
                    console.error('El codigo ha sido usado anteriomente en otro producto')
                    return false 
                }
            }
            if (title && description && price && thumbnail && code && stock) {
                return true;
            } else {
                console.error('Uno de los campos está vacio')
                return false;
            }
        }
        if (validationParams()) {
            this.#_products.push(product);
            this.#_nextId++
        }
    }

    getProducts(){
        return this.#_products
    }

    getProductById(id){
        const product =  this.#_products.find (p => p.id == id) 
        if (product) {
            return product
        } else{
            console.error('Producto no encontrado')
            return null
        }
    }

}


pm = new ProductManager() 
console.log(pm.getProducts())
console.log("------------------------------")


pm.addProduct("producto prueba", "Este es un producto prueba" , "200", "Sin imagen", "abc123", "25")
console.log(pm.getProducts())
console.log("------------------------------")


pm.addProduct("producto prueba", "Este es un producto prueba" , "200", "Sin imagen", "abc123", "25")
console.log(pm.getProducts())


console.log(pm.getProductById(1))
console.log(pm.getProductById(2))



