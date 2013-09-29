
module Utils {

  export function viewportSize () {
    var d = {},
        win = window,
        body = document.body,
        docel = document.documentElement;

    if (typeof win.innerWidth  !== 'undefined') {
      d.width = win.innerWidth;
      d.height = win.innerHeight;
    }
    else if (typeof docel  !== 'undefined'
          && typeof docel.clientWidth  !== 'undefined') {
      d.width  = docel.clientWidth;
      d.height = docel.clientHeight;
    }
    else if (typeof document.body  !== 'undefined') {
      d.width  = body.clientWidth;
      d.height = body.clientHeight;
    }
    else {
      d.width  = undefined;
      d.height = undefined;
    }

    return d;
  }
}
