const cores = [
    "#3f8f47",
    "#e6005c",
    "#ff8c00",
    "#c51b29",
    "#27afd0",
    "#a51c48",
    "#b88425",
    "#dca42c",
    "#469c3b",
    "#ffc107",
    "#ff6428",
    "#1598cc",
    "#4bbd28",
    "#08729e",
];

export function criarGraficoODS(elemento, dados) {
    if (!elemento) {
        console.error("Elemento do gráfico não encontrado.");
        return;
    }

    elemento.innerHTML = "";

    if (!dados || dados.length === 0) {
        elemento.innerHTML = `
            <p class="grafico-ods__vazio">
                Nenhum dado encontrado.
            </p>
        `;

        return;
    }

    const maiorValor = Math.max(
        ...dados.map(item => item.valor)
    );

    dados.forEach((item, index) => {
        const altura = maiorValor > 0
            ? (item.valor / maiorValor) * 100
            : 0;

        const container = document.createElement("div");

        container.className = "grafico-ods__item";

        container.innerHTML = `
            <div
                class="grafico-ods__barra"
                style="
                    height: ${altura}%;
                    background-color: ${cores[index % cores.length]};
                "
                title="ODS ${item.ods}: ${item.valor}"
            ></div>

            <span class="grafico-ods__legenda">
                ${item.ods}
            </span>
        `;

        elemento.appendChild(container);
    });
}