
class Vector {

  constructor (x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add (vector) {
    return new Vector(
        this.x + vector.x,
        this.y + vector.y);
  }

  subtract (vector) {
    return new Vector(
        this.x - vector.x,
        this.y - vector.y);
  }

  multiply (n) {
    return new Vector(
        this.x * n,
        this.y * n);
  }

  divide (n) {
    return new Vector(
        this.x / n,
        this.y / n);
  }

  magnitude () {
    return Math.sqrt((this.x * this.x)
                   + (this.y * this.y));
  }

  normalize () {
    var m = this.magnitude();
    if (m !== 0) {
      return this.divide(m);
    }
    return this.multiply(1);
  };

  limit (high, low) {
    var vector,
        magnitude = this.magnitude();

    if (magnitude > high) {
      var vector = this.normalize();
      return vector.multiply(high);
    }

    if (magnitude < low) {
      var vector = this.normalize();
      return vector.multiply(low);
    }
  }

  rotate (radians) {
    var cos = Math.cos(radians),
        sin = Math.sin(radians),
        x = this.x,
        y = this.y;

    return new Vector(x * cos - y * sin,
                      x * sin + y * cos);
  };
}
