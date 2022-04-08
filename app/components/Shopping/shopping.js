class Shopping {

    handleClear() {
        ROOT__SHOPPING.innerHTML = '';
    }

    render() {
        const productsStore = localStorageUtils.getProducts();
        let htmlCatalog ='';
        let sumCatalog = 0;

        CATALOG.forEach(({id,name,price}) => { 

            if (productsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping_element__name">⚡️ ${name}</td>
                        <td class="shopping_element__price">${price.toLocaleString()} сом</td>
                    </tr>
                `;
               sumCatalog += price; 
            }

            

        });

        const html = `
            <div class="shopping-container">
                <div class="shopping__close" onclick="shopping.handleClear();"></div>
                <table>${htmlCatalog} 
                    <tr>
                        <td class="shopping_element__name">💥 сумма:</td>
                        <td class="shopping_element__price">${sumCatalog.toLocaleString()} сом</td>
                    </tr>
                </table>
            </div>
        `;

        ROOT__SHOPPING.innerHTML = html;
    }
}

const shopping = new Shopping();