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
        stroke: 'rgba(75, 0, 130,0)'
      },
      hover: {
        fill: highlightColor,
        stroke: 'rgba(200,200,200,0.5)'
      }
    }
  };

  Object.assign(style.navitem.hover, style.navitem.base);
  Object.assign(style.navitem.default, style.navitem.base);

})();