var SideScroller = SideScroller || {};
 
SideScroller.Game = function() {};
var jsonUpdate = {};
var messageSendId = '5a6bf3de7f0cfc4ec6cc7933';
var messageGetId = '5a6bf3777f0cfc4ec6cc7932';

var mapaJson = {'mapa': [[4,4],[4,4]]};
    
var mapaJson = {'mapa':
        [[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3], 
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,2,2,2,2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,2,21,10,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,11,13,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,22,2,2,2,2,2,2,23,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10   ,0,4],
        [4,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,1,0,0,0,0,10,0,1,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,20,2,2,23,0,10,0,1,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,0,0,0,1,0,10,0,20,2,21,0,10,0,0,12,11,11,11,11,11,11,11,11,11,11,11,6,11,11,15,0,10,0,4],
        [4,11,11,11,11,11,11,11,11,1,0,10,0,0,0,0,0,10,0,0,10,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,22,2,6,21,0,10,0,12,11,11,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,1,0,14,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,14,11,4],
        [4,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]]};

        

var mapa1 =
    "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3,3,3,3,3,3,3,3,3,1,3,3,3,3,3\n" + 
        "4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4,4,4,4,4,4,4,4,4,1,4,4,4,4,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,2,2,2,2,21,0,0,0,0,0,0,0,0,0,0,0,0,0,1,10,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,22,2,21,10,0,0,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,11,13,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,22,2,2,2,2,2,2,23,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10   ,0,4\n" +
        "4,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,0,0,0,10,0,1,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,20,2,2,23,0,10,0,1,0,1,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,0,0,0,1,0,10,0,20,2,21,0,10,0,0,12,11,11,11,11,11,11,11,11,11,11,11,6,11,11,15,0,10,0,4\n" +
        "4,11,11,11,11,11,11,11,11,1,0,10,0,0,0,0,0,10,0,0,10,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,22,2,6,21,0,10,0,12,11,11,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,14,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,14,11,4\n" +
        "4,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5";

var player;
var cursors;
var map;

SideScroller.Game.prototype = {
 
  preload: function(){
 
      //this.game.time.advancedTiming = true;
    this.load.image('background', 'img/debug-grid.png');
    this.load.spritesheet('fondos','img/Fondos_60.png', 60, 60, 10);
      
    // this.load.image('player','img/phaser-dude.png');
    this.load.spritesheet('player','img/Player_60.png', 60, 60);
      
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
      
        var tile;
          
        for(y=0;y<mapaJson.mapa.length;y++){
              for (x=0;x<mapaJson.mapa[y].length;x++){
                  if (mapaJson.mapa[y][x] == 0){
                    tile = this.game.add.sprite(x * 60 +30, y * 60 +30, 'fondos', 0);
                    this.game.physics.p2.enable(tile);
                    tile.body.static = true;
                  } else if(mapaJson.mapa[y][x] == 1){
                    tile = this.game.add.sprite(x * 60 +30, y * 60 +30, 'fondos', 1);
                    this.game.physics.p2.enable(tile);
                    tile.body.static = true;
                  }
                    
              }
            
          }
//      
//      for(i=0;i<10;i++){
//            casa = this.game.add.sprite(30 , 30 + i * 60, 'casa');
//            this.game.physics.p2.enable(casa);
//            casa.body.static = true;
//          }
      

    player = this.game.add.sprite(2360, 0, 'player');
    player.animations.add('down', [0, 1], 10, true);
    player.animations.add('right', [2, 3], 10, true);
    player.animations.add('left', [4, 5], 10, true);
    player.animations.add('up', [6, 7], 10, true);
      
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
    this.game.time.events.loop(Phaser.Timer.SECOND * 2, syncronizeGame, this, player.body.sprite.position);
   
 }, 
 
  update: function() {
     player.body.setZeroVelocity();

    // Animations
    if (cursors.left.isDown) {
        player.animations.play('left');
    } else if (cursors.right.isDown) {
        player.animations.play('right');
    } else if (cursors.up.isDown) {
        player.animations.play('up');
    } else if (cursors.down.isDown) {
        player.animations.play('down');
    } else {
        player.animations.stop();
        player.frame = 0;
    }
      
    // Movement
    if (cursors.up.isDown) {
        player.body.moveUp(300);
    } else if (cursors.down.isDown) {
        player.body.moveDown(300);
    }
    if (cursors.left.isDown) {
        player.body.moveLeft(300);
    } else if (cursors.right.isDown) {
        player.body.moveRight(300);
    }
    
    var nivelPiedras = jsonUpdate.piedras;
    var estadoEscavadora = jsonUpdate.escavadora;
      
    //aqui va el codigo de actualizacion remota
      
  },
 
  render: function()
 
    {
        this.game.debug.cameraInfo(this.game.camera, 32, 32);   
    }
    
    //functions
    
};

function syncronizeGame( playerPosition ) {
    
    getJsonSync(messageGetId).then(function(data) {
        console.log(" ****** DATA: ", data);
         
        var dataFake = {"name":"{'escavadora': '1','piedras': '1'}"};
        
        jsonUpdate.escavadora = JSON.parse(dataFake.name.replace(/'/g, '"')).escavadora;
        jsonUpdate.piedras = JSON.parse(dataFake.name.replace(/'/g, '"')).piedras;
        
        console.log(" ****** messageGetId: ", jsonUpdate);
    });
    
    var horizontalTile = parseInt(playerPosition.x / 60);
    var verticalTile = parseInt(playerPosition.y / 60);
    
    postJsonSync("{'persona': '" + horizontalTile + "," + verticalTile + "'}",messageSendId).then(function(result) {
        console.log(result);
    });
}
