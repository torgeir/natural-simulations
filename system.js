function idCreator (i) {
  return function () {
    return i++;
  }
}
var itemId = idCreator(0);

class System {

  constructor (options) {
    this.features = options.features;
    this.name = options.name;
    this.setup = options.setup;
    this.records = [];
    this.lookup = {};

    this.world = new World(options.world);
    this.records.push(this.world);

    options.setup(this);
    this.update();
  }

  add (Item) {
    var options = {
      id: itemId(),
      features: this.features
    };

    var item = new Item(options);
    this.world.el.appendChild(item.el);

    this.records.push(item);
    this.lookup[item.id] = item.el.parentNode;

    var initOptions = {
      location: { x: this.world.width / 2, y: this.world.height / 2 }
    };

    item.init(initOptions);
  }

  update () {
    var i,
        len = this.records.length - 1;

    var options = {
      gravity: this.world.gravity,
      thermal: this.world.thermal,
      wind:    this.world.wind
    };

    for (i = len; i >= 0; i--) {
      this.records[i].step(options);
    }

    for (i = len; i >= 0; i--) {
      this.records[i].draw(options);
    }

    requestAnimFrame(this.update.bind(this));
  }
}

