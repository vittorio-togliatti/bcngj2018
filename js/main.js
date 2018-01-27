var originalHeight = 600;
var originalWidth = 800;

// Parametros de juego
var bgk_speed = 0.5;
var bgk_middle_speed = 0.7;
var bgk_front_speed = 1.5;

var ground_speed = 2.5;

var groundObjectsSpeed = -150;
var vertical_acceleration = 6;
var gravity_value = 130;

var windowHeight = 600;
var windowWidth = 800;

var jsonUpdate = {};

var currentScaleFactor = windowHeight / originalHeight;
    windowHeight = originalHeight;
    windowWidth = windowWidth / currentScaleFactor;
   
var game = new Phaser.Game(windowWidth, windowHeight, Phaser.AUTO, '','','',false,'');

Main = function () {};

Main.prototype = {

  preload: function () {
      console.log('preload?');
    //SideScroller.game.load.image('splash_bg',    'assets/splash_bg.png');
    game.load.image('loading',  'assets/loading.png');
    game.load.image('game_logo',    'assets/game_logo.png');
    game.load.script('splash',  'js/Splash.js');
  },

  create: function () {
    game.state.add('Splash', Splash);
    game.state.start('Splash');
  }

};

game.state.add('Main', Main);
game.state.start('Main');
