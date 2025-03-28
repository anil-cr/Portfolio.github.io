document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typing-container");
    const text = "Bienvenue sur mon PortFolio";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            // Écriture : on ajoute une lettre
            textElement.textContent = text.substring(0, index);
            index++;
        } else {
            // Suppression : on enlève une lettre
            textElement.textContent = text.substring(0, index);
            index--;
        }

        if (!isDeleting && index === text.length + 1) {
            setTimeout(() => isDeleting = true, 1500); // Pause avant l'effacement
        } else if (isDeleting && index === 0) {
            setTimeout(() => isDeleting = false, 100); // Pause avant réécriture
        }

        setTimeout(typeEffect, isDeleting ? 100 : 150); // Vitesse ajustée
    }

    typeEffect();
});
