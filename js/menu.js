const menuToggle = document.getElementById('menuToggle');
const menuMobile = document.getElementById('menuMobile');
const menuOverlay = document.getElementById('menuOverlay');

function abrirMenu() {
    menuToggle.classList.add('ativo');
    menuMobile.classList.add('ativo');
    menuOverlay.classList.add('ativo');
    document.body.classList.add('menu-aberto');
    menuToggle.setAttribute('aria-label', 'Fechar menu');
};

function fecharMenu() {
    menuToggle.classList.remove('ativo');
    menuMobile.classList.remove('ativo');
    menuOverlay.classList.remove('ativo');
    document.body.classList.remove('menu-aberto');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
};

menuToggle.addEventListener('click', () => {
    const estaAberto = menuMobile.classList.contains('ativo');
    estaAberto ? fecharMenu() : abrirMenu();
});

menuOverlay.addEventListener('click', fecharMenu);

document.querySelectorAll('.menu-mobile a').forEach(link => {
    link.addEventListener('click', fecharMenu);
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
        fecharMenu();
    }
});