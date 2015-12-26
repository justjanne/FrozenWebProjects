
(function() {
  var position_top_bar = function () {
    $(".following.bar").toggleClass("qd", $(document).scrollTop() != 0);
  };
  
  $(document).ready(function() {
    $(document).scroll(position_top_bar);
    position_top_bar();
  });
})();
  