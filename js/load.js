var loadState= {

	preload: function() {

		var loadingLabel = game.add.text(80, 150, 'loading...', {font: '30px Courier', fill: '#ffffff' });

		game.load.image('starfield',"assets/space.jpg");
		game.load.image('player',"assets/player.png");
		game.load.image('bullet',"assets/bullet.png");
		game.load.image('enemy',"assets/enemy.png");
		game.load.image('enemy1',"assets/enemy1.png");
		game.load.image('enemy2',"assets/enemy2.png");
		game.load.image('playButton',"assets/playButton.png");
		game.load.image('restartButton',"assets/restartButton.png");
		game.load.image('blank',"assets/blank.png");
		game.load.image('grapes',"assets/grapes.png");
		game.load.image('apple',"assets/apple.png");
		game.load.audio('mainMusic',"assets/mainMusic.mp3")
		game.load.audio('firing',"assets/shot.mp3");
		game.load.audio('winner',"assets/winner.mp3");
		game.load.audio('choice',"assets/choice.mp3");
		game.load.audio('fart',"assets/fart.mp3");
	},

	create: function() {

		game.state.start('menu');
	}
};