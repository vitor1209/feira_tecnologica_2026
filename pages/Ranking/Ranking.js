import { CardRanking } from "../../components/CardRanking/CardRanking.js";
import "../../components/CardRanking/CardRanking.css";



const productsContainer = document.querySelector("#products");

const product = {
  title: "Notebook",
  description: "Notebook para trabalho e estudos",
  image: "./images/notebook.jpg",
  price: "3.499,90"
};

const card = CardRanking(product);

productsContainer.appendChild(card);