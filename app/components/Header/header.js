class Header {

    handleOpenShoppingPage() {
        shopping.render();
    }

    render(count) {
        const html = `
            <div class="header-container">
                <div class="header-counter" onclick="header.handleOpenShoppingPage();">
                    🔥 ${count}
                </div>
            </div>
        `;

        ROOT__HEADER.innerHTML = html;
    }
}

const header = new Header();