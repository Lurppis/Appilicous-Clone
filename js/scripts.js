$(document).ready(function() {

    // hamburger menu toggle
    $('.nav-toggle').click(function() {
        // Adding 'is-open' class to 'main-nav' class
        $('.main-nav').toggleClass('is-open');
        $('.hamburger').toggleClass('is-open');
    })
})