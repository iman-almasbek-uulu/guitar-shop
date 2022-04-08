class Errors {

    render() {
        const html = `
            <div>
                <div class="error">
                    <h3>Нет доступа!</h3>
                    <p>Попробуйте зайти позже</p>
                </div>
            </div>
        `;

        ROOT__ERROR.innerHTML = html;

    }
}

const error_page = new Errors(); 