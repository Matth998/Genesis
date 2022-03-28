let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {

    let colorOrder = Math.floor(Math.random() * 4);

    order[order.length] = colorOrder;

    clickedOrder = [];

    for(let i in order) {

        let elementColor = createColorElement(order[i]);

        lightColor(elementColor, Number(i) + 1);

    }
}

let lightColor = (element, number) => {

    number = number * 500;

    setTimeout(() => {

        element.classList.add('selected');

    }, number - 250);

    setTimeout(() => {

        element.classList.remove('selected');

    }, 500);
}

let checkOrder = () => {
    for(let i in clickedOrder) {

        if(clickedOrder[i] != order[i]) {

            gameOver();

            break;
        }
    }
    if(clickedOrder.length == order.length) {

        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);

        nextLevel();
    }
}

let click = (color) => {

    clickedOrder[clickedOrder.length] = color;

    createColorElement(color).classList.add('selected');

    setTimeout(() => {

        createColorElement(color).classList.remove('selected');

        checkOrder();

    },250);
}

let createColorElement = (color) => {

    if(color == 0) {

        return blue;

    } else if(color == 1) {

        return yellow;

    } else if (color == 2) {

        return red;

    } else if (color == 3) {

        return green;

    }
}

let nextLevel = () => {

    score++;

    shuffleOrder();

}

let gameOver = () => {

    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para iniciar um novo jogo`);

    order = [];

    clickedOrder = [];

    playGame();
}

let playGame = () => {

    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');

    score = 0;

    nextLevel();
}

blue.onclick = () => click(0);
yellow.onclick = () => click(1);
red.onclick = () => click(2);
green.onclick = () => click(3);


playGame();