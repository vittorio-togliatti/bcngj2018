var SideScroller = SideScroller || {};
 
SideScroller.Options = function() {};


SideScroller.Options.prototype = {
 
  preload: function(){
 
    },
 
  create: function() {
    this.game.stage.backgroundColor = '#000000';
    this.game.world.setBounds(0, 0, windowWidth, windowHeight);
    
      //this.clicAudio = this.add.audio('audio_button'); 
    //this.bkg = this.game.add.sprite(0, 0,  'portada');
    
    }, 
 
  update: function() {
     
    },
 
  render: function(){
      
      console.log('Options');
        
    }
    
};


