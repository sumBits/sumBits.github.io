//jquery for the animations

$(function () {

    //varibles for animation names
    var AShake = 'animated shake';
    //end animation listening event
    var AEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    //animations doesn't work yet but follows the same pattern for every animation note the first one is for testing
    $('#test').on('click', function () {
        $('p[name=test]').addClass(AShake).one(AEnd, function () {
            $(this).removeClass(AShake);
        });
    });
});