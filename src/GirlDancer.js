var GirlDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('girlDancer');

  this.$node.css('background-image', 'url(http://gifdanceparty.giphy.com/assets/dancers/pumpgirl.gif)');


};
GirlDancer.prototype = Object.create(Dancer.prototype);
GirlDancer.prototype.constructor = GirlDancer;

GirlDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);


};


