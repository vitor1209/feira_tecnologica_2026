const API_URL = "https://meusite.com/api";

// Todas as requisições podem ser executadas apartir dessa função
async function apiFetch(endpoint, options = {}) {

    const resposta = await fetch(`${API_URL}${endpoint}`, {
        ...options,

        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            ...options.headers
        }
    });

    if (!resposta.ok) {
        throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    return resposta.json();
}