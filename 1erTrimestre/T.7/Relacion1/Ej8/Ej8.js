$(document).ready(function () {

    $("#p1").css("font-size", '16px');
    $("#p2").css("font-size", '30px');
    $("#p3").css("font-size", '50px');

    $('h1').click(function () {
        clase = $(this)[0].className;
        $("p." + clase).toggle("slow");

        /*if ($("p." + clase).attr("isHidden") == "true") {

            $("p." + clase).show();
            $("p." + clase).attr("isHidden", false);

        } else {
            $("p." + clase).hide();
            $("p." + clase).attr("isHidden", true);
        }*/

    })

    $("p").on({
        mouseenter: function () {
            $(this).css("background-color", 'red');
        },
        mouseleave: function () {
            $(this).css("background-color", 'white');
        }
    });

}); 