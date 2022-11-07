class MyHeader extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <header id="header">
        <nav id="nav">
            <div class="container">
                <a href="index.html" id="icon">
                TheTour   
                </a>
                <ul class="navList">
                    <li>
                        <a class="navItem" href="index.html">Home</a>
                    </li>
                    <li class="navDropdown">
                        <a class="navItem">About us</a>
                        <ul class="listDropdown">
                            <li>
                                <a href="dom.html">Eav Outdom</a>
                            </li>
                            <li>
                                <a href="virak.html">Chhoeung Chhunvirak</a>
                            </li>
                            <li>
                                <a href="menea.html">Heng Menea</a>
                            </li>
                            <li>
                                <a href="channak.html">Kranh Channak</a>
                            </li>
                            <li>
                                <a href="saran.html">Bronh Saran</a>
                            </li>
                            <li>
                                <a href="theang.html">Yan Theang</a>
                            </li>
                            <li>
                                <a href="kimseng.html">Chey Kimseng</a>
                            </li>
                            <li>
                                <a href="kakada.html">Long Kakda</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a class="navItem" href="member.html">Member</a>
                    </li>
                </ul>
            </div>
        </nav>
        </header>
        `;
    }
}

customElements.define("header-component", MyHeader);
