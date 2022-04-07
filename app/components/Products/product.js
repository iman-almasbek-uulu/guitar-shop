class Products {
    constructor() {
    this.classNameActive = "products-element__btn_active";
    this.labelAdd = "Добавить в корзину";
    this.labelRemove = "Удалить из корзины";
    }

    handleSetLocationStorage(element,id) {
        const {pushProduct,products} = localStorageUtils.putProducts(id);
        if (pushProduct) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        }else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }


    render() {
        const productsStore = localStorageUtils.getProducts();
        let htmlCatalog ='';

        CATALOG.forEach(({id,name,img,price}) => {

            let activeClass = '';
            let activeText = '';

            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;

            }else {
                activeText = " "+this.labelRemove;
                activeClass = this.classNameActive;
            }

            htmlCatalog += `
                <li class="products-element">
                    <span   class="products-element__name">${name}</span>
                    <img    class="products-element__img" src="${img}" alt="">
                    <span   class="products-element__price">
                        ⚡️ ${price.toLocaleString()} сом
                    </span>
                    <button class="products-element__btn${activeClass}" onclick="products.handleSetLocationStorage(this, '${id}')">
                        ${activeText}
                    </button>
                </li>
            `;
        });

        const html = `
            <ul class="products-container">
                ${htmlCatalog}
            </ul>
        `;

        ROOT__PRODUCTS.innerHTML = html;
    }
}


const products = new Products();
products.render();