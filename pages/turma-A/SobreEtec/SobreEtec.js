document.addEventListener("DOMContentLoaded", () => {

    const menuButton = document.getElementById("menuButton");
    const mobileMenu = document.getElementById("mobileMenu");

    /*
     * ABRIR / FECHAR MENU
     */

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");

        mobileMenu.classList.toggle("active");

    });


    /*
     * FECHAR MENU AO CLICAR EM UMA OPÇÃO
     */

    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");

            mobileMenu.classList.remove("active");

        });

    });


    /*
     * FECHAR MENU AO CLICAR FORA DELE
     */

    document.addEventListener("click", (event) => {

        const clicouNoMenu =
            mobileMenu.contains(event.target);

        const clicouNoBotao =
            menuButton.contains(event.target);

        if (
            !clicouNoMenu &&
            !clicouNoBotao &&
            mobileMenu.classList.contains("active")
        ) {

            mobileMenu.classList.remove("active");

            menuButton.classList.remove("active");

        }

    });


    /*
     * ANIMAÇÃO SIMPLES DOS CARDS
     */

    const cards = document.querySelectorAll(
        ".course-card, .structure-item, .award-card, .stat-card"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    cards.forEach(card => {

        observer.observe(card);

    });

});