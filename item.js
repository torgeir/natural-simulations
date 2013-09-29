

class Item extends Base {

  constructor (options) {
    this.id = options.id;

    this.el = document.createElement('div');
    this.el.classList.add('item');
    this.el.classList.add('item_' + options.id);
  }

  init (options) {
    this.location   = options.location;
    this.width      = options.width || 20;
    this.height     = options.height || 20;
    this.color      = options.color || [0, 0, 0];
    this.visibility = options.visibility || 'visible';
  }

  step () {
    this.location.y += 1;
  }
}
