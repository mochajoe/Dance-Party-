//Original copy checking to make sure copy will not have this note.

var BearDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('bearDancer');

  this.$node.css('background-image', 'url(http://gifdanceparty.giphy.com/assets/dancers/smooch.gif)');

};
BearDancer.prototype = Object.create(Dancer.prototype);
BearDancer.prototype.constructor = BearDancer;

BearDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeIn();

};

