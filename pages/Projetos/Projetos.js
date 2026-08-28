const projetos = [

    {
        nome: "Projeto Orion",
        subtitulo: "Luva tecnológica musical",
        curso: "Informática para Internet",
        sala: "2A",
        bloco: "A",
        imagem: "../../img/orion.jpg",
        ods: [4, 9],
        link: "#"
    },

    {
        nome: "EcoTech",
        subtitulo: "Tecnologia sustentável",
        curso: "Administração",
        sala: "3B",
        bloco: "B",
        imagem: "../../img/ecotech.jpg",
        ods: [11, 12],
        link: "#"
    }

];


/* ============================= */
/* ELEMENTOS */
/* ============================= */

const container =
    document.getElementById("lista-projetos");

const containerBusca =
    document.getElementById("barra-busca");


/* ============================= */
/* SEARCHBAR */
/* ============================= */

containerBusca.innerHTML =
    criarSearchBar();


const campoBusca =
    document.getElementById("busca-projetos");


/* ============================= */
/* FILTROS ATUAIS */
/* ============================= */

let filtroCurso = "todos";

let filtroODS = "todos";

let filtroSala = "todos";


/* ============================= */
/* DROPDOWNS */
/* ============================= */

function configurarDropdown(id, tipo) {

    const dropdown =
        document.getElementById(id);

    const botao =
        dropdown.querySelector(".filtro");

    const opcoes =
        dropdown.querySelectorAll(
            ".opcoes-dropdown button"
        );


    /* ABRIR DROPDOWN */

    botao.addEventListener("click", function (evento) {

        evento.stopPropagation();


        document
            .querySelectorAll(".dropdown")
            .forEach(outro => {

                if (outro !== dropdown) {

                    outro.classList.remove(
                        "aberto"
                    );

                }

            });


        dropdown.classList.toggle("aberto");

    });


    /* SELECIONAR OPÇÃO */

    opcoes.forEach(opcao => {

        opcao.addEventListener("click", function (evento) {

            evento.stopPropagation();


            const valor =
                opcao.dataset.valor;

            const texto =
                opcao.textContent.trim();


            dropdown
                .querySelector(".texto-filtro")
                .textContent = texto;


            dropdown.classList.remove(
                "aberto"
            );


            if (tipo === "curso") {

                filtroCurso = valor;

            }


            if (tipo === "ods") {

                filtroODS = valor;

            }


            if (tipo === "sala") {

                filtroSala = valor;

            }


            atualizarProjetos();

        });

    });

}


/* ============================= */
/* ATIVAR FILTROS */
/* ============================= */

configurarDropdown(
    "dropdown-curso",
    "curso"
);

configurarDropdown(
    "dropdown-ods",
    "ods"
);

configurarDropdown(
    "dropdown-sala",
    "sala"
);


/* ============================= */
/* FECHAR AO CLICAR FORA */
/* ============================= */

document.addEventListener("click", function () {

    document
        .querySelectorAll(".dropdown")
        .forEach(dropdown => {

            dropdown.classList.remove(
                "aberto"
            );

        });

});


/* ============================= */
/* BUSCA */
/* ============================= */

campoBusca.addEventListener(
    "input",
    atualizarProjetos
);


/* ============================= */
/* FILTRAGEM */
/* ============================= */

function atualizarProjetos() {

    const busca =
        campoBusca.value
            .toLowerCase()
            .trim();


    const projetosFiltrados =
        projetos.filter(projeto => {


            const correspondeBusca =

                projeto.nome
                    .toLowerCase()
                    .includes(busca)

                ||

                projeto.subtitulo
                    .toLowerCase()
                    .includes(busca)

                ||

                projeto.curso
                    .toLowerCase()
                    .includes(busca)

                ||

                projeto.sala
                    .toLowerCase()
                    .includes(busca);


            const correspondeCurso =

                filtroCurso === "todos"

                ||

                projeto.curso === filtroCurso;


            const correspondeODS =

                filtroODS === "todos"

                ||

                projeto.ods.includes(
                    Number(filtroODS)
                );


            const correspondeSala =

                filtroSala === "todos"

                ||

                projeto.sala === filtroSala;


            return (

                correspondeBusca

                &&

                correspondeCurso

                &&

                correspondeODS

                &&

                correspondeSala

            );

        });


    renderizarProjetos(
        projetosFiltrados
    );

}


/* ============================= */
/* RENDERIZAR */
/* ============================= */

function renderizarProjetos(lista) {

    container.innerHTML = "";


    lista.forEach(projeto => {

        container.innerHTML +=
            criarCard(projeto);

    });


    if (lista.length === 0) {

        container.innerHTML = `

            <p class="nenhum-projeto">
                Nenhum projeto encontrado.
            </p>

        `;

    }

}


/* ============================= */
/* INICIALIZAÇÃO */
/* ============================= */

renderizarProjetos(projetos);