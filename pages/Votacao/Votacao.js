

(function () {

  const voteBtn = document.getElementById('voteBtn');
  const thumbIcon = document.getElementById('thumbIcon');

  const modalOverlay = document.getElementById('modalOverlay');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalOkBtn = document.getElementById('modalOkBtn');
  const modalIcon = document.getElementById('modalIcon');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');

  const projectCard = document.querySelector('.card');

  const PROJECT_ID = projectCard ? projectCard.dataset.projectId : null;

  const VOTE_ENDPOINT = '/api/votos';

  let liked = false;
  let isSubmitting = false;

  // ---------- ícone usado dentro do modal ----------
  const ICON_CHECK = `
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`;

  // ---------- modal ----------
  
  function openModal() {
    modalIcon.innerHTML = ICON_CHECK;
    modalTitle.textContent = 'Voto registrado!';
    modalText.textContent = 'Obrigado por visitar o estande e apoiar este projeto.';
    modalOverlay.classList.add('open');
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
  }

  // ---------- comunicação com o back-end ----------
  async function sendVoteToBackend(action) {
    // action: 'like' | 'unlike'
    const response = await fetch(VOTE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        projectId: PROJECT_ID,
        action: action
      })
    });

    if (!response.ok) {
      throw new Error('Falha ao registrar o voto');
    }

    return response.json();
  }

  // ---------- clique no botão de curtir ----------
  voteBtn.addEventListener('click', async function () {
    if (isSubmitting || liked) return; // por enquanto, sem "descurtir"

    isSubmitting = true;
    voteBtn.disabled = true;

    try {
      // TODO(back-end): descomentar quando a rota estiver pronta.
      // await sendVoteToBackend('like');

      liked = true;
      thumbIcon.classList.add('liked');
      openModal();
    } catch (err) {
      console.error(err);
      alert('Não foi possível registrar seu voto agora. Tente novamente.');
    } finally {
      isSubmitting = false;
      voteBtn.disabled = false;
    }
  });

  // ---------- fechar modal ----------
  modalCloseBtn.addEventListener('click', closeModal);
  modalOkBtn.addEventListener('click', closeModal);

  modalOverlay.addEventListener('click', function (e) {
    if (e.target === modalOverlay) closeModal();
  });
})();