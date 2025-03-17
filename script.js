// Efeito de rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Botão "Voltar ao Topo"
const btnTopo = document.getElementById('btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        btnTopo.style.display = 'block';
    } else {
        btnTopo.style.display = 'none';
    }
});

btnTopo.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Alternar tema
const btnTema = document.getElementById('btn-tema');
btnTema.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        btnTema.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        btnTema.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Efeito de hover nos cards de projetos
const cards = document.querySelectorAll('.card-projeto');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
});

// Controle do menu compacto
const menuBtn = document.getElementById('menu-btn');
const menuExpandido = document.getElementById('menu-expandido');

menuBtn.addEventListener('click', () => {
    menuExpandido.classList.toggle('ativo');
});

// Animação de entrada da esquerda para a direita ao rolar
const sections = document.querySelectorAll('section');

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in-left');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

sections.forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Função para simular o efeito de digitação
function typeWriter(elemento, texto, velocidade, callback) {
    let i = 0;
    function digitar() {
        if (i < texto.length) {
            elemento.innerHTML += texto.charAt(i);
            i++;
            setTimeout(digitar, velocidade);
        } else if (callback) {
            callback();
        }
    }
    digitar();
}

// Função para iniciar a animação de digitação
function iniciarAnimacaoDigitacao() {
    const titulo = document.getElementById('titulo-digitado');
    const subtitulo = document.getElementById('subtitulo-digitado');

    const texto1 = "Portfólio de Rikelmy";
    const texto2 = "Desenvolvimento Web | Soluções Digitais";

    typeWriter(titulo, texto1, 100, () => {
        typeWriter(subtitulo, texto2, 50);
    });
}

// Inicia a animação quando a página carregar
window.addEventListener('load', iniciarAnimacaoDigitacao);