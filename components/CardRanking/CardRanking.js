export function CardRanking({ title, description, image, price }) {
  const card = document.createElement("article");

  card.classList.add("card");

  card.innerHTML = `
    <img src="${image}" alt="${title}">
    
    <div class="card-content">
      <h2>${title}</h2>
      <p>${description}</p>
      <strong>R$ ${price}</strong>
    </div>
  `;

  return card;
}