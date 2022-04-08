class Spinner {

    handleClear() {
       ROOT__SPINNER.innerHTML = ''; 
    }

    render() {
        let html =  `
            <div class="spinner-container">
                <img class="spinner__img" src="/app/img/Dual Ring-1s-200px.svg" />
            </div>
        `;

        ROOT__SPINNER.innerHTML = html;
    }
}

const spinner = new Spinner();
