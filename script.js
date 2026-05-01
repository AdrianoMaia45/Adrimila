// script.js - JavaScript para o site romântico

// Contador de Tempo
function atualizarContador() {
    // Data de início: 11 de abril de 2026
    const dataInicio = new Date('2026-04-11T00:00:00');
    const agora = new Date();

    const diferenca = agora - dataInicio;

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

    document.getElementById('dias').textContent = dias;
    document.getElementById('horas').textContent = horas;
    document.getElementById('minutos').textContent = minutos;
    document.getElementById('segundos').textContent = segundos;
}

// Atualizar contador a cada segundo
setInterval(atualizarContador, 1000);
atualizarContador(); // Chamada inicial

// Animações de Scroll com Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Selecionar elementos para animar
const elementosAnimados = document.querySelectorAll('.animate-on-scroll');
elementosAnimados.forEach(el => {
    observer.observe(el);
});

// Smooth Scroll para navegação (se houver navegação no futuro)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});