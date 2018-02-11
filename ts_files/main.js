/* Author : Blue
 Version : 0.3
 */

$(document).ready(function () {

    //$(".button-collapse").sideNav();
    $('.button-collapse').sideNav({
        menuWidth: 160,
        edge: 'left',
        closeOnClick: true,
        draggable: true
}
    );

    //Homepage
    $('#commandsPage').hide();
	$('#statsPage').hide();
    //On click on menu tab
    $('#navList li, #nav-mobile li').on('click', function () {
        //Unselect all the tabs
        $('#navList li, #nav-mobile li').each(function() {
            $(this).removeClass('active');
        });
        //Select the clicked tab
        $(this).addClass('active');
    });

    $('.commands').on('click', function () {
        $('#homePage').fadeOut(function ()		{
            $('#commandsPage').fadeIn();
        });
    });
	
    $('.commands').on('click', function () {
        $('#statsPage').fadeOut(function ()		{
            $('#commandsPage').fadeIn();
        });
    });
	
	$('.stats').on('click', function () {
        $('#commandsPage').fadeOut(function ()		{
            $('#statsPage').fadeIn();
        });
    });
	
	$('.stats').on('click', function () {
        $('#homePage').fadeOut(function ()		{
            $('#statsPage').fadeIn();
        });
    });

    $('.home').on('click', function () {
        $('#commandsPage').fadeOut( function ()		{
            $('#homePage').fadeIn();
        });
    });
	$('.home').on('click', function () {
        $('#statsPage').fadeOut( function ()		{
            $('#homePage').fadeIn();
        });
    });
});
