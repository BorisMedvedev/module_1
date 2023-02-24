'use strict';

(() => {
  const LOCALIZATION = {
    EN: {
      FIGURES: ['rock', 'scissors', 'paper'],
      TURN_MSG: 'Rock, Paper, Scissors?',
      USER_CHOICE: 'You have chosen',
      COMP_CHOICE: 'Computer has chosen',
      USER_WIN_MSG: 'You won!',
      DRAW_MSG: 'Draw.',
      COMP_WIN_MSG: 'Computer won...',
      CONTINUE: 'Сontinue?',
      RESULTS: 'GAME RESULTS',
      USER_RES: 'Your wins',
      DRAW_RES: 'Draws',
      COMP_RES: 'Computer wins',
      QUIT: 'Do you really want to quit?',
    },

    RU: {
      FIGURES: ['камень', 'ножницы', 'бумага'],
      TURN_MSG: 'Камень, Ножницы, Бумага?',
      USER_CHOICE: 'Вы выбрали',
      COMP_CHOICE: 'Компьютер выбрал',
      USER_WIN_MSG: 'Вы выиграли!',
      DRAW_MSG: 'Ничья.',
      COMP_WIN_MSG: 'Выиграл компьютер...',
      CONTINUE: 'Продолжить?',
      RESULTS: 'РЕЗУЛЬТАТЫ ИГРЫ',
      USER_RES: 'Ваши победы',
      DRAW_RES: 'Ничьи',
      COMP_RES: 'Победы компьютера',
      QUIT: 'Вы действительно хотите выйти?',
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const choose = (lang) => {
    const userPlay = prompt(LOCALIZATION[lang].TURN_MSG);

    if (userPlay === null) return null;
    else if (LOCALIZATION[lang].FIGURES[0].startsWith(userPlay.toLowerCase()))
      return 0;
    else if (LOCALIZATION[lang].FIGURES[1].startsWith(userPlay.toLowerCase()))
      return 1;
    else if (LOCALIZATION[lang].FIGURES[2].startsWith(userPlay.toLowerCase()))
      return 2;
    else return choose(lang);
  };

  const showResults = (lang, res) => {
    alert(`${LOCALIZATION[lang].RESULTS}\n
    ${LOCALIZATION[lang].USER_RES}: ${res.user}\n
    ${LOCALIZATION[lang].DRAW_RES}: ${res.draw}\n
    ${LOCALIZATION[lang].COMP_RES}: ${res.comp}`);
  };

  const makeTurn = (lang, res) => {
    const userPlay = choose(lang);
    const compPlay = getRandomIntInclusive(0, 2);

    if (userPlay === null) {
      if (!confirm(LOCALIZATION[lang].QUIT)) makeTurn(lang, res);
      else showResults(lang, res);
    } else {
      alert(`${LOCALIZATION[lang].USER_CHOICE}: ${LOCALIZATION[lang].FIGURES[userPlay]}.\n
      ${LOCALIZATION[lang].COMP_CHOICE}: ${LOCALIZATION[lang].FIGURES[compPlay]}.`);

      if (compPlay === userPlay + 1 || (userPlay === 2 && compPlay === 0)) {
        alert(LOCALIZATION[lang].USER_WIN_MSG);
        res.user += 1;
      } else if (compPlay === userPlay) {
        alert(LOCALIZATION[lang].DRAW_MSG);
        res.draw += 1;
      } else {
        alert(LOCALIZATION[lang].COMP_WIN_MSG);
        res.comp += 1;
      }

      if (confirm(LOCALIZATION[lang].CONTINUE)) makeTurn(lang, res);
      else if (!confirm(LOCALIZATION[lang].QUIT)) makeTurn(lang, res);
      else showResults(lang, res);
    }
  };

  const game = (language) => {
    if (language) {
      const res = {
        user: 0,
        draw: 0,
        comp: 0,
      };

      makeTurn(language, res);
    } else {
      const selectedLang = prompt(
        "Выберите язык:\n'RU / RUS' - русский\n'EN / ENG' - английский"
      );

      if (selectedLang === null) {
        if (!confirm(LOCALIZATION.RU.QUIT)) game();
      } else if (
        'ENG'.startsWith(selectedLang.toUpperCase()) &&
        selectedLang !== ''
      )
        game('EN');
      else if (
        'RUS'.startsWith(selectedLang.toUpperCase()) &&
        selectedLang !== ''
      )
        game('RU');
      else game();
    }
  };

  window.RPS = game;
})();
