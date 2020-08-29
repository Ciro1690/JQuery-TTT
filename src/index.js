const View = require("/Users/cheers/Desktop/Coding/JS/TTT/skeleton/src/ttt-view")// require appropriate file
const Game = require("/Users/cheers/Desktop/Coding/JS/TTT/solution 2/game")// require appropriate file


  $(() => {
    const rootEl = $('.ttt');
    const g = new Game();
    new View(g, rootEl);
  });
