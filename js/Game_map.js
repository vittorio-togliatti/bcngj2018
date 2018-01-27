var SideScroller = SideScroller || {};
 
SideScroller.Game_map = function() {};

var player;
var cursors;
var map;

SideScroller.Game_map.prototype = {
 
  preload: function(){
    this.mapa = 
        "4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,4,4,4,4,4,4,4,4,3,4,4,4,4,4,\n" + 
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,3,5,5,5,5,5,5,5,5,5,5,5,5,5,3,5,5,5,5,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,1,0,1,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,1,8,0,2,0,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,0,2,0,5,\n" + 
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,2,0,2,0,5,\n" +
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,0,2,0,5,\n" +
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,1,1,2,0,5,\n" +
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
        "5,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,8,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,3,3,3,3,3,3,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,2,2,2,2,2,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,2,2,2,0,2,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,3,3,3,2,0,2,3,2,3,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,0,2,2,0,5,\n" +
        "5,2,2,2,2,2,2,2,2,3,2,0,2,3,3,3,2,0,2,2,1,0,0,0,0,0,0,0,0,0,0,0,6,0,0,1,2,2,0,5,\n" +
        "5,0,0,0,0,0,0,0,1,3,2,0,2,2,2,2,2,0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,3,6,3,2,0,2,1,0,0,0,1,0,0,1,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,0,2,2,0,2,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,1,0,0,1,0,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,0,5,\n" +
        "5,2,2,2,2,2,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,2,2,2,2,5,\n" +
        "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,\n" +
        "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,\n" +
        "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3";
    // Mapa de prueba JSON
      
    //this.game.time.advancedTiming = true;
    this.load.image('background', 'img/Fondos.png');
    this.load.spritesheet('fondos','img/Fondos.png', 20, 20, 10);
    this.load.image('player','img/Player.png');
    },
 
  create: function() {
    this.game.add.tileSprite(0, 0, 20, 200, 'background');

    //this.game.world.setBounds(0, 0, 20, 20);
      
    // Mapa
    //  Add data to the cache
    this.game.cache.addTilemap('dynamicMap', null, this.mapa, Phaser.Tilemap.CSV);
    //this.game.cache.addTilemap('dynamicMap', null, this.mapa, Phaser.Tilemap.JSON);
      
    console.log(this.lvl);  
      
    //  Create our map (the 16x16 is the tile size)
    map = this.game.add.tilemap('dynamicMap', 20, 20);

    //  'tiles' = cache image key, 16x16 = tile size
    map.addTilesetImage('fondos', 'fondos', 20, 20);

    //  0 is important
    layer = map.createLayer(0);

    //  Scroll it
    layer.resizeWorld();  

    this.game.physics.startSystem(Phaser.Physics.P2JS);
    //this.game.physics.startSystem(Phaser.Physics.ARCADE);

    //player = this.game.add.sprite(58*20, 55*20, 'background');
    //this.game.add.sprite(58*20, 55*20, 'background');

    //this.game.physics.p2.enable(player);

    //player.body.fixedRotation = true;
      
    // -------------------------------------------------------
    player = this.game.add.sprite(38*20, 25*20, 'player');

    this.game.physics.p2.enable(player);

    player.body.fixedRotation = true;

    cursors = this.game.input.keyboard.createCursorKeys();
    // -------------------------------------------------------

    //  Notice that the sprite doesn't have any momentum at all,
    //  it's all just set by the camera follow type.
    //  0.1 is the amount of linear interpolation to use.
    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
    //this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
    
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
 
              //this.game.debug.cameraInfo(this.game.camera, 32, 32);
        
    }
    
    //functions
    
};


