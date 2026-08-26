const css = new CSSStyleSheet();
await css.replace(await fetch('/components/Menu.css').then(r => r.text()));

class Menu extends HTMLElement {
    static PROJECT_PAGES = [
        'home',
        'sobreEtec',
        'sobreFeira',
        'mapa',
        'projetos',
        'projetosVisitados',
        'ranking',
        'votacao'
    ];// Define paginas que podem ser selecionadas na propriedade 'page'

    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.adoptedStyleSheets = [css]; // reaproveita a mesma folha compilada
        this.shadowRoot.innerHTML = `<div class="badge">${this.getAttribute('tipo')}</div>`;

        const page = this.getAttribute('page');
        const validPage = Menu.PROJECT_PAGES.includes(page) ? page : 'home'; // se colocar nome errado, usa home, por padrão

        if (page && !Menu.PROJECT_PAGES.includes(page)) {
            console.warn(`<menu> page="${page}" inválido. Use: ${Menu.PROJECT_PAGES.join(', ')}`);
        }


        this.render(validPage);


        this.shadowRoot.innerHTML = `
            <div class="card">
                <h3>${page}</h3>
                <slot></slot>
            </div>
        `;
    }
}

customElements.define('menu', Menu);