var style;

// this is a wrapped function
(function () {

  // the variables declared here will not be scoped anywhere and will only be accessible in this wrapped function
  var defaultColor = "#FEFFD5",
    highlightColor = "indigo";

  style = {
    navitem: {
      base: {
        align: 'left',
        srokeThickness: 4
      },
      default: {
        fill: defaultColor,
        stroke: "black",
        strokeThickness: 2
      },
      hover: {
        fill: highlightColor,
        stroke: "black",
        strokeThickness: 2
      }
    }
  };

  Object.assign(style.navitem.hover, style.navitem.base);
  Object.assign(style.navitem.default, style.navitem.base);

})();