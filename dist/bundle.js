/* global Rectangle: true */
$(function() {
  var $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calculate'),
      $perimeter = $('#perimeter'),
      $area = $('#area');

$btnCal.click(function(){
  var w = $width.val(),
      h = $height.val();

  var r = new Rectangle(w, h);

  $perimeter.val(r.perimeter());
  $area.val(r.area());
              
});

});

/* exported Rectangle */
function Rectangle(width, height) {
    var w = Number(width),
              h = Number(height);

    this.area = function() {
          return w * h;
            
    };

    this.perimeter = function() {
          return 2 * (w + h);
            
    };

}
