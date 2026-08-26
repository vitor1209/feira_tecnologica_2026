class Menu extends HTMLElement {

  async connectedCallback() {

    try {
      const css = new CSSStyleSheet();
      await css.replace(await fetch('./Menu.css').then(r => r.text()));
      this.shadowRoot.adoptedStyleSheets = [css];
    } catch (err) {
      console.error('Falha ao carregar Menu.css:', err);
      // componente ainda renderiza, só sem o CSS externo
    }

    this.shadowRoot.innerHTML = `
      <nav>
        <button class="hamburgerBtn"></button>
        <ul class="linksMenu-container">
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/Projetos/Projetos.html">Projetos</a></li>
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/ProjetosVisitados/ProjetosVisitados.html">Projetos Visitados</a></li>
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/Ranking/Ranking.html">Ranking</a></li>
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/Votacao/Votacao.html">Votação</a></li>
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/turma-A/Home/index.html">Home</a></li>
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/turma-A/Mapa/mapa.html">Mapa</a></li>
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/turma-A/SobreEtec/sobreEtec.html">Sobre a Etec</a></li>
          <li class="linkMenu"><a class="linkMenu-container" href="/pages/turma-A/SobreFeira/sobreFeira.html">Sobre a Feira</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('menu-component', Menu);