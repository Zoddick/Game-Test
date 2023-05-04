const hanky = document.querySelector('.hank');
const monke = document.querySelector('.manke');

const pula = () => {
   hanky.classList.add('pula');

    setTimeout (()=> {

    hanky.classList.remove('pula');

    }, 500);

}

const loop = setInterval (() => {
const monkeposicao = monke.offsetLeft;
const hankposicao = +window.getComputedStyle(hanky).top.replace('px', '');

if (monkeposicao <= 220 && monkeposicao >= 80 && hankposicao >= 480) {


    monke.style.animation = 'none';
    monke.style.left = `${monkeposicao}px`;

    window.alert("PERDEU");

} else {
    let score = 0;
    score ++;
 prompt.name(score);
}

}, 10);

document.addEventListener('keydown', pula);
