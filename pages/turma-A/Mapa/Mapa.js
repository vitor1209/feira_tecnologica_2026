// Dados dos projetos
const projetos = [
    { id: 1, nome: "AgroBot", categoria: "Tecnologia", estande: "A-01", sala: "2A", ods: "ODS 2" },
    { id: 2, nome: "RoboArm Pro", categoria: "Robótica", estande: "A-02", sala: "2A", ods: "ODS 9" },
    { id: 3, nome: "MedAlert", categoria: "Saúde", estande: "B-03", sala: "3B", ods: "ODS 3" },
    { id: 4, nome: "SafeHome Security", categoria: "Segurança", estande: "B-04", sala: "3B", ods: "ODS 11" },
    { id: 5, nome: "EcoTrack", categoria: "Sustentabilidade", estande: "C-07", sala: "1C", ods: "ODS 13" },
    { id: 6, nome: "PlantaAI", categoria: "Inteligência Artificial", estande: "C-08", sala: "1C", ods: "ODS 15" },
    { id: 7, nome: "LearnAI", categoria: "Educação", estande: "D-02", sala: "2A", ods: "ODS 4" },
    { id: 8, nome: "SignLang Translator", categoria: "Acessibilidade", estande: "D-04", sala: "3A", ods: "ODS 10" },
    { id: 9, nome: "SmartCity Dashboard", categoria: "Cidades Inteligentes", estande: "E-05", sala: "2B", ods: "ODS 11" },
    { id: 10, nome: "TrafficFlow AI", categoria: "Inteligência Artificial", estande: "E-06", sala: "2B", ods: "ODS 9" },
    { id: 11, nome: "FinBot", categoria: "Finanças", estande: "F-08", sala: "2C", ods: "ODS 8" },
    { id: 12, nome: "CryptoLearn", categoria: "Tecnologia", estande: "F-09", sala: "3C", ods: "ODS 4" }
];

// Elementos HTML
const listaEstandes = document.getElementById("lista-estandes");
const campoBusca = document.getElementById("campo-busca");

let intervaloAleatorio = null;

// Função para sortear N projetos aleatórios sem repetir
function sortearProjetosAleatorios(quantidade) {
    const copia = [...projetos];
    const sorteados = [];
    
    for (let i = 0; i < quantidade && copia.length > 0; i++) {
        const indiceAleatorio = Math.floor(Math.random() * copia.length);
        sorteados.push(copia.splice(indiceAleatorio, 1)[0]);
    }
    
    return sorteados;
}

// Renderizar estandes
function renderizarEstandes(lista) {
    if (!listaEstandes) return;
    listaEstandes.innerHTML = "";

    if (lista.length === 0) {
        listaEstandes.innerHTML = `
            <p class="sem-resultados" style="grid-column: 1 / -1; text-align: center; color: #7d6b84;">
                Nenhum projeto encontrado.
            </p>
        `;
        return;
    }

    lista.forEach(function(projeto) {
        const bloco = projeto.estande.split("-")[0];
        const salaDisplay = projeto.sala || `${bloco}-01`;

        const item = document.createElement("article");
        item.className = "cartao-projeto";

        item.innerHTML = `
            <div class="sala-tag">
                <span class="sala-numero">${salaDisplay}</span>
            </div>

            <div class="conteudo-projeto">
                <div class="topo-card">
                    <div class="info-principal">
                        <h3>${projeto.nome}</h3>
                        <p class="subtitulo-projeto">${projeto.categoria}</p>
                    </div>
                    <span class="badge-status status-nao-visitado">Estande ${projeto.estande}</span>
                </div>

                <div class="tags-projeto">
                    <span class="tag-info">${projeto.ods}</span>
                    <span class="tag-info">Bloco ${bloco}</span>
                    <span class="tag-info">${projeto.categoria}</span>
                </div>
            </div>
        `;

        item.addEventListener("click", function() {
            localizarEstande(projeto.estande);
        });

        listaEstandes.appendChild(item);
    });
}

// Rotacionar projetos aleatórios
function iniciarRotacaoAleatoria() {
    renderizarEstandes(sortearProjetosAleatorios(3));

    if (intervaloAleatorio) {
        clearInterval(intervaloAleatorio);
    }

    intervaloAleatorio = setInterval(function() {
        if (campoBusca && campoBusca.value.trim() === "") {
            renderizarEstandes(sortearProjetosAleatorios(3));
        }
    }, 5000);
}

// Destaque de estande no mapa/lista
function localizarEstande(estande) {
    const itens = document.querySelectorAll(".cartao-projeto");

    itens.forEach(function(item) {
        item.classList.remove("destacado");

        if (item.textContent.includes(estande)) {
            item.classList.add("destacado");
            item.scrollIntoView({
                behavior: "smooth",
                block: "nearest"
            });
        }
    });
}

// Filtro de Busca
if (campoBusca) {
    campoBusca.addEventListener("input", function() {
        const busca = campoBusca.value.toLowerCase().trim();

        if (busca === "") {
            iniciarRotacaoAleatoria();
            return;
        }

        clearInterval(intervaloAleatorio);

        const resultados = projetos.filter(function(projeto) {
            const nome = projeto.nome.toLowerCase();
            const categoria = projeto.categoria.toLowerCase();
            const estande = projeto.estande.toLowerCase();
            const ods = projeto.ods.toLowerCase();

            return (
                nome.includes(busca) ||
                categoria.includes(busca) ||
                estande.includes(busca) ||
                ods.includes(busca)
            );
        });

        renderizarEstandes(resultados);
    });
}

// Controle de Zoom do SVG
let nivelZoom = 1;
const svgMapa = document.getElementById("svg-mapa");
const btnZoomIn = document.getElementById("zoom-in");
const btnZoomOut = document.getElementById("zoom-out");
const zoomTexto = document.getElementById("zoom-porcentagem");

if (btnZoomIn && btnZoomOut) {
    btnZoomIn.addEventListener("click", () => {
        if (nivelZoom < 1.8) {
            nivelZoom += 0.2;
            atualizarZoom();
        }
    });

    btnZoomOut.addEventListener("click", () => {
        if (nivelZoom > 0.8) {
            nivelZoom -= 0.2;
            atualizarZoom();
        }
    });
}

function atualizarZoom() {
    if (svgMapa) {
        svgMapa.style.transform = `scale(${nivelZoom})`;
    }
    if (zoomTexto) {
        zoomTexto.textContent = `${Math.round(nivelZoom * 100)}%`;
    }
}

// Controle de Seleção dos Botões de Bloco (Toggle)
const botoesBloco = document.querySelectorAll(".btn-bloco");
const grupoBlocoA = document.getElementById("grupo-bloco-a");
const grupoBlocoB = document.getElementById("grupo-bloco-b");

botoesBloco.forEach(btn => {
    btn.addEventListener("click", () => {
        const blocoSelecionado = btn.getAttribute("data-bloco");

        if (btn.classList.contains("ativo") && blocoSelecionado !== "geral") {
            ativarBotao("geral");
            filtrarMapaSVG("geral");
            return;
        }

        ativarBotao(blocoSelecionado);
        filtrarMapaSVG(blocoSelecionado);
    });
});

function ativarBotao(bloco) {
    botoesBloco.forEach(b => {
        if (b.getAttribute("data-bloco") === bloco) {
            b.classList.add("ativo");
        } else {
            b.classList.remove("ativo");
        }
    });
}

function filtrarMapaSVG(bloco) {
    if (!grupoBlocoA || !grupoBlocoB) return;

    grupoBlocoA.classList.remove("escondido");
    grupoBlocoB.classList.remove("escondido");

    if (bloco === "bloco-a") {
        grupoBlocoB.classList.add("escondido");
    } else if (bloco === "bloco-b") {
        grupoBlocoA.classList.add("escondido");
    }
}

// Inicialização
iniciarRotacaoAleatoria();