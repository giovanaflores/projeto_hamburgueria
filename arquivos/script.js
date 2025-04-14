document.addEventListener('DOMContentLoaded', function() {
    const paragrafoInicio = document.getElementById('texto-inicio');
    const linkItems = document.querySelectorAll('nav ul.links li a');
    const navLinks = document.querySelector('nav ul.links');
    const carrinhoMobile = document.querySelector('#carrinho-mobile');
    const menuHamburguer = document.getElementById('menu-hamburguer');
    const iconeCarrinho = document.querySelector('#icone-carrinho');
    const popupCarrinho = document.querySelector('#carrinho-popup');
    const fecharCarrinho = document.querySelector('#fechar-carrinho');

    function atualizarTextoParagrafo() {
        if (window.innerWidth <= 768) {
            paragrafoInicio.innerHTML = 'No <span id="na-brasa">Na Brasa</span>, os hambúrgueres são grelhados no ponto perfeito e cheios de sabor. Vem provar a verdadeira essência da brasa.';
        } else {
            paragrafoInicio.innerHTML = 'Bem-vindo ao <span id="na-brasa">Na Brasa</span>, aqui cada hambúrguer é uma experiência única, feito com ingredientes selecionados e carnes suculentas, grelhadas na perfeição. Nosso ambiente aconchegante e moderno é o lugar ideal para reunir amigos e família, enquanto saboreia combinações irresistíveis.';
        }
    }

    atualizarTextoParagrafo();

    window.addEventListener('resize', atualizarTextoParagrafo);

    linkItems.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navLinks.classList.remove('show');
            }
        });
    });

    menuHamburguer.addEventListener('click', function() {
        navLinks.classList.toggle('show');
    });

    iconeCarrinho.addEventListener('click', (e) => {
        e.preventDefault();
        popupCarrinho.classList.add('active');
    });

    fecharCarrinho.addEventListener('click', () => {
        popupCarrinho.classList.remove('active');
    });

    carrinhoMobile.addEventListener('click', (e) => {
        e.preventDefault();
        popupCarrinho.classList.add('active');
        navLinks.classList.remove('show');
    })
});