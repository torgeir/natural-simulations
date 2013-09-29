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

    this.location = new Vector(viewport.width / 2, viewport.height / 2);
    this.gravity  = new Vector(0, 0.1);
    this.wind     = new Vector(0.05, 0);
    this.thermal  = new Vector(0, -0.025);
  }

  step () {}
}
