class MyComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
        h1 {
          color: red;
        }
      `;
    const h1 = document.createElement("h1");
    h1.textContent = "Hello World!";
    shadowRoot.appendChild(style);
    shadowRoot.appendChild(h1);
  }
}
customElements.define("my-component", MyComponent);

class MyComponent2 extends HTMLElement {
  constructor() {
    super();
    this.textContent = "Hello, World! from my-component 2";
  }
}
customElements.define("my-component2", MyComponent2);
