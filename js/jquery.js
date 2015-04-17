//jquery for the animations

$(function () {
    //varibles for animation names
    var AShake = 'animated shake';
    var AFadein = 'animated fadeIn';
    //end animation listening event
    var AEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    //About text fade in-- works
    $('#linkabout').on('click', function () {
        $('p[name=pabout]').addClass(AFadein).one(AEnd, function () {
            $(this).removeClass(AFadein);
        });
    });
    $('#linkabout').on('click', function () {
        $('h1[name=habout]').addClass(AFadein).one(AEnd, function () {
            $(this).removeClass(AFadein);
        });
    });
});