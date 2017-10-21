var CatDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('catDancer');

  this.$node.css('background-image', 'url(https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)');

};
CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.fadeIn();

};

