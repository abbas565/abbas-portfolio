// Init
var containerAnimatedImg = document.getElementById('containerAnimatedImg');
var inner = document.getElementById('inner');
// Mouse 
var mouse = {
  _x: 0,
  _y: 0,
  x: 0,
  y: 0,
  updatePosition: function(event) {
    var e = event || window.event;
    this.x = e.clientX - this._x;
    this.y = (e.clientY - this._y) * -1;
  },
  setOrigin: function(e) {
    this._x = e.offsetLeft + Math.floor(e.offsetWidth/2);
    this._y = e.offsetTop + Math.floor(e.offsetHeight/2);
  },
  show: function() { return '(' + this.x + ', ' + this.y + ')'; }
}
// Track the mouse position relative to the center of the containerAnimatedImg.
mouse.setOrigin(containerAnimatedImg);
mouse.show();
console.log("setOrigin:",mouse.setOrigin(containerAnimatedImg) );


// update function start
var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight/2).toFixed(2),
      (mouse.x / inner.offsetWidth/2).toFixed(2)
    );
  };
  
  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTransform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };
// update function finished


var onMouseEnterHandler = function(event) {
  update(event);
  console.log("helloEnter");
};
var onMouseLeaveHandler = function() {
  inner.style = "";
};
var onMouseMoveHandler = function(event) {
  if (isTimeToUpdate()) {
    update(event);
    console.log("helloMove");
  }
};

//function that decides when to update the 3D rotation of the #inner div. start
var counter = 0;
var updateRate = 10;
var isTimeToUpdate = function() {
  return counter++ % updateRate === 0;
};
//function that decides when to update the 3D rotation of the #inner div. finish

containerAnimatedImg.onmouseenter = onMouseEnterHandler;
containerAnimatedImg.onmouseleave = onMouseLeaveHandler;
containerAnimatedImg.onmousemove = onMouseMoveHandler;