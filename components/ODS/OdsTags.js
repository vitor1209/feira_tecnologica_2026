function criarODS(numero) {
    return `
        <span class="ods-tag ods-${numero}">
            ODS ${numero}
        </span>
    `;
}

function criarListaODS(listaODS) {
    return listaODS
        .map(numero => criarODS(numero))
        .join("");
}