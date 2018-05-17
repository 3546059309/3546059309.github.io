init();

function init() {
  if (GetJson() != "") {
    var json = "./data" + GetJson();
    $.getJSON(json, function(data) {
      $.each(data, function(key, val) {
        if ("undefined" != typeof val.text) {
          $(val.label).text(val.text);
        } else if ("undefined" != typeof val.html) {
          $(val.label).html(val.html);
        } else if ("undefined" != typeof val.attr) {
          var s = val.attr.split("=");
          $(val.label).attr(s[0], s[1]);
        } else if ("undefined" != typeof val.attr) {
          var s = val.attr.split("=");
          $(val.label).attr(s[0], s[1]);
        } else if ("undefined" != typeof val.addclass) {
          $(val.label).addClass(val.addclass);
        } else if ("undefined" != typeof val.removeclass) {
          $(val.label).removeClass(val.removeclass);
        } else if ("undefined" != typeof val.append) {
          $(val.label).append(val.append);
        }
      });
    });
  }
}

function GetJson() {
  var p = window.location.pathname;
  var s = window.location.search;
  var u = ["/product", "/pages"];
  var f, v, result;

  if (p != "/") {
    f = p.split(".");
    $.each(u, function(index, value) {
      if (f[0] == value) {
        result = f[0];
        if (s != "") {
          v = s.split("?");
          result = result + "_" + v[1];
        }
        result = result + ".json";
      }
    });
  }
  return result == null || result == "" || result == "undefined" ? "" : result;
}
