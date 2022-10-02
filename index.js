const activePage = window.location.pathname;
$(document).ready(function () {
    $("ul li")
        .find("a")
        .each(function () {
            $(this).toggleClass(
                "active",
                $(this).attr("href") == activePage.slice(7)
            );
        });
});

$(document).ready(function () {
    $("h1").click(function () {
        $("h2").hide();
    });
});


