Menu = function() {};

Menu.prototype = {
    
  addMenuOption: function(text, callback) {
    var txt = game.add.text(100, (this.optionCount * 80) + 200, text, style.navitem.default);
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback);
    txt.events.onInputOver.add(function (target) {
      target.setStyle(style.navitem.hover);
    });
    txt.events.onInputOut.add(function (target) {
      target.setStyle(style.navitem.default);
    });
    this.optionCount ++;
  },
    
  init: function() {
      this.title = game.make.text(game.world.centerX, 100, 'Game title', {fill: 'white'});
      this.title.anchor.set(0.5);
      this.optionCount = 1;
  },
 
  create: function() {
    game.stage.disableVisibilityChange = true;
    //this.game.add.sprite(0, 0, 'menu-bg');
    game.add.existing(this.title);

    this.addMenuOption('Start', function () {
        game.state.start("Game");
    });
    this.addMenuOption('Start map', function () {
      game.state.start('Game_map');
    });
    this.addMenuOption('Options', function () {
      console.log('You clicked Options!');
    });
    this.addMenuOption('Credits', function () {
      console.log('You clicked Credits!');
    });
  },
    
};
