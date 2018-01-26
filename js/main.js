var SideScroller = SideScroller || {};

var originalHeight = 600;
var originalWidth = 800;

//parametros de juego
var bgk_speed = 0.5;
var bgk_middle_speed = 0.7;
var bgk_front_speed = 1.5;

var ground_speed = 2.5;

var groundObjectsSpeed = -150;
var vertical_acceleration = 6;
var gravity_value = 130;



//var tempWindowWidth = window.screen.availWidth * window.devicePixelRatio;
//var tempWindowHeight = window.screen.availHeight * window.devicePixelRatio;
//
//var windowWidth;
//var windowHeight;
//
//if (tempWindowWidth > tempWindowHeight){
//    windowWidth = tempWindowWidth;
//    windowHeight = tempWindowHeight;
//} else { //se han recojido en posición vertical
//    windowWidth = tempWindowHeight;
//    windowHeight = tempWindowWidth;
//}

//var windowHeight = 1005;
//var windowWidth = 1920;

var windowHeight = 600;
var windowWidth = 800;

var currentScaleFactor = windowHeight / originalHeight;
    windowHeight = originalHeight;
    windowWidth = windowWidth / currentScaleFactor;
   
SideScroller.game = new Phaser.Game(windowWidth, windowHeight, Phaser.AUTO, '','','',false,'');

//var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
// 

//SideScroller.game.state.add('Boot', SideScroller.Boot);
//SideScroller.game.state.add('Splash', SideScroller.Splash);
//SideScroller.game.state.add('Preload', SideScroller.Preload);
//SideScroller.game.state.add('Menu', SideScroller.Menu);
SideScroller.game.state.add('Game', SideScroller.Game);
SideScroller.game.state.add('Game_map', SideScroller.Game_map);
//SideScroller.game.state.add('Credits', SideScroller.Credits);

//SideScroller.game.state.start('Game');
SideScroller.game.state.start('Game_map');