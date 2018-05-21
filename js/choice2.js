var choice2State = {

	create: function() {
		var spacefield=game.add.tileSprite(0,0,1900,1000,'starfield');
	//	music = game.add.audio('mainMusic');
	//	music.play('',0,1,true);
		
		choiceSound = game.add.audio('choice');
		choiceSound.play('',0,1,false);

		var board=game.add.sprite(game.world.centerX,game.world.centerY,'blank');
		board.anchor.setTo(0.5);

		var grapes = game.add.sprite(game.world.centerX-150,game.world.centerY,'grapes');
		grapes.anchor.setTo(0.5);

		var soda = game.add.sprite(game.world.centerX+150,game.world.centerY, 'enemy1');
		soda.anchor.setTo(0.5);
		soda.scale.x = 2.0;
		soda.scale.y = 2.0;

		soda.inputEnabled = true;
		soda.events.onInputDown.add(this.fart,this);

		grapes.inputEnabled = true;
		grapes.events.onInputDown.add(this.win,this);
	},


	win: function(){
		game.state.start('win');
	},

	fart: function(){
		fart = game.add.audio('fart');
		fart.play('',0,1,false);
	}


};