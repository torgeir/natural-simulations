
var system = new System({
  name: "the system",
  setup: setup,
  world: document.body,
  features: {
    csstransforms3d: Modernizr.csstransforms3d,
    csstransforms:   Modernizr.csstransforms
  }
});

function setup (system) {

  function addItem () {
    var size = Math.random() * 200 + 10;
    system.add(Item, {
      width:  size,
      height: size
    });
  }

  for (var i = 1; i < 100; i++) addItem();

}

function delay (ms, what) {
  return setTimeout(what, ms);
}
