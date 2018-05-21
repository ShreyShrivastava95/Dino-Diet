var winState = {

	create: function() {
		var spacefield=game.add.tileSprite(0,0,1900,1000,'starfield');
		var winLabel = game.add.text(game.world.centerX-200,game.world.centerY-400, 'W I N N E R', {font: '80px Arial', fill:'#ffb900'});
		var scoreLabel = game.add.text(game.world.centerX-250,game.world.centerY-200, 'Your score was 9602!', {font: '50px Arial',fill: '#ffb900' });
		won = game.add.audio('winner');
		won.play('',0,1,true);
		var button2 = this.add.sprite(this.world.centerX,this.world.centerY+100,'restartButton');
		button2.anchor.setTo(0.5);
		button2.inputEnabled = true;
		button2.events.onInputDown.add(this.restart,this);
	//	endTime = this.time.now;
	//	var totalTime = endTime-startTime;
	//	game.add.text(100,100,totalTime);
	},

	restart: function() {
		won.stop();
		score = 0;
		game.state.start('menu');
	},

}