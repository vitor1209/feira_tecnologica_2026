import { CardRanking } from "../../components/CardRanking/CardRanking.js";

const productsContainer = document.querySelector("#products");

const projetos = [
    {
        colocacao: 1,
        nome: "Horta Inteligente",
        ods: [2, 4, 12],
        sala: 3,
        bloco: "A",
        curtidas: 128
    },

    {
        colocacao: 2,
        nome: "Energia Solar Sustentável",
        ods: [7, 11, 13],
        sala: 5,
        bloco: "B",
        curtidas: 104
    },

    {
        colocacao: 3,
        nome: "Robô Reciclador",
        ods: [9, 12, 13],
        sala: 2,
        bloco: "A",
        curtidas: 87
    }
];

projetos.forEach(projeto => {
    const card = CardRanking(projeto);

    productsContainer.appendChild(card);
});

import { criarGraficoODS } from "../../components/GraficoODS/GraficoODS.js";

const dadosODS = [
    { ods: 11, valor: 11 },
    { ods: 10, valor: 10 },
    { ods: 11, valor: 11 },
    { ods: 4, valor: 7 },
    { ods: 6, valor: 7 },
    { ods: 8, valor: 7 },
    { ods: 13, valor: 7 },
    { ods: 7, valor: 4 },
    { ods: 3, valor: 4 },
    { ods: 7, valor: 4 },
    { ods: 9, valor: 4 },
    { ods: 14, valor: 4 },
    { ods: 16, valor: 4 },
    { ods: 18, valor: 4 },
    { ods: 1, valor: 0 },
    { ods: 5, valor: 0 },
    { ods: 17, valor: 0 }
];

const elementoGrafico = document.querySelector("#graficoODS");

criarGraficoODS(elementoGrafico, dadosODS);

const container =
    document.getElementById("lista-projetos");

const containerBusca =
    document.getElementById("barra-busca");


containerBusca.innerHTML =
    criarSearchBar();


const campoBusca =
    document.getElementById("busca-projetos");