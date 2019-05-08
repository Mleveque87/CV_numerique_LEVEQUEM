/* Examples */
(function ($) {
    // html cricle
    var c1 = $('.htmlCircle');
    c1.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4}
    }).on('html-circle-animation-progress', function (event, progress) {
        $(this).find('.htmlText').html(Math.round(80 * progress) + '<i>%</i>');
        $(this).find('.htmlImg').html('<img src="assets/img/html.png" alt="logohtml" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c1.circleProgress('value', 0.9);
    }, 1000);
    setTimeout(function () {
        c1.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c1.circleProgress('value', 0.8);
    }, 2100);

    // css circle
    var c2 = $('.cssCircle');
    c2.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4}
    }).on('css-circle-animation-progress', function (event, progress) {
        $(this).find('.cssText').html(Math.round(80 * progress) + '<i>%</i>');
        $(this).find('.cssImg').html('<img src="assets/img/css.png" alt="csslogo" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c2.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c2.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c2.circleProgress('value', 0.8);
    }, 2100);

    // js circle
    var c3 = $('.jsCircle');
    c3.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('js-circle-animation-progress', function (event, progress) {
        $(this).find('.jsText').html(Math.round(60 * progress) + '<i>%</i>');
        $(this).find('.jsImg').html('<img src="assets/img/js.png" alt="jslogo" width="60%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c3.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c3.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c3.circleProgress('value', 0.6);
    }, 2100);

    // Angularjs circle
    var c4 = $('.ajsCircle');
    c4.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('ajs-circle-animation-progress', function (event, progress) {
        $(this).find('.ajsText').html(Math.round(40 * progress) + '<i>%</i>');
        $(this).find('.ajsImg').html('<img src="assets/img/angularjs.png" alt="ajslogo" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c4.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c4.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c4.circleProgress('value', 0.4);
    }, 2100);

    // Jquery circle
    var c5 = $('.jqCircle');
    c5.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('jq-circle-animation-progress', function (event, progress) {
        $(this).find('.jqText').html(Math.round(60 * progress) + '<i>%</i>');
        $(this).find('.jqImg').html('<img src="assets/img/jquery.png" alt="jqlogo" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c5.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c5.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c5.circleProgress('value', 0.6);
    }, 2100);

    // bootstrap circle
    var c6 = $('.bsCircle');
    c6.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('jq-circle-animation-progress', function (event, progress) {
        $(this).find('.bsText').html(Math.round(80 * progress) + '<i>%</i>');
        $(this).find('.bsImg').html('<img src="assets/img/bootstrap.png" alt="bslogo" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c6.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c6.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c6.circleProgress('value', 0.8);
    }, 2100);

    // php circle
    var c7 = $('.phpCircle');
    c7.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('jq-circle-animation-progress', function (event, progress) {
        $(this).find('.phpText').html(Math.round(70 * progress) + '<i>%</i>');
        $(this).find('.phpImg').html('<img src="assets/img/php.png" alt="phplogo" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c7.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c7.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c7.circleProgress('value', 0.7);
    }, 2100);

    // mysql circle
    var c8 = $('.mysqlCircle');
    c8.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('jq-circle-animation-progress', function (event, progress) {
        $(this).find('.mysqlText').html(Math.round(70 * progress) + '<i>%</i>');
        $(this).find('.mysqlImg').html('<img src="assets/img/mysql2.png" alt="mysqllogo" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c8.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c8.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c8.circleProgress('value', 0.7);
    }, 2100);

    // symfony circle
    var c9 = $('.symfonyCircle');
    c9.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('sf-circle-animation-progress', function (event, progress) {
        $(this).find('.sfText').html(Math.round(20 * progress) + '<i>%</i>');
        $(this).find('.sfImg').html('<img src="assets/img/symfony.png" alt="symfonylogo" width="70%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c9.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c9.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c9.circleProgress('value', 0.2);
    }, 2100);
    
        // worpdress circle
    var c10 = $('.wordpressCircle');
    c10.circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        lineCap: 'round',
        fill: { gradient: [['black', 0], ['#BFFF00', 1]], gradientAngle: Math.PI / 4 }
    }).on('sf-circle-animation-progress', function (event, progress) {
        $(this).find('.wpText').html(Math.round(50 * progress) + '<i>%</i>');
        $(this).find('.wpImg').html('<img src="assets/img/wordpress.png" alt="wordpress" width="66%"/>');
    });
    // Let's emulate dynamic value update
    setTimeout(function () {
        c10.circleProgress('value', 0.7);
    }, 1000);
    setTimeout(function () {
        c10.circleProgress('value', 1.0);
    }, 1100);
    setTimeout(function () {
        c10.circleProgress('value', 0.5);
    }, 2100);

})(jQuery);

