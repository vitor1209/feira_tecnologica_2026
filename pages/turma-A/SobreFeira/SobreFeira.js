const menuMobile = document.getElementById("menuMobile");

const menuLinks = document.querySelector(".menu-links");

menuMobile.addEventListener("click", () => {
    menuLinks.classList.toggle("aberto");
});

const links = document.querySelectorAll(".menu-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        menuLinks.classList.remove("aberto");
    });
});

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