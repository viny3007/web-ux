
const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="../src/components/header/header.css">
  <header>
    <div class="logo">
        <img src="web-ux\frontend\src\img\logo.png" alt="Descrição da imagem">
    </div>

    <input class="search" type="text" placeholder="Pesquisar..." >

    <div class="acoes">
        <button class="btn"> <a href="cadastro.html">Entrar</a> </button>
        <button class="btn destaque">Cadastre-se agora</button>
    </div>
</header>
`;

class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  connectedCallback() {
    this.menuIcon = this.shadowRoot.querySelector('.menu-icon');
    this.links = this.shadowRoot.querySelector('.links');
    this.menuIcon.addEventListener('click', this.handleMenuClick);
  }

  disconnectedCallback() {
    this.menuIcon.removeEventListener('click', this.handleMenuClick);
  }

  handleMenuClick() {
    this.links.classList.toggle('active');
  }
}

export { HeaderComponent };