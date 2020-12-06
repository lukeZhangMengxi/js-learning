var logger = {
  x: 0,
  updateCount: function () {
    this.x++;
    console.log(this.x);
  }
}

logger.updateCount();
logger.updateCount();
logger.updateCount();

var container = {
  execute: function (func) {
    func();
  }
}

container.execute(logger.updateCount);  // No access to logger.x, priting NaN
container.execute(logger.updateCount.bind(logger)); // Have access to logger.x, priting 4
