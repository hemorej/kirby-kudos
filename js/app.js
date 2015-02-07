$(function() {
    var kudos = $.ajax({url: "?kudos",async: false});
    var parts = window.location.pathname.split('/');
    uid = parts[parts.length-1] + parts[parts.length-2];

    $(".num").html(kudos.responseText);
    $("figure.kudoable").kudoable();

    // if using Modernizr, check for localStorage support
    // if (Modernizr.localstorage)

    if(localStorage.getItem(uid) == 'true') {
        $("figure.kudoable").addClass("complete");
    }
    $("figure.kudo").bind("kudo:added", function(e)
    {
        localStorage.setItem(uid, 'true');
        var kudos = $.ajax({url: "?kudos=plus"});
    });

    $("figure.kudo").bind("kudo:removed", function(e)
    {
        var kudos = $.ajax({url: "?kudos=minus"});
        localStorage.removeItem(uid);
    });
});