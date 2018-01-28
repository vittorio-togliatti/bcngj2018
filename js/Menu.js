Menu = function() {};

Menu.prototype = {
    
  addMenuOption: function(text, callback) {
    var txt = game.add.text(380, (this.optionCount * 80) + 270, text, style.navitem.default);
    txt.inputEnabled = true;
    txt.events.onInputUp.add(callback);
    txt.events.onInputOver.add(function (target) {
      target.setStyle(style.navitem.hover);
    });
    txt.events.onInputOut.add(function (target) {
      target.setStyle(style.navitem.default);
    });
    txt.input.useHandCursor = true;
    this.optionCount ++;
  },
    
  init: function() {
      this.optionCount = 1;
  },
 
  create: function() {
    game.stage.disableVisibilityChange = true;
    game.add.sprite(0, 0, 'menu-bg').scale.setTo(0.9, 0.9);

    this.addMenuOption('Start', function () {
        game.state.start("Game");
    });
    this.addMenuOption('Start map', function () {
      game.state.start('Game_map');
    });
    this.addMenuOption('Credits', function () {
      game.state.start('Credits');
    });
  },
    
};
