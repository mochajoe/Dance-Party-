var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('blinkyDancer');

  this.$node.css('background-image', 'url(http://gifdanceparty.giphy.com/assets/dancers/bones.gif)');

  //above used to read Dancer.call(this, top, left, timeBetweenSteps)
  //this.top =
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step
    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


  //return blinkyDancer;
//};
