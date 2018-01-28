var SideScroller = SideScroller || {};
 
SideScroller.Game = function() {};
var jsonUpdate = {};
var messageSendId = '5a6bf3de7f0cfc4ec6cc7933';
var messageGetId = '5a6bf3777f0cfc4ec6cc7932';

var estadoEscavadoraA = 0;
var estadoEscavadoraB = 0;

var rocksDestroyed1 = rocksDestroyed2 = false;
var isBarco1 = false;
var isBarco2 = false;

var mapaJson = {'mapa': [[4,4],[4,4]]};
    
var mapaJson = {'mapa':
        [[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,30,3,3,3,3,3,3,3,3,3,3,3,3,3,30,3,3,3,3,3], 
        [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,30,4,4,4,4,4,4,4,4,4,4,4,4,4,30,4,4,4,4,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,31,31,31,31,33,0,0,0,0,0,0,0,0,0,0,0,0,0,30,10,0,0,0,4], 
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,34,31,33,10,0,0,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,11,13,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,7,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,34,31,31,31,31,31,31,35,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10   ,0,4],
        [4,0,0,0,0,0,30,0,0,0,0,0,0,30,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,30,0,0,0,0,10,0,30,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,32,31,31,35,0,10,0,30,0,30,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,10,0,10,0,4],
        [4,0,0,0,0,0,0,0,0,30,0,10,0,32,31,33,0,10,0,0,12,11,11,11,11,11,11,11,11,11,11,11,24,11,11,15,0,10,0,4],
        [4,11,11,11,11,11,11,11,11,30,0,10,0,0,0,0,0,10,0,0,10,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,34,31,24,33,0,10,0,12,11,11,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,10,0,4],
        [4,0,0,0,0,0,30,0,10,0,0,10,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,14,11,4],
        [4,0,0,0,0,0,30,0,14,11,11,11,11,15,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,4],
        [4,0,0,0,0,0,30,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,30,0,0,0,0,0,0,4],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5],
        [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5]]};

       

        

var mapa1 =
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

var rivers = [
    {
        river: 1,
        tracks: [
            {
                track: 1,
                tiles: [
                    { x: 20, y: 0, initial: 30, animated: 1 },
                    { x: 20, y: 1, initial: 30, animated: 1 },
                    { x: 20, y: 2, initial: 30, animated: 1 },
                    { x: 20, y: 3, initial: 30, animated: 1 },
                    { x: 20, y: 4, initial: 30, animated: 1 },
                    { x: 20, y: 5, initial: 30, animated: 1 },
                    { x: 20, y: 6, initial: 30, animated: 1 },
                    { x: 20, y: 7, initial: 30, animated: 1 },
                    { x: 20, y: 8, initial: 33, animated: 21 },
                    { x: 19, y: 8, initial: 31, animated: 2 },
                    { x: 18, y: 8, initial: 31, animated: 2 },
                    { x: 17, y: 8, initial: 31, animated: 2 },
                    { x: 16, y: 8, initial: 31, animated: 2 },
                    { x: 15, y: 8, initial: 34, animated: 22 },
                    { x: 15, y: 9, initial: 30, animated: 1 },
                    { x: 15, y: 10, initial: 30, animated: 1 },
                    { x: 15, y: 11, initial: 30, animated: 1 },
                    { x: 15, y: 12, initial: 30, animated: 1 },
                    { x: 15, y: 13, initial: 30, animated: 1 }
                ]
            },
            {
                track: 2,
                tiles: [
                    { x: 15, y: 14, initial: 30, animated: 1 },
                    { x: 15, y: 15, initial: 30, animated: 1 },
                    { x: 15, y: 16, initial: 30, animated: 1 },
                    { x: 15, y: 17, initial: 30, animated: 1 },
                    { x: 15, y: 18, initial: 33, animated: 21 },
                    { x: 14, y: 18, initial: 31, animated: 2 },
                    { x: 13, y: 18, initial: 32, animated: 20 },
                    { x: 13, y: 17, initial: 30, animated: 1 },
                    { x: 13, y: 16, initial: 30, animated: 1 },
                    { x: 13, y: 15, initial: 30, animated: 1 },
                    { x: 13, y: 14, initial: 35, animated: 23 },
                    { x: 12, y: 14, initial: 31, animated: 2 },
                    { x: 11, y: 14, initial: 31, animated: 2 },
                    { x: 10, y: 14, initial: 31, animated: 2 },
                    { x: 9, y: 14, initial: 31, animated: 2 },
                    { x: 8, y: 14, initial: 31, animated: 2 },
                    { x: 7, y: 14, initial: 31, animated: 2 },
                    { x: 6, y: 14, initial: 34, animated: 22 },
                    { x: 6, y: 15, initial: 30, animated: 1 },
                    { x: 6, y: 16, initial: 30, animated: 1 },
                    { x: 6, y: 17, initial: 32, animated: 20 },
                    { x: 7, y: 17, initial: 31, animated: 2 },
                    { x: 8, y: 17, initial: 31, animated: 2 },
                    { x: 9, y: 17, initial: 35, animated: 23 },
                    { x: 9, y: 18, initial: 30, animated: 1 },
                    { x: 9, y: 19, initial: 30, animated: 1 },
                    { x: 9, y: 20, initial: 33, animated: 21 },
                    { x: 8, y: 20, initial: 24, animated: 6 },
                    { x: 7, y: 20, initial: 31, animated: 2 },
                    { x: 6, y: 20, initial: 34, animated: 22 },
                    { x: 6, y: 21, initial: 30, animated: 1 },
                    { x: 6, y: 22, initial: 30, animated: 1 },
                    { x: 6, y: 23, initial: 30, animated: 1 },
                    { x: 6, y: 24, initial: 30, animated: 1 },
                    { x: 6, y: 25, initial: 30, animated: 1 },
                    { x: 6, y: 26, initial: 30, animated: 1 }
                ]
            }
        ]
    },
    {
        river: 2,
        tracks: [
            {
                track: 1,
                tiles: [
                    { x: 34, y: 0, initial: 30, animated: 1 },
                    { x: 34, y: 1, initial: 30, animated: 1 },
                    { x: 34, y: 2, initial: 30, animated: 1 },
                    { x: 34, y: 3, initial: 30, animated: 1 },
                    { x: 34, y: 4, initial: 30, animated: 1 },
                    { x: 34, y: 5, initial: 30, animated: 1 },
                    { x: 34, y: 6, initial: 30, animated: 1 }
                ]
            },
            {
                track: 2,
                tiles: [
                    { x: 34, y: 7, initial: 19, animated: 1 },
                    { x: 34, y: 8, initial: 30, animated: 1 },
                    { x: 34, y: 9, initial: 33, animated: 21 },
                    { x: 33, y: 9, initial: 31, animated: 2 },
                    { x: 32, y: 9, initial: 34, animated: 22 },
                    { x: 32, y: 10, initial: 30, animated: 1 },
                    { x: 32, y: 11, initial: 30, animated: 1 },
                    { x: 32, y: 12, initial: 30, animated: 1 },
                    { x: 32, y: 13, initial: 30, animated: 1 },
                    { x: 32, y: 14, initial: 30, animated: 1 },
                    { x: 32, y: 15, initial: 30, animated: 1 },
                    { x: 32, y: 16, initial: 30, animated: 1 },
                    { x: 32, y: 17, initial: 30, animated: 1 },
                    { x: 32, y: 18, initial: 24, animated: 6 },
                    { x: 32, y: 19, initial: 30, animated: 1 },
                    { x: 32, y: 20, initial: 30, animated: 1 },
                    { x: 32, y: 21, initial: 30, animated: 1 },
                    { x: 32, y: 22, initial: 30, animated: 1 },
                    { x: 32, y: 23, initial: 30, animated: 1 },
                    { x: 32, y: 24, initial: 30, animated: 1 },
                    { x: 32, y: 25, initial: 30, animated: 1 },
                    { x: 32, y: 26, initial: 30, animated: 1 }
                ]
            }
        ]
    }
];

var player;
var cursors;
var map;

var loopResult;
var riverTiles = [];
var currentTile = 0;

var riverTileX, riverTileY, riverTileSprite;

SideScroller.Game.prototype = {
 
  preload: function(){
    this.load.image('background', 'img/debug-grid.png');
    this.load.spritesheet('fondos','img/Fondos_60.png', 60, 60);
    this.load.spritesheet('player','img/Player_60.png', 60, 60);
    this.load.image('casa','img/casa.png');
    this.load.image('calle','img/calle.png');
  },
 
  create: function() {
      
    this.game.add.tileSprite(0, 0, 2400, 1800, 'background');
    this.game.world.setBounds(0, 0, 2400, 1800);
      
    // Mapa
    // Add data to the cache
    this.game.cache.addTilemap('dynamicMap', null, mapa1, Phaser.Tilemap.CSV);

    //  Create our map (the 16x16 is the tile size)
    map = this.game.add.tilemap('dynamicMap', 60, 60);
      
    // 'tiles' = cache image key, 16x16 = tile size
    map.addTilesetImage('fondos', 'fondos', 60, 60);
      
    // 0 is important
    layer = map.createLayer(0);

    // Scroll it
    layer.resizeWorld();
      
    this.game.physics.startSystem(Phaser.Physics.P2JS);
    this.game.physics.p2.setImpactEvents( true );
    this.game.physics.p2.gravity.y = 0;
      
    var tile;
      
    // Collision groups
    this.hombreCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.escavadorasCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.barcosCollisionGroup = this.game.physics.p2.createCollisionGroup();
    this.objectsCollisionGroup = this.game.physics.p2.createCollisionGroup();
      
    this.game.physics.p2.updateBoundsCollisionGroup();
    
    // Groups
    this.escavadoras = this.game.add.group();
    this.barcos = this.game.add.group();
    this.objects = this.game.add.group();
      
      
    for(y=0;y<mapaJson.mapa.length;y++){
          for (x=0;x<mapaJson.mapa[y].length;x++){
              if (mapaJson.mapa[y][x] == 0){
                tile = this.objects.create(x * 60 + 30, y * 60 + 30, 'fondos', 0);
                this.game.physics.p2.enable( [ tile ], false );
			    tile.body.static = true;
                tile.body.setCollisionGroup( this.objectsCollisionGroup );
                tile.body.collides([this.hombreCollisionGroup]);
                  
                
              } else if(mapaJson.mapa[y][x] == 24){
                  var barco = this.barcos.create(x * 60 + 30,y * 60 + 30, 'fondos', mapaJson.mapa[y][x]);
                    this.game.physics.p2.enable([barco], false);
                    barco.body.static = true;
                    barco.body.setCollisionGroup( this.barcosCollisionGroup );
                    barco.body.collides([this.hombreCollisionGroup], this.mataBarco, this);
                  
                  
              }else if((mapaJson.mapa[y][x] == 1 ) 
                        || (mapaJson.mapa[y][x] == 5) 
                        || (mapaJson.mapa[y][x] == 21)
                        || (mapaJson.mapa[y][x] == 22)
                        || (mapaJson.mapa[y][x] == 2)
                       // || (mapaJson.mapa[y][x] == 24)
                        || (mapaJson.mapa[y][x] == 30)
                       || (mapaJson.mapa[y][x] == 34)
                       || (mapaJson.mapa[y][x] == 31)
                       || (mapaJson.mapa[y][x] == 33)){
                  tile = this.objects.create(x * 60 + 30, y * 60 + 30, 'fondos', mapaJson.mapa[y][x]);
                  this.game.physics.p2.enable( [ tile ], false );
			      tile.body.static = true;
                  tile.body.setCollisionGroup( this.objectsCollisionGroup );
                  tile.body.collides([this.hombreCollisionGroup]);
                  
              }  else if (mapaJson.mapa[y][x] == 7){

                    var escavadora = this.escavadoras.create(x * 60 + 30,y * 60 + 30, 'fondos', 7);
                    this.game.physics.p2.enable([escavadora], false);
                    escavadora.body.static = true;
                    escavadora.body.setCollisionGroup( this.escavadorasCollisionGroup );
                    escavadora.body.collides([this.hombreCollisionGroup], this.activaEscavadora, this);
              }
          }
      }
      
    player = this.game.add.sprite(39 * 60 - 30, 1 * 60 - 30, 'player');
    player.animations.add('down', [0, 1], 10, true);
    player.animations.add('right', [2, 3], 10, true);
    player.animations.add('left', [4, 5], 10, true);
    player.animations.add('up', [6, 7], 10, true);
    this.game.physics.p2.enable(player);
    player.body.fixedRotation = true;
    player.body.collides([this.escavadorasCollisionGroup,this.barcosCollisionGroup,this.objectsCollisionGroup]);
    player.body.setCollisionGroup( this.hombreCollisionGroup );



    cursors = this.game.input.keyboard.createCursorKeys();

    //  Notice that the sprite doesn't have any momentum at all,
    //  it's all just set by the camera follow type.
    //  0.1 is the amount of linear interpolation to use.
    //  The smaller the value, the smooth the camera (and the longer it takes to catch up)
    this.game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);
      
    // Syncronize with the other instance
    this.game.time.events.loop(Phaser.Timer.SECOND * 0.5, syncronizeGame, this, player.body.sprite.position);
      
    // Water flow
    activateRiversTrack(0, 1);
      
    // SYncronize with the other instance
    this.game.time.events.loop(Phaser.Timer.SECOND * 0.5, syncronizeGame, this, player.body.sprite.position);
   
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
    
    var nivelPiedras1 = jsonUpdate.nivelPiedras1;
    var nivelPiedras2 = jsonUpdate.nivelPiedras2;
    var estadoEscavadora = jsonUpdate.escavadora;
      
    if (estadoEscavadora == 2){//esta escavando
        
        } 
      
    //aqui va el codigo de actualizacion remota
      
      
      if(currentTile === 0 && riverTiles.length === 0) {
          this.game.time.events.remove(loopResult);
      }
      
  },
 
  render: function()
 
    {
        //this.game.debug.cameraInfo(this.game.camera, 32, 32);   
    },
    
activaEscavadora: function(escavadora, hombre)
 
    {
        escavadora.sprite.loadTexture('fondos', 8, false);

            if (escavadora.sprite.x > 1200){
                    estadoEscavadoraA = 1;
                } else if(escavadora.sprite.x < 1200) { 
                    estadoEscavadoraB = 1;
            }
        
    },
    
    mataBarco: function(barco, hombre)
    
    {
        if (isBarco1 && (player.x > 1200)){
            barco.sprite.destroy();
        } 
        
        if (isBarco2){
                barco.sprite.destroy();
            }
    }
    
    
};


function syncronizeGame( playerPosition ) {
    
    getJsonSync(messageGetId).then(function(data) {
        
        jsonUpdate.escavadora = JSON.parse(data.name.replace(/'/g, '"')).escavadora;
        jsonUpdate.nivelPiedras1 = JSON.parse(data.name.replace(/'/g, '"')).nivelPiedras1;
        jsonUpdate.nivelPiedras2 = JSON.parse(data.name.replace(/'/g, '"')).nivelPiedras2;
        
        if(jsonUpdate.nivelPiedras1 <= 0 && !rocksDestroyed1) {
            rocksDestroyed1 = true;
            activateRiversTrack(1, 1);
        }
        
        if(jsonUpdate.nivelPiedras2 <= 0 && !rocksDestroyed2) {
            rocksDestroyed2 = true;
            activateRiversTrack(1, 0);
        }
        
    });
    
    var horizontalTile = parseInt(playerPosition.x / 60);
    var verticalTile = parseInt(playerPosition.y / 60);
    
    postJsonSync("{'persona': '" + horizontalTile + "," + verticalTile + "','escavadoraA': '" + estadoEscavadoraA 
                 + "','escavadoraB': '" + estadoEscavadoraB + "'}",messageSendId).then(function(result) {
        
        //console.log(result);

    });
}

function activateRiversTrack( trackId, riverId ) {
    
    riverTiles = rivers[riverId].tracks[trackId].tiles;
    
    loopResult = this.game.time.events.loop(Phaser.Timer.SECOND * 2, animateWaterTile, this);
    
}

function animateWaterTile() {
    
    riverTileX = riverTiles[currentTile].x;
    riverTileY = riverTiles[currentTile].y;
    rivetTileSprite = riverTiles[currentTile].animated;
    this.game.add.sprite(riverTiles[currentTile].x * 60, riverTiles[currentTile].y * 60, 'fondos', riverTiles[currentTile].animated);
    
    if(riverTiles[currentTile].animated === 6 && !isBarco1) {
        isBarco1 = true;
    } else if(riverTiles[currentTile].animated === 6 && !isBarco2) {
        isBarco2 = true;
    }
    
    currentTile++;
    
    if(currentTile >= riverTiles.length) {
        currentTile = 0;
        riverTiles = [];
        this.game.time.events.remove(loopResult);
    }
}
