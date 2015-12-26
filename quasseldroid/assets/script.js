(function() {
  var top_bar_bg = function (opacity) {
    $(".following.bar").css("background", "rgba(2, 113, 179, "+opacity+")");
  };
  var update_top_bar = function () {
    top_bar_bg($(document).scrollTop() * 1.0 / ($(".masthead").height()-$(".following.bar").height()));
  };
  
  $(document).ready(function() {
    $(document).scroll(update_top_bar);
    update_top_bar();
  });
})();