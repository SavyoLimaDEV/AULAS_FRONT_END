const botao = document.querySelector('.botao');
let clicado = false;

botao.addEventListener('click', () => {
    if (clicado) {
        document.body.style.background = '';
        document.querySelector('h1').style.color = '';
        document.body.classList.remove('light');
    } else {
        document.body.style.background = '';
        document.querySelector('h1').style.color = '';
        document.body.classList.add('light');
    }
    clicado = !clicado;
});