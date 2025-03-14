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
        btnTema.innerHTML = '<i class="fas fa-sun"></i>'; // Ícone de sol no tema escuro
    } else {
        btnTema.innerHTML = '<i class="fas fa-moon"></i>'; // Ícone de lua no tema claro
    }
});

// Efeito de hover nos cards
const cards = document.querySelectorAll('.card-projeto');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateX(10deg)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateX(0)';
        card.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
    });
});