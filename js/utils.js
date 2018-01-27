function pixelsToTile(x,y,tileHeight,tileWidth,screenHeight, screenWidth) {
    var tilePosition = {x,y};
    
    let numTancho = 0.0,
        numTalto  = 0.0;
    
    numTancho = screenWidth / tileWidth;
    numTalto  = screenHeight / tileHeight;
    
    position.x = Math.floor(x / numTancho);
    position.y = Math.floor(y / numTalto);
    
    return position;
}

function tileToPixels(tileX,tileY,tileHeight,tileWidth,screenHeight, screenWidth) {
    var  pixelPosition = {x,y};
    
    pixelPosition.x = tileX * tileWidth;
    pixelPosition.y = tileY * tileHeight;
    
    return pixelPosition;
}

var utils = {
  centerGameObjects: function (objects) {
    objects.forEach(function (object) {
      object.anchor.setTo(0.5);
    })
  }
};
