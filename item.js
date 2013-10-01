

class Item extends Base {

  constructor (options) {
    this.id = options.id;

    this.el = document.createElement('div');
    this.el.classList.add('item');
    this.el.classList.add('item_' + options.id);

    function rand () {
      return parseInt(Math.random() * 256, 10);
    }

    this.color      = options.color  || [rand(), rand(), rand()];
    this.visibility = options.visibility || 'visible';

    this.width  = options.width  || 20;
    this.height = options.height || 20;

    this.mass = (this.width * this.height) * 0.01;

    this.acceleration = new Vector();
    this.velocity     = new Vector();
    this.location     = new Vector(options.x / 2,
                                   options.y / 2);

    this.wallVelocityReductionFactor = 0.4;

    super(options);
  }

  step (options) {
    this.applyForce(options.gravity);
    this.applyForce(options.thermal);
    this.applyForce(options.wind);

    this.velocity = this.velocity.add(this.acceleration);
    this.location = this.location.add(this.velocity);

    this.acceleration = new Vector();
  }

  applyForce (force) {
    var vector = new Vector(force.x, force.y);
    vector = vector.divide(this.mass);
    this.acceleration = this.acceleration.add(vector);
  }

  constrainWithinEdges (width, height) {
    if (this.isOutsideWorldHorizontally(width)) {
      this.location.x = width - this.width / 2;
      this.turnHorizontally();
    }

    if (this.isOutsideWorldVertically(height)) {
      this.location.y = height - this.height / 2;
      this.turnVertically();
    }
  }

  isOutsideWorldHorizontally (width) {
    var halfWidth = this.width / 2;
    return this.location.x + halfWidth > width || this.location.x < halfWidth;
  }

  isOutsideWorldVertically (height) {
    var halfHeight = this.height / 2;
    return this.location.y + halfHeight > height || this.location.y < halfHeight;
  }

  turnHorizontally () {
    this.velocity = new Vector(this.velocity.x * -this.wallVelocityReductionFactor, this.velocity.y);
  }

  turnVertically () {
    this.velocity = new Vector(this.velocity.x, this.velocity.y * -this.wallVelocityReductionFactor);
  }
}
