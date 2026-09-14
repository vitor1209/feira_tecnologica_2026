// =========================================================
// FEIRA TECNOLÓGICA 2026 — script.js
// =========================================================

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
     2. MENU HAMBÚRGUER ANIMADO (3 barras → X)
     ======================================================= */

  const menuToggle = document.getElementById('menuToggle');
  const offcanvasEl = document.getElementById('mainMenu');

  if (menuToggle && offcanvasEl) {
    // O Bootstrap controla a abertura/fechamento do offcanvas via data-attributes.
    // Aqui apenas sincronizamos a classe "active" do botão com o estado do offcanvas
    // para animar as barras em um X.
    offcanvasEl.addEventListener('show.bs.offcanvas', function () {
      menuToggle.classList.add('active');
      menuToggle.setAttribute('aria-expanded', 'true');
    });

    offcanvasEl.addEventListener('hide.bs.offcanvas', function () {
      menuToggle.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Fecha o menu offcanvas ao clicar em um link de navegação
  const menuLinks = document.querySelectorAll('#mainMenu .nav-link-custom');

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasEl);
      if (bsOffcanvas) {
        bsOffcanvas.hide();
      }
    });
  });

  /* =======================================================
     3. ANIMAÇÕES DE ENTRADA DIFERENTES PARA CADA CARD
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
