var SideScroller = SideScroller || {};
 
SideScroller.Game = function() {};

var player;
var cursors;

SideScroller.Game.prototype = {
 
  preload: function(){
 
      //this.game.time.advancedTiming = true;
    this.load.image('background', 'img/debug-grid-1920x1920.png');
    this.load.image('player','img/phaser-dude.png');
    this.load.image('casa','img/casa.png');
    this.load.image('calle','img/calle-dude.png');
    },
 
  create: function() {
     
      
      getJsonSync().then(function(data) {
                            console.log(data);
                        });
      
      postJsonSync("{'persona':'300,200'}").then(function(result) {
                            console.log(result);
                        });
      
      
    this.game.add.tileSprite(0, 0, 1920, 1920, 'background');

    this.game.world.setBounds(0, 0, 1920, 1920);

    this.game.physics.startSystem(Phaser.Physics.P2JS);
    //this.game.physics.startSystem(Phaser.Physics.ARCADE);
      
    this.game.physics.p2.gravity.y = 0;
      var casa;
      
          for(i=0;i<10;i++){
            casa = this.game.add.sprite(30 , 30 + i * 60, 'casa');
            this.game.physics.p2.enable(casa);
            casa.body.static = true;
          }
      
      for(i=0;i<10;i++){
            casa = this.game.add.sprite(30 , 30 + i * 60, 'casa');
            this.game.physics.p2.enable(casa);
            casa.body.static = true;
          }
      

    player = this.game.add.sprite(this.game.world.centerX, this.world.centerY, 'player');
      
    this.game.physics.p2.enable(player);
      
      
      

      
    this.game.physics.p2.enable(player);

    player.body.fixedRotation = true;

    cursors = this.game.input.keyboard.createCursorKeys();

    //  Notice that the sprite doesn't have any momentum at all,
    //  it's all just set by the camera follow type.
    //  0.1 is the amount of linear interpolation to use.
    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
    this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
      
      
   
 }, 
 
  update: function() {
     player.body.setZeroVelocity();

    if (cursors.up.isDown)
    {
        player.body.moveUp(300)
    }
    else if (cursors.down.isDown)
    {
        player.body.moveDown(300);
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -300;
    }
    else if (cursors.right.isDown)
    {
        player.body.moveRight(300);
    }
            
  },
 
  render: function()
 
    {
 
              this.game.debug.cameraInfo(this.game.camera, 32, 32);
        
    }
    
    //functions
    
};
