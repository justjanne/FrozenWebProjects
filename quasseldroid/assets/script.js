(function() {
  var top_bar_bg = function (opacity) {
    $(".following.bar").css("background", "rgba(2, 113, 179, "+opacity+")");
  };
  var update_top_bar = function () {
    top_bar_bg($(document).scrollTop() * 1.0 / ($(".masthead").height()-$(".following.bar").height()));
  };
  
 
  var position_top_bar = function () {
    $(".following.bar").toggleClass("qd", $(document).scrollTop() != 0);
  };
  
  $(document).ready(function() {
    $(document).scroll(position_top_bar);
    position_top_bar();
  });
})();