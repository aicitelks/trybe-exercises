let clickCount = 0;
let botao = document.querySelector('#botao');
let local = document.querySelector('#cliques');

botao.addEventListener('click', () => {
    clickCount += 1;
    local.innerText = '';
    local.append(clickCount);
});
