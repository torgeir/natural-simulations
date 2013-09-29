
class Base {

  draw () {
    if (!this.el) {
      throw new Error(this + " has no .el to change the css of");
    }

    this.el.style.cssText = this.cssText({
      x: this.location.x - (this.width  / 2),
      y: this.location.y - (this.height / 2),
      width:  this.width,
      height: this.height,
      color0: this.color[0],
      color1: this.color[1],
      color2: this.color[2],
      visibility: this.visibility
    });
  }

  cssText (options) {
    return '' +
      'position: absolute;' +
      'left: ' + options.x + 'px;' +
      'top: ' + options.y + 'px;' +
      'width: ' + options.width + 'px;' +
      'height: ' + options.height + 'px;' +
      'background-color: rgb(' + options.color0 + ', ' + options.color1 + ', ' + options.color2 + ');' +
      'visibility: ' + options.visibility + ';';
  }
}
