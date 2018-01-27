function pixelsToTile(x,y,tileHeight,tileWidth,screenHeight, screenWidth) {
    var tilePosition = {x,y};
    return position;
}

function tileToPixels(tileX,tileY,tileHeight,tileWidth,screenHeight, screenWidth) {
    var  pixelPosition = {x,y};
    return pixelPosition;
}

var utils = {
  centerGameObjects: function (objects) {
    objects.forEach(function (object) {
      object.anchor.setTo(0.5);
    })
  }
};
