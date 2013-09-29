
class Base {

  constructor (options) {
    var features = options.features || {};
    this.updateStyleTemplate(features)
  }

  updateStyleTemplate (features) {
    if (features.csstransforms3d) {
      this.styleTemplate = '-webkit-transform: translate3d(<x>px, <y>px, 0);'+
                              '-moz-transform: translate3d(<x>px, <y>px, 0);'+
                               '-ms-transform: translate3d(<x>px, <y>px, 0);'+
                                '-o-transform: translate3d(<x>px, <y>px, 0);';
    }
    else if (features.csstransforms) {
      this.styleTemplate = '-webkit-transform: translate(<x>px, <y>px);'+
                              '-moz-transform: translate(<x>px, <y>px);'+
                               '-ms-transform: translate(<x>px, <y>px);'+
                                '-o-transform: translate(<x>px, <y>px);';
    }
    else {
      this.styleTemplate = 'position: absolute; left: <x>px; top: <y>px;';
    }
  }

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
    var css = '' +
      this.styleTemplate.replace(/<x>/g, options.x).replace(/<y>/g, options.y) +
      'width: ' + options.width + 'px;' +
      'height: ' + options.height + 'px;' +
      'background-color: rgb(' + options.color0 + ', ' + options.color1 + ', ' + options.color2 + ');' +
      'visibility: ' + options.visibility + ';';
    return css;
  }
}
