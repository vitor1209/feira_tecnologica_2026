import { CardRanking } from "../components/CardRanking/CardRanking.js";

const productsContainer = document.querySelector("#products");

const product = {
  title: "Notebook",
  description: "Notebook para trabalho e estudos",
  image: "./images/notebook.jpg",
  price: "3.499,90"
};

const card = Card(product);

productsContainer.appendChild(card);