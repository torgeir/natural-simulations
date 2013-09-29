
class World extends Base {

  constructor (el) {
    this.el = el;
    this.el.classList.add('world');

    var viewport = Utils.viewportSize();
    this.width  = viewport.width;
    this.height = viewport.height;
    this.location = {
      x: viewport.width / 2,
      y: viewport.height / 2
    };
    this.color = 'transparent';
    this.visibility = 'visible';
  }

  step () {}
}
