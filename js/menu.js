var menuState = {

	create: function() {
		var spacefield=game.add.tileSprite(0,0,1900,1000,'starfield');
	//	music = game.add.audio('mainMusic');
	//	music.play('',0,1,true);
		

		
		var button1 = this.add.sprite(this.world.centerX,this.world.centerY,'playButton');
		button1.anchor.setTo(0.5);
		button1.inputEnabled = true;
		button1.events.onInputDown.add(this.choice,this);
	},


	choice: function(){
		game.state.start('choice');
	},


};