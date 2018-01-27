var SideScroller = SideScroller || {};
 
SideScroller.Game = function() {};

var messageSendId = '5a6bf3de7f0cfc4ec6cc7933';
var messageGetId = '5a6bf3777f0cfc4ec6cc7932';

var mapa1 =
    "4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,\n" + 
    "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3,5,5,5,5,5,5,5,5,5,5,5,5,5,3,5,5,5,5,5,\n" + 
    "5, , , , , , , , , , , , , , , , , , , ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,5,\n" + 
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,1,0,1,5,\n" + 
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2, , , , , , ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,1,8,0,2,0,5,\n" + 
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2, ,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,2,0,2,0,5,\n" +
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,0,2,0,5,\n" +
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,1,1,2,0,5,\n" +
    "5, ,2,2,2,2,2,2,2,2,2,2,2,2, ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
    "5, ,2,2,2, , , , , , , , , , ,1,8,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,3,3,3,3,3,3,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,2,2,2,2,2,2,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,2,2,2,2,0,2,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,3,3,3,2,0,2,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
    "5, , , , , , , , ,3,2,0,2,3,3,3,2,0,2,2,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1,2,2,0,5,\n" +
    "5,0,0,0,0,0,0,0,1,3,2,0,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
    "5, , , , , ,3,3,6,3,2,0,2,1,0,0,0,1,0,0,1,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
    "5, ,2,2,2, ,3,2,1,0,0,1,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,9,5,\n" +
    "5, , , , , ,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,5,\n" +
    "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,\n" +
    "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,\n" +
    "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3";

var player;
var cursors;
var map;

SideScroller.Game.prototype = {
 
  preload: function(){
 
      //this.game.time.advancedTiming = true;
    this.load.image('background', 'img/debug-grid.png');
    this.load.spritesheet('fondos','img/Fondos_60.png', 60, 60, 10);
    this.load.image('player','img/phaser-dude.png');
    this.load.image('casa','img/casa.png');
    this.load.image('calle','img/calle.png');
    },
 
  create: function() {
      
    this.game.add.tileSprite(0, 0, 2400, 1800, 'background');
    this.game.world.setBounds(0, 0, 2400, 1800);
      
      // Mapa
    //  Add data to the cache
    this.game.cache.addTilemap('dynamicMap', null, mapa1, Phaser.Tilemap.CSV);

      //  Create our map (the 16x16 is the tile size)
    map = this.game.add.tilemap('dynamicMap', 60, 60);
      
    //  'tiles' = cache image key, 16x16 = tile size
    map.addTilesetImage('fondos', 'fondos', 60, 60);
      
      //  0 is important
    layer = map.createLayer(0);

    //  Scroll it
    layer.resizeWorld();
      
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    //this.game.physics.startSystem(Phaser.Physics.ARCADE);
      
    this.game.physics.p2.gravity.y = 0;
//      var casa;
//      
//          for(i=0;i<10;i++){
//            casa = this.game.add.sprite(30 , 30 + i * 60, 'casa');
//            this.game.physics.p2.enable(casa);
//            casa.body.static = true;
//          }
//      
//      for(i=0;i<10;i++){
//            casa = this.game.add.sprite(30 , 30 + i * 60, 'casa');
//            this.game.physics.p2.enable(casa);
//            casa.body.static = true;
//          }
      

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
      
      
    // SYncronize with the other instance
    this.game.time.events.loop(Phaser.Timer.SECOND * 2, syncronize, this, player.body.sprite.position);
   
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

function syncronize( playerPosition ) {
    
    getJsonSync(messageGetId).then(function(data) {
        console.log(data);
    });
    
    var horizontalTile = parseInt(playerPosition.x / 60);
    var verticalTile = parseInt(playerPosition.y / 60);
    postJsonSync("{'persona': '" + horizontalTile + "," + verticalTile + "'}",messageSendId).then(function(result) {
        console.log(result);
    });
}
