$(document).ready(function () {
    $('#superContainer').fullpage({
        'verticalCentered': false,
        'anchors': ['page0', 'page1', 'page2', 'page3'],
        'css3': true,
        'sectionsColor': ['#F0F2F4', '#fff', '#fff', '#fff'],
        'navigation': true,
        'navigationPosition': 'right',
        'navigationTooltips': ['fullPage.js', 'Powerful', 'Amazing', 'Simple'],

        'afterLoad': function (anchorLink, index) {
            if (index == 2) {
                $('#iphone2').addClass('act1')
                $('#iphone4').addClass('act2')
            }
        },

        'onLeave': function (index, nextIndex, direction) {
            if (nextIndex == 3 && direction == 'down') {
                $('#color-phone').addClass('act3') 
                $('#iphone-green').removeClass('act5').addClass('act4')
            }
            else if (index == 3 && direction == 'up') {
                $('#color-phone').removeClass('act3')
                $('#iphone-green').removeClass('act4').addClass('act5')
            }
            else if (nextIndex == 4 && direction == 'down') {
                $('#iphone-green').removeClass('act4').addClass('act5')
            }
            else if (index == 4 && direction == 'up') {
                $('#iphone-green').removeClass('act5').addClass('act4')
            }  
        },
    });
});