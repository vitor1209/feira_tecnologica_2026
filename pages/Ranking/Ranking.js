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