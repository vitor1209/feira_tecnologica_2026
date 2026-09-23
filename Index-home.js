// =========================================================
// FEIRA TECNOLÓGICA 2026 — script.js
// =========================================================



/*                             *
 *  ------  Elementos  ------  *
 *                             */

const container =
    document.getElementById("lista-projetos");

// const h2AlunosInscritos = document.getElementById("alunos-inscritos");
// const h2ProjetosInscritos = document.getElementById("projetos-inscritos");

// const qntProjetos = apiFetch('/projetos/qnt');
// const qntAlunos = qntProjetos * 5;

// h2AlunosInscritos.innerHTML = `${qntAlunos}`
// h2ProjetosInscritos.innerHTML = `${qntProjetos}`
//  ---------------- Quando API disponível ------------------  //



document.addEventListener('DOMContentLoaded', function () {

  /* =======================================================
     1. CONTAGEM REGRESSIVA + ANIMAÇÕES DE MARCOS
     ======================================================= */

  // Data/hora alvo: 26 de Setembro de 2026, 09h00 (horário de Brasília, UTC-3)
  const targetDate = new Date('2026-09-26T09:00:00-03:00').getTime();

  const daysEl = document.getElementById('cd-days');
  const hoursEl = document.getElementById('cd-hours');
  const minutesEl = document.getElementById('cd-minutes');
  const secondsEl = document.getElementById('cd-seconds');
  const countdownGrid = document.getElementById('countdown');
  const messageEl = document.getElementById('cd-message');

  const ONE_SECOND = 1000;
  const ONE_MINUTE = 60 * ONE_SECOND;
  const ONE_HOUR = 60 * ONE_MINUTE;
  const ONE_DAY = 24 * ONE_HOUR;
  const ONE_WEEK = 7 * ONE_DAY;

  function pad(value) {
    return String(value).padStart(2, '0');
  }

  // Remove todas as classes de marco antes de aplicar a atual
  function clearMilestoneClasses() {
    countdownGrid.classList.remove('anim-week', 'anim-day', 'anim-minute', 'anim-ten');
  }

  function applyMilestone(distance) {
    clearMilestoneClasses();

    if (distance <= 10 * ONE_SECOND) {
      countdownGrid.classList.add('anim-ten');
      messageEl.textContent = 'Atenção! Faltam poucos segundos!';
    } else if (distance <= ONE_MINUTE) {
      countdownGrid.classList.add('anim-minute');
      messageEl.textContent = 'Falta menos de 1 minuto!';
    } else if (distance <= ONE_DAY) {
      countdownGrid.classList.add('anim-day');
      messageEl.textContent = 'É amanhã! Prepare-se!';
    } else if (distance <= ONE_WEEK) {
      countdownGrid.classList.add('anim-week');
      messageEl.textContent = 'Estamos na última semana!';
    } else {
      messageEl.textContent = 'Contagem em andamento...';
    }
  }

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      daysEl.textContent = '00';
      hoursEl.textContent = '00';
      minutesEl.textContent = '00';
      secondsEl.textContent = '00';
      clearMilestoneClasses();
      messageEl.textContent = 'A feira já começou!';
      clearInterval(countdownInterval);
      return;
    }

    const days = Math.floor(distance / ONE_DAY);
    const hours = Math.floor((distance % ONE_DAY) / ONE_HOUR);
    const minutes = Math.floor((distance % ONE_HOUR) / ONE_MINUTE);
    const seconds = Math.floor((distance % ONE_MINUTE) / ONE_SECOND);

    daysEl.textContent = pad(days);
    hoursEl.textContent = pad(hours);
    minutesEl.textContent = pad(minutes);
    secondsEl.textContent = pad(seconds);

    applyMilestone(distance);
  }

  updateCountdown();
  const countdownInterval = setInterval(updateCountdown, 1000);


  /* =======================================================
     2. ANIMAÇÕES DE ENTRADA DIFERENTES PARA CADA CARD
     ======================================================= */

  const revealCards = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealCards.length > 0) {
    const revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });

    revealCards.forEach(function (card) {
      revealObserver.observe(card);
    });
  } else {
    // Fallback: navegadores sem suporte a IntersectionObserver mostram os cards direto
    revealCards.forEach(function (card) {
      card.classList.add('in-view');
    });
  }

});


/*                                                 *
 *  -------  Carregar Projetos na pagina  -------  *
 *                                                 */

const projetos = [

    {
        nome: "Projeto Orion",
        subtitulo: "Luva tecnológica musical",
        curso: "Informática para Internet",
        sala: "2A",
        bloco: "A",
        imagem: "../../img/orion.jpg",
        ods: [4, 9],
        link: "#",
        votos: 7
    },

    {
        nome: "EcoTech",
        subtitulo: "Tecnologia sustentável",
        curso: "Administração",
        sala: "3B",
        bloco: "B",
        imagem: "../../img/ecotech.jpg",
        ods: [11, 12],
        link: "#",
        votos: 6
    },

    {
        nome: "Viridis",
        subtitulo: "Horta em Gamificação",
        curso: "Informática para Internet",
        sala: "3C",
        bloco: "B",
        imagem: "../../img/viridis.jpg",
        ods: [11, 12],
        link: "#",
        votos: 5
    }

];

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


/*                                 *
 *  -------  Inicializar  -------  *
 *                                 */

renderizarProjetos(projetos);