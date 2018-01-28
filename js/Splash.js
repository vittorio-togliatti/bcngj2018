Splash = function() {};

Splash.prototype = {

  loadScripts: function () {
    game.load.script('style', 'js/style.js');
    game.load.script('menu','js/Menu.js');
    game.load.script('game', 'js/Game.js');
    game.load.script('game_map', 'js/Game_map.js');
    game.load.script('gameover','js/Gameover.js');
    game.load.script('credits', 'js/Credits.js');
    game.load.script('options', 'js/Options.js');
  },

  loadImages: function () {
    game.load.image('menu-bg', 'img/splash.png');
    //game.load.image('options-bg', 'assets/options-bg.jpg');
    //game.load.image('gameover-bg', 'assets/gameover-bg.jpg');
  },
    
  init: function () {
    this.loadingBar = game.make.sprite(game.world.centerX-(387/2), 400, "loading");
    this.logo       = game.make.sprite(game.world.centerX, 200, 'game_logo');
    this.status     = game.make.text(game.world.centerX, 380, 'Loading...', {fill: 'white'});
    utils.centerGameObjects([this.logo, this.status]);
  },

  preload: function () {
    //this.game.add.sprite(0, 0, 'splash_bg');
    game.add.existing(this.logo).scale.setTo(0.5);
    game.add.existing(this.loadingBar);
    game.add.existing(this.status);
    this.game.load.audio('musica', ['music/komiku.mp3']);
      
    this.load.setPreloadSprite(this.loadingBar);

    this.loadScripts();
    this.loadImages();
  },
    
  addGameStates: function () {
    game.state.add('Menu', Menu);
    game.state.add('Game', SideScroller.Game);
    game.state.add('Game_map', SideScroller.Game_map);
    game.state.add('GameOver', SideScroller.GameOver);
    game.state.add('Credits', Credits);
    game.state.add('Options', SideScroller.Options);
  },
    
  create: function() {
      
    game.stage.backgroundColor = '#000000';
      
    this.status.setText('Ready!');
    this.addGameStates();
      
    setTimeout(function () {
      game.state.start("Menu");
    }, 1000);
      
  }
    
};


