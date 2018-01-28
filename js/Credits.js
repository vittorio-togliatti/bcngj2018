Credits = function() {};

Credits.prototype = {
    
    addMenuOption: function(text, callback) {
        var txt = game.add.text(350, game.world.centerY + 200, text, style.navitem.default);
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
      
        var style = { font: "20px Arial", fill: "black", stroke: "white", strokeThickness: 2, fontWeight: "bold", align: "center" };
        var text = game.add.text(400, game.world.centerY + 100, "Isidro Serra Hernandez (Game design, graphic design & development)", style);
        text.anchor.set(0.5);
        var text = game.add.text(400, game.world.centerY + 130, "Pau Aza (Game design & development)", style);
        text.anchor.set(0.5);
        var text = game.add.text(400, game.world.centerY + 160, "Vittorio Togliatti (Game design & development)", style);
        text.anchor.set(0.5);

        this.addMenuOption('Main Menu', function () {
            game.state.start("Menu");
        });
      
    }, 
 
  update: function() {
     
    },
 
  render: function(){
        
    },
};


