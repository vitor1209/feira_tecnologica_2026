class Menu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
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

    // registra o evento depois que o HTML já está no DOM
    const nav = this.querySelector('nav');
    const btn = this.querySelector('.hamburgerBtn');

    btn.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  }
}

customElements.define('menu-component', Menu);