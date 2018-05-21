var choiceState = {

	create: function() {
		var spacefield=game.add.tileSprite(0,0,1900,1000,'starfield');
	//	music = game.add.audio('mainMusic');
	//	music.play('',0,1,true);
		
		choiceSound = game.add.audio('choice');
		choiceSound.play('',0,1,false);

		var board=game.add.sprite(game.world.centerX,game.world.centerY,'blank');
		board.anchor.setTo(0.5);

		var apple = game.add.sprite(game.world.centerX-150,game.world.centerY,'apple');
		apple.anchor.setTo(0.5);

		var fries = game.add.sprite(game.world.centerX+150,game.world.centerY, 'enemy');
		fries.anchor.setTo(0.5);
		fries.scale.x = 2.0;
		fries.scale.y = 2.0;

		fries.inputEnabled = true;
		fries.events.onInputDown.add(this.fart,this);

		apple.inputEnabled = true;
		apple.events.onInputDown.add(this.start,this);
	},


	start: function(){
		won = game.add.audio('winner');
		won.play('',0,1,false);
		game.state.start('play');
	},

	fart: function(){
		fart = game.add.audio('fart');
		fart.play('',0,1,false);
	}


};