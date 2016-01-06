/* global webshim */
/// <reference path="typings/jquery/jquery.d.ts"/>

var wrap = function (elem) {
  var wrapper = $("<td/>");
  Array.prototype.slice.call(elem[0].classList).forEach(function (c) {
    wrapper.addClass(c);
  })
  elem.appendTo(wrapper);
  return wrapper;
}

render_schedule_item = function (elem) {
  var container = $("<tr/>");
  container.addClass("entry");
  
  var title = $('<input type="text"/>');
  title.addClass("title");
  title.attr("placeholder", "Title");
  if (elem[0]) title.attr("value", elem[0]);

  var datetime = $('<input type="datetime-local"/>');
  datetime.addClass("datetime");
  datetime.attr("placeholder", "Time");
  if (elem[1]) {
    datetime.val(new Date(elem[1]).toISOString().replace("Z",""));
  }

  var region = $('<input type="text"/>');
  region.addClass("region");
  region.attr("placeholder", "Region");
  if (elem[2]) region.attr("value", elem[2]);
  
  var link = $('<input type="url"/>');
  link.addClass("link");
  link.attr("placeholder", "Link");
  if (elem[3]) link.attr("value", elem[3]);
  
  var btns = $('<span class="button-group"></span>');
  
  var addAfter = $('<button class="button">Add after</button>');
  addAfter.click(function () {
    container.after(render_schedule_item([]));
  });
  
  var addBefore = $('<button class="button">Add Before</button>');
  addBefore.click(function () {
    container.before(render_schedule_item([]));
  });
  
  var remove = $('<button class="button">Remove</button>');
  remove.click(function () {
    container.unbind().remove();
  });
  
  remove.appendTo(btns);
  addAfter.appendTo(btns);
  addBefore.appendTo(btns);

  wrap(title).appendTo(container);
  wrap(datetime).appendPolyfillTo(container);
  wrap(region).appendTo(container);
  wrap(link).appendTo(container);
  wrap(btns).appendTo(container);

  return container;
}

var remove_error = function () {
  $("#error .content").html("");
  $("#error").removeClass("active");
}

var load_schedule = function () {
  var data = $("#oldschedule").val();
  try {
    var json = JSON.parse(data);
    $("#entries").html("");
    json.forEach(function (elem) {
      render_schedule_item(elem).appendTo($("#entries"));
    });
    remove_error();
  } catch (e) {
    $("#error .content").html("An Error occured: " + e.toString());
    $("#error").addClass("active");
  } 
}

var load_elem = function (elem) {
  var region = elem.find("input.region").val() || false;
  var datetime_str = elem.find("input.datetime").val();
  var datetime = new Date(datetime_str).getTime();
  var title = elem.find("input.title").val();
  var link = elem.find("input.link").val() || false;
  
  var json = [title, datetime, region, link];
  
  return json;
}

var store_schedule = function () {
  var schedule = [];
  $("#entries tr").each(function (index, elem) {
    var json = load_elem($(elem));
    console.log(json);
    schedule.push(json);
  });
  schedule.sort(function (a,b) {
    return a[1]-b[1];
  })
  $("#oldschedule").val(JSON.stringify(schedule));
}

var init_buttons = function () {
  var load = $('<button class="button">Load Schedule</button>');
  load.click(load_schedule);
  load.appendTo($('#buttons'));
  
  var store = $('<button class="button">Store Schedule</button>');
  store.click(store_schedule);
  store.appendTo($('#buttons'));
  
  var sort = $('<button class="button">Sort Schedule</button>')
  sort.click(function () {
    store_schedule();
    load_schedule();
  });
  sort.appendTo($('#buttons'));
  
  var close_error = $('<button class="small-button">×</button>');
  close_error.click(remove_error);
  close_error.appendTo($("#error"));
}

webshim.setOptions('basePath', 'shims/');

//request the features you need:
webshim.polyfill('forms forms-ext');

$(function(){
  init_buttons();
});
