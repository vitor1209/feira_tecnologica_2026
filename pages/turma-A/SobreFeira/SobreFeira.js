const perguntas = document.querySelectorAll(".faq-pergunta");

perguntas.forEach((pergunta) => {
  pergunta.addEventListener("click", () => {
    const item = pergunta.parentElement;

    const aberto = item.classList.contains("ativo");

    document.querySelectorAll(".faq-item").forEach((faq) => {
      faq.classList.remove("ativo");
    });

    if (!aberto) {
      item.classList.add("ativo");
    }
  });
});
