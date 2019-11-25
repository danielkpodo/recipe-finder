document.addEventListener("DOMContentLoaded", function() {
  var elems = document.querySelectorAll(".materialboxed");
  for (let i = 0; i < elems.length; i++) {
    var images = elems[i];
  }
  var instances = M.Materialbox.init(images, {
    inDuration: 275,
    outDuration: 200
  });
});
