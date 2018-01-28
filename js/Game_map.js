var SideScroller = SideScroller || {};
 
SideScroller.Game_map = function() {};

var player;
var escavadora;
var escavadora2;
var cursors;
var map;

var messageSendId2 = '5a6bf3777f0cfc4ec6cc7932';
var messageGetId2 = '5a6bf3de7f0cfc4ec6cc7933';


//var estadoEscavadoraA2 = 0;
//var estadoEscavadoraB2 = 0;

var escavadoras = {
	escavadora1: 0,
	escavadora2: 0,
};

var counter = 0;
var counter2 = 0;
var isButton1 = false;
var isButton2 = false;


var nivelPiedras1 = 5;
var nivelPiedras2 = 5;

var riverTileXOld =0; 
var riverTileYOld = 0; 
var riverTileSpriteOld = 0; 

var music;


SideScroller.Game_map.prototype = {
 
  preload: function(){
	this.pulsaciones = 0,
	
    this.mapa = 
        "3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,30,3,3,3,3,3,3,3,3,3,3,3,3,3,30,3,3,3,3,3\n" + 
        "4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,30,4,4,4,4,4,4,4,4,4,4,4,4,4,30,4,4,4,4,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,31,31,31,31,33,0,0,0,0,0,0,0,0,0,0,0,0,0,30,10,0,0,0,4\n" + 
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,31,33,10,0,0,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,11,13,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,34,31,31,31,31,31,31,35,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10   ,0,4\n" +
        "4,0,0,0,0,0,30,0,0,0,0,0,0,30,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,30,0,0,0,0,10,0,30,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,32,31,31,35,0,10,0,30,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4\n" +
        "4,0,0,0,0,0,0,0,0,30,0,10,0,32,31,33,0,10,0,0,12,11,11,11,11,11,11,11,11,11,11,11,24,11,11,15,0,10,0,4\n" +
        "4,11,11,11,11,11,11,11,11,30,0,10,0,0,0,0,0,10,0,0,10,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,34,31,24,33,0,10,0,12,11,11,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4\n" +
        "4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,14,11,4\n" +
        "4,0,0,0,0,0,30,0,14,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,4\n" +
        "4,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,4\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5\n" +
        "5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5";
    // Mapa de prueba JSON
      
    //this.game.time.advancedTiming = true;
    this.load.spritesheet('fondos','img/Fondos_2.png', 20, 20);
    this.load.spritesheet('player','img/Player.png',20,20);
    this.game.load.image('redbutton', 'img/RedButton.png');
    },
 
  create: function() {
    
      music = game.sound.play('musica');
      
    this.game.add.tileSprite(0, 0, 60, 200, 'fondos');

    //this.game.world.setBounds(0, 0, 20, 20);
      
    // Mapa
    //  Add data to the cache
    this.game.cache.addTilemap('dynamicMap', null, this.mapa, Phaser.Tilemap.CSV);
    //this.game.cache.addTilemap('dynamicMap', null, this.mapa, Phaser.Tilemap.JSON);
      
    //console.log(this.lvl);  
      
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
      
    escavadora = this.game.add.sprite(36*20 -10, 8*20 -10, 'fondos', 7);
    this.game.physics.p2.enable(escavadora);
    escavadora.body.fixedRotation = true;
    escavadora.body.immovable = true;
      
    escavadora2 = this.game.add.sprite(17*20 -10, 14*20 -10, 'fondos', 7);
    this.game.physics.p2.enable(escavadora2);
    escavadora2.body.fixedRotation = true;
    escavadora2.body.immovable = true;
    
    this.game.physics.p2.enable(player);
    player.body.fixedRotation = true;
      
    
      

    
    
    

    cursors = this.game.input.keyboard.createCursorKeys();
    // -------------------------------------------------------

    // SYncronize with the other instance
    this.game.time.events.loop(Phaser.Timer.SECOND * 0.5, syncronizeMap, this);
    
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
        
    },
    
    
    
    
};

//functions
function syncronizeMap() {
    
    getJsonSync(messageGetId2).then(function(data) {
        jsonUpdate.persona = JSON.parse(data.name.replace(/'/g, '"')).persona.split(",");
        jsonUpdate.escavadoraA = JSON.parse(data.name.replace(/'/g, '"')).escavadoraA;
        jsonUpdate.escavadoraB = JSON.parse(data.name.replace(/'/g, '"')).escavadoraB;
        
        jsonUpdate.riverTileX = JSON.parse(data.name.replace(/'/g, '"')).riverTileX;
        
        jsonUpdate.riverTileY = JSON.parse(data.name.replace(/'/g, '"')).riverTileY;
        
        jsonUpdate.riverTileSprite = JSON.parse(data.name.replace(/'/g, '"')).riverTileSprite;
       
        
		if((jsonUpdate.escavadoraA  == 1) && (!isButton1)){
             escavadora.loadTexture('fondos', 8, false);
            isButton1 = true;
			escavadoras.escavadora1 = true;
            var image = game.add.sprite(730, 530, 'redbutton');
            image.scale.setTo(0.2,0.2);
            image.anchor.set(0.5);
            image.inputEnabled = true;
            image.events.onInputDown.add(listenerDown, this);
            image.events.onInputUp.add(listenerUp, this);
            
		}
        
        if((jsonUpdate.escavadoraB  == 1) && (!isButton2)){
             escavadora2.loadTexture('fondos', 8, false);
            isButton2 = true;
            var image = game.add.sprite(50, 530, 'redbutton');
            image.scale.setTo(0.2,0.2);
            image.anchor.set(0.5);
            image.inputEnabled = true;
            image.events.onInputDown.add(listenerDown2, this);
            image.events.onInputUp.add(listenerUp2, this);
            
		}
        
        if (jsonUpdate.riverTileX >= 0){
//        if ((jsonUpdate.riverTileX >= 0)  
//            && ((jsonUpdate.riverTileX != riverTileXOld) || (jsonUpdate.riverTileY != riverTileYOld))){
            
            riverTileXOld = jsonUpdate.riverTileX;
            riverTileY = jsonUpdate.riverTileY;
            riverTileSprite = jsonUpdate.riverTileSprite;
            
            console.log("entraaaaaaaaaaaaaaa: " + jsonUpdate.riverTileX + "Y: " + jsonUpdate.riverTileY + "sprite: "  + jsonUpdate.riverTileSprite);
        
            var agua = this.game.add.sprite(jsonUpdate.riverTileX * 20, jsonUpdate.riverTileY * 20, 'fondos', jsonUpdate.riverTileSprite*1);
            
            }

        
    });
    
    // {'escavadora': '1','rocas': '1'}
    
    
    postJsonSync("{'nivelPiedras1': '" + nivelPiedras1 + "','nivelPiedras2': '" + nivelPiedras2 + "'}",messageSendId2).then(function(result) {
        console.log(result);
    });
}

function listenerDown () {

    counter++;
    console.log(counter);
    escavadora.loadTexture('fondos', 9, false);
    if (counter == 10){
        counter = 0;
        nivelPiedras1--;
    }

}

function listenerUp () {
    escavadora.loadTexture('fondos', 8, false);
}


function listenerDown2 () {

    counter2++;
    console.log(counter2);
    escavadora2.loadTexture('fondos', 9, false);
    if (counter2 == 10){
        counter2 = 0;
        nivelPiedras2--;
    }

}

function listenerUp2 () {
    escavadora2.loadTexture('fondos', 8, false);
}




