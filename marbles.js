'use strict';

(() => {
    const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);

        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const FIGURES = ['камень', 'ножницы', 'бумага'];

    const chooseFigure = () => {
        const userChoice = prompt('Камень, Ножницы, Бумага?');

        if (userChoice === null) return null;
        else if (FIGURES[0].startsWith(userChoice.toLowerCase())) return 0;
        else if (FIGURES[1].startsWith(userChoice.toLowerCase())) return 1;
        else if (FIGURES[2].startsWith(userChoice.toLowerCase())) return 2;
        else return chooseFigure();
    };

    const rps = () => {
        const userFigure = chooseFigure();
        const compFigure = getRandomIntInclusive(0, 2);

        if (userFigure !== null) {
            alert(`Вы выбрали: ${FIGURES[userFigure]}.\n
                   Бот выбрал: ${FIGURES[compFigure]}.`);

            if (compFigure === userFigure + 1 || userFigure === 2 && compFigure === 0) return 0;
            else if (compFigure === userFigure) {
                alert('Ничья. Попробуйте ещё раз.');
                return rps();
            } else return 1;
        } else if (!confirm('Вы точно хотите выйти?')) rps();
    };

    const bet = (marblesLeft) => {
        const userBet = prompt(`Осталось шариков: ${marblesLeft.user}.\nВведите вашу ставку:`);

        if (userBet === null) return null;
        else if (parseInt(userBet) < 1 ||
                 parseInt(userBet) > marblesLeft.user ||
                 isNaN(userBet)) return bet(marblesLeft);
        else return parseInt(userBet);
    };

    const makeTurn = (firstToBet, marblesLeft) => {
        switch (firstToBet % 2) {
            case 0:
                alert('Ваш ход.');
                const userBet = bet(marblesLeft);
                const compChoice = getRandomIntInclusive(0, 1);

                if (userBet) {
                    if (userBet % 2 !== compChoice && marblesLeft.user !== 1) {
                        marblesLeft.user += userBet;
                        marblesLeft.comp -= userBet;
                        alert(`Бот не угадал чётность. Вы получаете его шарики!\n
                               Ваши шарики: ${marblesLeft.user >= 0 ? (marblesLeft.user <= 10 ? marblesLeft.user : 10) : 0}\n
                               Шарики бота: ${marblesLeft.comp >= 0 ? (marblesLeft.comp <= 10 ? marblesLeft.comp : 10) : 0}`);
                    } else {
                        marblesLeft.user -= userBet;
                        marblesLeft.comp += userBet;
                        alert(`Бот угадал чётность. Вы отдаёте шарики...\n
                               Ваши шарики: ${marblesLeft.user >= 0 ? (marblesLeft.user <= 10 ? marblesLeft.user : 10) : 0}\n
                               Шарики бота: ${marblesLeft.comp >= 0 ? (marblesLeft.comp <= 10 ? marblesLeft.comp : 10) : 0}`);
                    }
                } else if (!confirm('Вы точно хотите выйти?')) makeTurn(firstToBet, marblesLeft);
                break;

            case 1:
                alert('Ход бота.');
                const compBet = getRandomIntInclusive(1, marblesLeft.comp);
                const userChoice = confirm('Число чётное?');

                if (userChoice === (compBet % 2 === 0)) {
                    marblesLeft.user += compBet;
                    marblesLeft.comp -= compBet;
                    alert(`Ставка бота: ${compBet}\nВы угадали чётность! Вы получаете шарики бота.\n
                           Ваши шарики: ${marblesLeft.user >= 0 ? (marblesLeft.user <= 10 ? marblesLeft.user : 10) : 0}\n
                           Шарики бота: ${marblesLeft.comp >= 0 ? (marblesLeft.comp <= 10 ? marblesLeft.comp : 10) : 0}`);
                } else {
                    marblesLeft.user -= compBet;
                    marblesLeft.comp += compBet;
                    alert(`Ставка бота: ${compBet}\nВы не угадали чётность. Вы отдаёте шарики...\n
                           Ваши шарики: ${marblesLeft.user >= 0 ? (marblesLeft.user <= 10 ? marblesLeft.user : 10) : 0}\n
                           Шарики бота: ${marblesLeft.comp >= 0 ? (marblesLeft.comp <= 10 ? marblesLeft.comp : 10) : 0}`);
                }
        };

        if (marblesLeft.user > 0 && marblesLeft.comp > 0) makeTurn(firstToBet + 1, marblesLeft);
        else if (marblesLeft.user <= 0) alert('Игра окончена. Вы проиграли...');
        else alert('Игра окончена. Вы выиграли!');
    };

    const marblesGame = () => {
        const marblesLeft = {
            user: 5,
            comp: 5,
        };

        const firstToBet = rps();
        makeTurn(firstToBet, marblesLeft);

        if (confirm('Хотите сыграть ещё?')) marblesGame();
    };

    window.marbles = marblesGame;
})();
