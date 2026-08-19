function criarODS(numero) {
    return `
        <span class="ods-tag ods-${numero}">
            ODS ${numero}
        </span>
    `;
}

function criarListaODS(listaODS) {
    return listaODS
        .map(ods => criarODS(ods))
        .join("");
}

function criarCard(projeto) {

    return `
        <article class="card-projeto">

            <div class="card-imagem-container">

                <img
                    src="${projeto.imagem}"
                    alt="${projeto.nome}"
                    class="card-imagem"
                >

                <div class="card-ods">
                    ${criarListaODS(projeto.ods)}
                </div>

            </div>

            <div class="card-conteudo">

                <h2 class="card-titulo">
                    ${projeto.nome}
                </h2>

                <p class="card-subtitulo">
                    ${projeto.subtitulo}
                </p>

                <p class="card-curso">
                    ${projeto.curso}
                </p>

                <div class="card-local">
                    <span>Sala: ${projeto.sala}</span>
                    <span>Bloco: ${projeto.bloco}</span>
                </div>

                <a href="${projeto.link}" class="card-botao">
                    Ver detalhes
                </a>

            </div>

        </article>
    `;
}