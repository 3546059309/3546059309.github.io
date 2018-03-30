init();

function init() {
    if (GetJson() != "") {
        var json = "js/data" + GetJson();
        $.getJSON(json, function (data) {
            $.each(data, function (key, val) {
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
                }
            });
        });
    }
}

function GetJson() {
    var p = window.location.pathname;
    var u = ["product", "pages"];
    var s, v, result;

    if (p != "/") {
        s = p.split(".");
        $.each(u, function (index, value) {
            if (s[0] == value) {
                result = s[0];
                if (p.indexOf("?") != -1) {
                    v = p.split("?");
                    result = result + v[1];
                }
                result = result + ".json";
            }
        });
    }
console.log(p);
    return result == null || result == "" || result == "undefined" ? "" : result;
}