'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const TURN_MSG = {
    EN: 'Rock, Paper, Scissors?',
    RU: 'Камень, Ножницы, Бумага?',
  };
  const USER_CHOICE = {
    EN: 'You have chosen',
    RU: 'Вы выбрали',
  };
  const COMP_CHOICE = {
    EN: 'Computer has chosen',
    RU: 'Компьютер выбрал',
  };
  const DRAW_MSG = {
    EN: 'Draw.',
    RU: 'Ничья.',
  };
  const USER_WIN_MSG = {
    EN: 'You won!',
    RU: 'Вы выиграли!',
  };
  const COMP_WIN_MSG = {
    EN: 'Computer won...',
    RU: 'Выиграл компьютер...',
  };
  const CONTINUE = {
    EN: 'Сontinue?',
    RU: 'Продолжить?',
  };
  const RESULTS = {
    EN: 'GAME RESULTS',
    RU: 'РЕЗУЛЬТАТЫ ИГРЫ',
  };
  const USER_RES = {
    EN: 'Your points',
    RU: 'Ваши баллы',
  };
  const COMP_RES = {
    EN: 'Computer points',
    RU: 'Баллы компьютера',
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const choose = (lang) => {
    const userPlay = prompt(TURN_MSG[lang]);

    if (lang === 'EN') {
      if (FIGURES_ENG[0].startsWith(userPlay.toLowerCase())) return 1;
      else if (FIGURES_ENG[1].startsWith(userPlay.toLowerCase())) return 2;
      else if (FIGURES_ENG[2].startsWith(userPlay.toLowerCase())) return 3;
      else return choose(lang);
    } else {
      if (FIGURES_RUS[0].startsWith(userPlay.toLowerCase())) return 1;
      else if (FIGURES_RUS[1].startsWith(userPlay.toLowerCase())) return 2;
      else if (FIGURES_RUS[2].startsWith(userPlay.toLowerCase())) return 3;
      else return choose(lang);
    }
  };

  const makeTurn = (lang, res) => {
    const userPlay = choose(lang);
    const compPlay = getRandomIntInclusive(1, 3);

    alert(`${USER_CHOICE[lang]}: ${lang === 'EN' ? FIGURES_ENG[userPlay - 1] : FIGURES_RUS[userPlay - 1]}.\n
    ${COMP_CHOICE[lang]}: ${lang === 'EN' ? FIGURES_ENG[compPlay - 1] : FIGURES_RUS[compPlay - 1]}.`);

    switch (userPlay) {
      case 1:
        if (compPlay === 1) {
          alert(`${DRAW_MSG[lang]}`);
          res.user += 1;
          res.comp += 1;
        } else if (compPlay === 2) {
          alert(`${USER_WIN_MSG[lang]}`);
          res.user += 1;
        } else {
          alert(`${COMP_WIN_MSG[lang]}`);
          res.comp += 1;
        }
        break;
      case 2:
        if (compPlay === 1) {
          alert(`${COMP_WIN_MSG[lang]}`);
          res.comp += 1;
        } else if (compPlay === 2) {
          alert(`${DRAW_MSG[lang]}`);
          res.user += 1;
          res.comp += 1;
        } else {
          alert(`${USER_WIN_MSG[lang]}`);
          res.user += 1;
        }
        break;
      case 3:
        if (compPlay === 1) {
          alert(`${USER_WIN_MSG[lang]}`);
          res.user += 1;
        } else if (compPlay === 2) {
          alert(`${COMP_WIN_MSG[lang]}`);
          res.comp += 1;
        } else {
          alert(`${DRAW_MSG[lang]}`);
          res.user += 1;
          res.comp += 1;
        }
    }

    const continueGame = confirm(`${CONTINUE[lang]}`);
    if (continueGame) makeTurn(lang, res);
    else {
      alert(`${RESULTS[lang]}\n${USER_RES[lang]}: ${res.user}\n${COMP_RES[lang]}: ${res.comp}`);
    }
  };

  const game = (language) => {
    if (language) {
      const res = {
        user: 0,
        comp: 0,
      };

      makeTurn(language, res);
    } else {
      const selectedLang = prompt('Выберите язык:\n\'RU / RUS\' - русский\n\'EN / ENG\' - английский');

      if (selectedLang === 'EN' || selectedLang === 'ENG') game('EN');
      else if (selectedLang === 'RU' || selectedLang === 'RUS') game('RU');
      else game();
    }
  };

  window.RPS = game;
})();
