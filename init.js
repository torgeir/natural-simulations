
var system = new System({
  name: "the system",
  setup: setup,
  world: document.body
});

function setup (system) {
  system.add(Item);
}
