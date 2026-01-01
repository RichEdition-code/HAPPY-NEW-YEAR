document.getElementById('start-btn').addEventListener('click', function() {
    // 1. Masquer l'écran d'intro
    document.getElementById('intro-screen').style.display = 'none';
    
    // 2. Afficher le contenu principal
    const mainContent = document.getElementById('main-content');
    mainContent.style.display = 'block';

    // 3. Lancer l'effet feu d'artifice
    lancerFeuDartifice();
});

function lancerFeuDartifice() {
    var duration = 3 * 1000; // Dure 5 secondes
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
      var timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      var particleCount = 50 * (timeLeft / duration);
      
      // On lance des feux à gauche et à droite
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
      }));
    }, 250);
}

const vœux = ["du Succès", "du Bonheur", "de la Santé", "de l'Amour", "de la Prospérité", "de la Sérénité"];
        const spanMot = document.getElementById('mot-changeant');
        const startBtn = document.getElementById('start-btn');
        const introScreen = document.getElementById('intro-screen');
        const mainContent = document.getElementById('main-content');
        const confettiContainer = document.querySelector('.confetti-container');

        // FONCTION CHANGER LE TEXTE
        function updateText() {
            spanMot.style.opacity = "0";
            spanMot.style.transform = "translateY(10px)";
            setTimeout(() => {
                const nouveauVœu = vœux[Math.floor(Math.random() * vœux.length)];
                spanMot.textContent = nouveauVœu;
                spanMot.style.opacity = "1";
                spanMot.style.transform = "translateY(0)";
            }, 500);
        }

        // FONCTION CRÉER CONFETTIS
        function createConfetti() {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.style.left = Math.random() * 100 + 'vw';
            const size = Math.random() * 8 + 5 + 'px';
            confetti.style.width = size;
            confetti.style.height = size;
            
            const colors = ['#f0f', '#0ff', '#ff0', '#fff', '#FFD700', '#f8f'];
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            const duration = Math.random() * 3 + 2;
            confetti.style.animationDuration = duration + 's';
            
            confettiContainer.appendChild(confetti);
            setTimeout(() => confetti.remove(), duration * 1000);
        }

        // ÉVÉNEMENT CLIC
        startBtn.addEventListener('click', () => {
            introScreen.style.opacity = '0';
            setTimeout(() => {
                introScreen.style.visibility = 'hidden';
                mainContent.classList.add('visible-now');
                
                // Lancer les animations seulement après le clic
                setInterval(createConfetti, 100);
                setInterval(updateText, 3000);
            }, 1000);
        });