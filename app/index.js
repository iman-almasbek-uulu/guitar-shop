function render() {
    const productsStore = localStorageUtils.getProducts();
    
    header.render(productsStore.length);
    products.render();
}
spinner.render();
let CATALOG = [];


fetch("./server/catalog.json1")
    .then(res => res.json())
    .then(body => {
        CATALOG = body;
        
        setTimeout(() => {
            spinner.handleClear();
            render();
        }, 1000);
        
    })
    .catch(error => {
        spinner.handleClear();
        error_page.render();
    });
    