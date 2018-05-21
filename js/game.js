var game= new Phaser.Game(1900,950,Phaser.CANVAS,'gameDiv');


game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('choice', choiceState);
game.state.add('play', playState);
game.state.add('choice2', choice2State);
game.state.add('win', winState);

game.state.start('boot');