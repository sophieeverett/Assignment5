$(document).ready(function() {


    $(".readmore").on("click", function (e) {
        e.preventDefault();

    function slidedown(){
        $('p.hide').slideDown();
        $('.readmore').hide();
    }

        $('.readmore').click(slidedown);

    });


    $(".readless").on("click", function (e) {
        e.preventDefault();
        slideup();
    });

    function slideup(){
        $('.hide').slideUp();
        $('.readless').hide();
        $('.readmore').show();
    }


    $(".learnmore").on("click", function (e) {
        e.preventDefault();

    function slidedown2(){
        $('#learnmoretext').slideDown();
        $('.learnmore').hide();
        $('.learnless').show();
    }

        $('.learnmore').click(slidedown2);

    });


    $(".learnless").on("click", function (e) {
            e.preventDefault();

    function slideup2(){
        $('.hide').slideUp();
        $('.learnless').hide();
        $('.learnmore').show();
    }

        $('.learnless').click(slideup2);

    });

});
