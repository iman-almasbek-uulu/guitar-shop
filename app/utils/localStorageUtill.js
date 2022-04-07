class LocalStorageUtils {
    constructor() {
        this.keyName = "products";
    }

    getProducts() {
        let toLocalStorage = localStorage.getItem(this.keyName);

        if (toLocalStorage !== null) {
            return JSON.parse(toLocalStorage);
        }

        return [];
    }

    putProducts(id) {
        let products = this.getProducts();
        let pushProduct = false;
        const index = products.indexOf(id);

        if (index === -1) {
            products.push(id);
            pushProduct = true;
        }else {
            products.splice(index, 1);
        }

        localStorage.setItem(this.keyName,JSON.stringify(products));

        return {pushProduct,products};
    }
    
}

const localStorageUtils = new LocalStorageUtils();
