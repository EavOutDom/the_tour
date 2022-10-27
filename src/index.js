const activePage = window.location.pathname;
console.log(activePage);
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


