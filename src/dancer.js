// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  //var dancer = {};
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.step();
  this.setPosition(top, left);
  this._timeBetweenSteps = timeBetweenSteps;
  this.$node.mouseover(function() {
    $(this).animate({'left':'+=70px'}, 'slow');
    $(this).animate({'left':'-=70px'}, 'fast');
  });
};
Dancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

  var thisStep = this;
  setTimeout(this.step.bind(this), this._timeBetweenSteps);

};
  //dancer.step();

Dancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
  var styleSettings = {
    top: this.top,//window height * random generator(0 window height )
    left: this.left// window 0 - window width
  };
  this.$node.css(styleSettings);
};
Dancer.prototype.linecall = function() {
  this.$node.css({'top': 200});

};
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //dancer.setPosition(top, left);

  //return dancer;
//};

// MakeDancer.prototype.lineUp = function(pos) {
//   var styleSettings = {
//     top: $('body').height() * .5,
//     left: pos
//   };
//   this.$node.css(styleSettings);
// };