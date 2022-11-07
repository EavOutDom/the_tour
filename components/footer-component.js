class MyFooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="container footer_container">
        <div class="flex_between">
            <div>
                <h1>TheTour</h1>
                <p>Help you find your favorite destination.</p>
            </div>
            <div class="icons">
                <ion-icon name="logo-facebook" size="large" style='color: white'></ion-icon>
                <ion-icon name="logo-instagram" size="large" style='color: white'></ion-icon>
                <ion-icon name="logo-twitter" size="large" style='color: white'></ion-icon>
                <ion-icon name="logo-youtube" size="large" style='color: white'></ion-icon>
            </div>
        </div>
        <div class="flex_between">
            <div>
                <h3>Project</h3>
                <p>Status</p>
                <p>All version</p>
            </div>
            <div>
                <h3>Community</h3>
                <p>Github</p>
                <p>Issue</p>
                <p>Discord</p>
                <p>Slack</p>
            </div>
            <div>
                <h3>Help</h3>
                <p>Troubleshooting</p>
                <p>Support</p>
                <p>Contact us</p>
            </div>
            <div>
                <h3>Others</h3>
                <p>Terms of service</p>
                <p>Privacy policy</p>
                <p>License</p>
            </div>
        </div>
    </div>
    </footer>`;
    }
}

customElements.define("footer-component", MyFooter);
