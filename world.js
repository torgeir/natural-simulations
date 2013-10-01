var viewport = Utils.viewportSize();

class World extends Base {

  constructor (el) {
    super({});
    this.el = el;
    this.el.classList.add('world');

    this.width  = viewport.width;
    this.height = viewport.height;

    this.color = 'transparent';
    this.visibility = 'visible';

    var centerWidth = viewport.width / 2,
        centerHeight = viewport.height / 2;
    this.location = new Vector(centerWidth, centerHeight);
    this.gravity  = new Vector(0,     0.2);
    this.wind     = new Vector(0.06,  0);
    this.thermal  = new Vector(0,    -0.025);
  }

  step () {}

  constrainWithinEdges (width, height) {}
}
