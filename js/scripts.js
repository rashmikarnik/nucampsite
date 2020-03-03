$(document).ready(function () {
    $(".carousel").carousel({ interval: 2000 });
    $("#carouselButton").click(function () {
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause");
        }
    });
    /** Reserve Campsite Button Click */
    $("#reserveButton").click(function () {
        $("#reserveModal").modal("show");
    });

    /*Login Button Click*/
    $("#loginButton").click(function () {
        $("#loginModal").modal("show");
    });

});