var NapoleonDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('napoleanDancer');

  this.$node.css('background-image', 'url(http://i.imgur.com/5iavzbN.gif)');
  //above used to read Dancer.call(this, top, left, timeBetweenSteps)
  //this.top =
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = NapoleonDancer.step;


};
NapoleonDancer.prototype = Object.create(Dancer.prototype);
NapoleonDancer.prototype.constructor = NapoleonDancer;

NapoleonDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
    // call the old version of step at the beginning of any call to this new version of step
    //oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.

};
