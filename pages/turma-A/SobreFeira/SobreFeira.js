// const qntProjetos = apiFetch('/projetos/qnt');
// const qntAlunos = qntProjetos * 5;

// const h2AlunosInscritos = document.getElementById("alunos-inscritos");
// h2AlunosInscritos.innerHTML = `${qntAlunos}`

// const h2ProjetosInscritos = document.getElementById("projetos-inscritos");
// h2ProjetosInscritos.innerHTML = `${qntProjetos}`

//  ---------------- Quando API disponível ------------------  //

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
