

class Item extends Base {

  constructor (options) {
    super(options);
    this.id = options.id;

    this.el = document.createElement('div');
    this.el.classList.add('item');
    this.el.classList.add('item_' + options.id);
  }

  init (options) {
    this.width      = options.width  || 20;
    this.height     = options.height || 20;
    this.color      = options.color  || [0, 0, 0];
    this.visibility = options.visibility || 'visible';

    this.acceleration = new Vector();
    this.velocity     = new Vector();
    this.location     = new Vector(options.location.x, options.location.y);
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
    this.acceleration = this.acceleration.add(new Vector(force.x, force.y));
  }
}
