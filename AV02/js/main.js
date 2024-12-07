// Importando o array de bandeiras
import flags from './model/flags.js';

function generateFlags() {
    // Pegando o container onde as bandeiras serão inseridas
    const container = document.querySelector('.row');

    // Iterando sobre o array de bandeiras
    for (let flag of flags) {
    const flagCard = `
    <div id="flag-${flag.id}" class="col-md-2 mb-3 mx-auto">
        <div class="card">
            <img src="${flag.image}" class="card-img-top" alt="Bandeira de ${flag.name}">
            <div class="card-body">
                <p class="card-title font-weight-bold text-center">${flag.name}</p>
            </div>
        </div>
    </div>
    `;
    container.innerHTML += flagCard;
    }
}

window.onload = generateFlags;
