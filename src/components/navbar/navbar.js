import navbarTemplate from "bundle-text:./navbar.html";
import * as navbarCss from "bundle-text:./navbar.css";

class Navbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: "open" });
        this.shadowRoot.innerHTML = navbarTemplate
            .replace("{{ homeHref }}", "/index/index.html")
            .replace("{{ collectHref }}", "/collect/collect.html");

        const styleElem = document.createElement("style");
        styleElem.innerText = navbarCss.replace(/(\r\n|\n|\r)/gm, "");
        this.shadowRoot.appendChild(styleElem);
    }
}

export { Navbar };
