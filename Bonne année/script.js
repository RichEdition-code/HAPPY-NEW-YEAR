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