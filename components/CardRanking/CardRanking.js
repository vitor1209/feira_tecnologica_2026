
export function CardRanking({
  colocacao,
  nome,
  ods,
  sala,
  bloco,
  curtidas
}) {
  const card = document.createElement("article");

  card.classList.add("card-ranking");

  card.innerHTML = `
        <div class="ranking-numero">
            ${colocacao}º
        </div>

        <div class="ranking-info">

            <h2>${nome}</h2>

            <div class="ranking-detalhes">

                <div class="ranking-ods">
                    ${ods.map(odsItem => `
                        <span class="ods-tag">ODS ${odsItem}</span>
                    `).join("")}
                </div>

                <span class="ranking-localizacao">
                    Sala ${sala} Bloco ${bloco}
                </span>

            </div>

        </div>

        <div class="ranking-curtidas">
            <span class="numero-curtidas">${curtidas}</span>
            <i class="fa-solid fa-thumbs-up"></i>

        </div>
    `;

  return card;
}