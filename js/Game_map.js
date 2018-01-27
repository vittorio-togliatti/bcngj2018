var SideScroller = SideScroller || {};
 
SideScroller.Game_map = function() {};

var player;
var cursors;
var map;

var messageSendId2 = '5a6bf3777f0cfc4ec6cc7932';
var messageGetId2 = '5a6bf3de7f0cfc4ec6cc7933';

SideScroller.Game_map.prototype = {
 
  preload: function(){
    this.mapa = 
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
        "4,4,4,4,4,4,22,2,6,21,0,10,0,12,11,11,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,1,0,14,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4\n" +
        "4,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,4\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5";
    // Mapa de prueba JSON
      
    //this.game.time.advancedTiming = true;
    this.load.spritesheet('fondos','img/Fondos_2.png', 20, 20, 30);
    this.load.spritesheet('player','img/Player.png',20,20);
    },
 
  create: function() {
      
    this.game.add.tileSprite(0, 0, 60, 200, 'fondos');

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
    player.frame = 0;

    this.game.physics.p2.enable(player);

    player.body.fixedRotation = true;

    cursors = this.game.input.keyboard.createCursorKeys();
    // -------------------------------------------------------

    // SYncronize with the other instance
    this.game.time.events.loop(Phaser.Timer.SECOND * 0.5, syncronize, this, player.body.sprite.position);
    
 }, 
 
  update: function() {
    if(jsonUpdate.persona != undefined){
        player.body.x = jsonUpdate.persona[0]*20+10;
        player.body.y = jsonUpdate.persona[1]*20+10;
    }
    
  },
 
  render: function()
 
    {
 
              //this.game.debug.cameraInfo(this.game.camera, 32, 32);
        
    }
    
    
};

//functions
function syncronize( playerPosition ) {
    
    getJsonSync(messageGetId2).then(function(data) {
        jsonUpdate.persona = JSON.parse(data.name.replace(/'/g, '"')).persona.split(",");
        console.log("MEssageGetId2", jsonUpdate);
    });
    
    // {'escavadora': '1','rocas': '1'}
    
    /*var horizontalTile = parseInt(playerPosition.x);
    var verticalTile = parseInt(playerPosition.y);
    postJsonSync("{'persona': '" + horizontalTile + "," + verticalTile + "'}",messageSendId2).then(function(result) {
        console.log(result);
    });*/
}


