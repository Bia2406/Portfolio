
/* === Tranforma o menu hamburguer em x === */
const menuHamburguer = document.querySelector('.menu-hamburguer')
menuHamburguer .addEventListener('click', () => {
    toggleMenu()
});

function toggleMenu() {
    const nav = document.querySelector('.nav-responsive');
    menuHamburguer.classList.toggle('change');

    if (menuHamburguer.classList.contains('change')) {
        nav.style.display = 'block';

    } else {
        nav.style.display = 'none';
    }
}

 const words = ['Desenvolvedora', 'Designer', 'p', 'Engineer'];
                let currentWordIndex = 0;
                let currentCharIndex = 0;
                const typedWord = document.getElementById('typedWord');
                let isDeleting = false;
                let typingSpeed = 150; // Velocidade de digitação
        
                function type() {
                    const currentWord = words[currentWordIndex];
                    
                    if (isDeleting) {
                        typedWord.textContent = currentWord.substring(0, currentCharIndex - 1);
                        currentCharIndex--;
                    } else {
                        typedWord.textContent = currentWord.substring(0, currentCharIndex + 1);
                        currentCharIndex++;
                    }
        
                    if (!isDeleting && currentCharIndex === currentWord.length) {
                        // Pausa no fim da palavra antes de apagar
                        setTimeout(() => isDeleting = true, 1000);
                    } else if (isDeleting && currentCharIndex === 0) {
                        isDeleting = false;
                        currentWordIndex = (currentWordIndex + 1) % words.length; // Vai para a próxima palavra
                    }
        
                    const delay = isDeleting ? 100 : typingSpeed; // Apagar mais rápido que digitar
                    setTimeout(type, delay);
                }
        
                // Inicia o efeito de digitação
                type();
     