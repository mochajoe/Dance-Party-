var FatSpidey = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node.addClass('fatSpidey');

  this.$node.css('background-image', 'url(http://gifdanceparty.giphy.com/assets/dancers/fatspidey.gif)');


};
FatSpidey.prototype = Object.create(Dancer.prototype);
FatSpidey.prototype.constructor = FatSpidey;

FatSpidey.prototype.step = function() {
  Dancer.prototype.step.call(this);


};


