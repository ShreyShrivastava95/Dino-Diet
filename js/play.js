//var game= new Phaser.Game(1900,1000,Phaser.CANVAS,'gameDiv');

var spacefield;

var backgroundv=1;

var player;

var cursors;

var bullets;
var bulletTime=0;
var fireButton;

var enemies;
var enemies1;
var enemies2;

var score = 0;

var scoreText;


var playState = {


	create:function(){
		spacefield=game.add.tileSprite(0,0,1900,1000,'starfield');
		
			music = game.add.audio('mainMusic');
			music.play('',0,1,true);
			//Add firing sound
			shooting = game.add.audio('firing');
			
			//Create player
			player=game.add.sprite(game.world.centerX,game.world.centerY+200,'player');
			game.physics.enable(player,Phaser.Physics.ARCADE);

			//Create bullets
			bullets=game.add.group();
			bullets.enableBody=true;
			bullets.physicsBodyType=Phaser.Physics.ARCADE;
			bullets.createMultiple(30,'bullet');
			bullets.setAll('anchor.x',0.5);
			bullets.setAll('anchor.y',1);
			bullets.setAll('outOfBoundsKill',true);
			bullets.setAll('checkWorldBounds',true);

			//Enable the player to be dragged
			player.inputEnabled = true;
			player.input.enableDrag();


			//Group the enemies(french fries)
			enemies=game.add.group();
			enemies.enableBody=true;
			enemies.physicsBodyType=Phaser.Physics.ARCADE;
			//Group the enemies1(soda)
			enemies1=game.add.group();
			enemies1.enableBody=true;
			enemies1.physicsBodyType=Phaser.Physics.ARCADE;
			//Group the enemies2(pizza)
			enemies2=game.add.group();
			enemies2.enableBody=true;
			enemies2.physicsBodyType=Phaser.Physics.ARCADE;
			//Spawn first wave
			createEnemies();
			
			//Add restart button
			var button3 = this.add.sprite(100,800,'restartButton');
			button3.scale.x = 0.2;
			button3.scale.y = 0.2;
			button3.anchor.setTo(0.5);
			button3.inputEnabled = true;
			button3.events.onInputDown.add(restart,this);
			//Add score
			scoreText = game.add.text(0,850,'Score:',{font: '32px Arial',fill: '#ffb900',fontweight: '20'});
	},

	update:function(){
		//Initialize the event of overlapping the enemies and bullets
		game.physics.arcade.overlap(bullets,enemies,collisionHandler,null,this);
		game.physics.arcade.overlap(bullets,enemies1,collisionHandler1,null,this);
		game.physics.arcade.overlap(bullets,enemies2,collisionHandler2,null,this);
		//set initial movement
		player.body.velocity.x=0;
		//set background speed
		spacefield.tilePosition.y+=backgroundv;
		player.events.onDragStart.add(fireBullet, this);

		//Fire if the pointer is clicked
		if(game.input.activePointer.isDown){
			fireBullet();
		}

	//Add the integer score to the string
	scoreText.text = 'Score:' + score;
	//Initialize second wave of enemies after a certain score
	if(score == 3200){
		createEnemies1();
		score = 3201;
	}
	//Initialize second wave of enemies after a certain score
	if(score == 6401){
		createEnemies2();
		score = 6402;
	}
	//Go to win state after certain score reached
	if(score == 9602){
		scoreText.visible = false;
		game.state.start('choice2');
	}
	
	}
	
}

function restart(){
	score = 0;
	game.state.start('menu');
}

function fireBullet(){
	if(game.time.now>bulletTime){
		bullet = bullets.getFirstExists(false);

		if(bullet){
			bullet.reset(player.x+50,player.y);
			bullet.body.velocity.y=-400;
			bulletTime=game.time.now+200;
			shooting.play('',0,0.5,false);
		}
	}	
}

function createEnemies(){
	for(var y=0; y<4; y++){
		for(var x=0; x<8; x++){
			var enemy = enemies.create(x*75,y*50,'enemy');
			enemy.anchor.setTo(0.5,0.5);
		}
	}

	enemies.x=100;
	enemies.y=50;

	var tween=game.add.tween(enemies).to({x:1000},10000, Phaser.Easing.Linear.None,true,0,1000,true);
	tween.onRepeat.add(descend,this);
}

function createEnemies1(){
	for(var y=0; y<4; y++){
		for(var x=0; x<8; x++){
			var enemy1 = enemies1.create(x*75,y*50,'enemy1');
			enemy1.anchor.setTo(0.5,0.5);
		}
	}

	enemies1.x=100;
	enemies1.y=50;

	var tween=game.add.tween(enemies1).to({x:1000},10000, Phaser.Easing.Linear.None,true,0,1000,true);
	tween.onRepeat.add(descend1,this);
}

function createEnemies2(){
	for(var y=0; y<4; y++){
		for(var x=0; x<8; x++){
			var enemy2 = enemies2.create(x*75,y*50,'enemy2');
			enemy2.anchor.setTo(0.5,0.5);
		}
	}

	enemies2.x=100;
	enemies2.y=50;

	var tween=game.add.tween(enemies2).to({x:1000},10000, Phaser.Easing.Linear.None,true,0,1000,true);
	tween.onRepeat.add(descend2,this);
}
function restart() {
		game.state.start('menu');
	}

function descend(){
	enemies.y+=50;
}

function descend1(){
	enemies1.y+=50;
}

function descend2(){
	enemies2.y+=50;
}

function collisionHandler(bullet,enemy){
	bullet.kill();
	enemy.kill();

	score += 100;
}

function collisionHandler1(bullet,enemy1){
	bullet.kill();
	enemy1.kill();

	score += 100;
}

function collisionHandler2(bullet,enemy2){
	bullet.kill();
	enemy2.kill();

	score += 100;
}