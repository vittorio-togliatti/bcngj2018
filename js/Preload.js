var SideScroller = SideScroller || {};
 
//loading the game assets
 
SideScroller.Preload = function(){};
 
SideScroller.Preload.prototype = {
 
  preload: function() {
      
    //show loading screen
    this.bkg = this.game.add.sprite(0, 0,  'preloadbkg');
      
    this.preloadBar = this.add.sprite(this.game.world.centerX-51, this.game.world.centerY-10, 'preloadbar');
    this.preloadBar.anchor.setTo(0.0);
    this.preloadBar.scale.setTo(2.1,2.7);
 
    this.load.setPreloadSprite(this.preloadBar);
      
    //Load saved data
//    if (localStorage.getItem('gameData') == null){
//        
//        var gameData = {'continentCompleted':0,'questionLevel':0};
//        localStorage.setItem("gameData", JSON.stringify(gameData));
//      
//	   } else {
//            this.dataObj = JSON.parse(localStorage.getItem('gameData'));
//        }
 
    //load game assets
      
    
    //this.load.spritesheet('btn_continuar', 'img/common/btn_continuar.png', 150, 38, 2);
    //this.load.image('atras_negro', 'img/common/btn_atras_negro.png');
    //this.load.audio('explosion', 'audio/explosion.ogg');
    //this.game.load.physics("sprite_physics", "balloon.json");     //Poligonos
    
    
   
  },
 
  create: function() {
      this.state.start('Splash');
  }
 
};
