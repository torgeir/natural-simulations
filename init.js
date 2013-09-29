
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
  system.add(Item);
}
