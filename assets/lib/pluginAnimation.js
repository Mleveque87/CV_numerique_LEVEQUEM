///////////////////////////////////////////////////

//////////////////////////////////////
//// PLUGIN ANIME LE MENU
//////////////////////////////////////
$.fn.animateToggleMenu = function (options) {

    ////////////////////////////////////////////
    // Var
    //////////////////////////////////////////
    //Element
    var menu;

    //Proriété
    var menuOffset, moveToPx, animtionSpeed, direction;


    ///////////////////////////////////////////

    //////////////////////////////////////////
    // Construteur et default set
    //////////////////////////////////////////

    //Defaults options
    var defaults = {
        burger: $(this),
        menu: $("#menu"),
        direction: "right",
        menuOffset: $("#menu").css("right"),
        moveToPx: "0px",
        animationSpeed: "slow",
    };

    //Constructeur
    //Options a l'instantiation de l'objet
    options = $.extend({}, defaults, options);

    //////////////////////////////////////////
    //INIT DU PLUGIN
    //////////////////////////////////////////

    //INIT
    this.init = function () {
        initVars();
    }

    //////////////////////////////////////////

    //initialise les variables du plugin
    //Pour éviter de taper options. a chaque fois
    var initVars = function () {
        menu = options.menu;
        menuOffset = options.menuOffset;
        moveToPx = options.moveToPx;
        animtionSpeed = options.animationSpeed;
        direction = options.direction;
    }

    //////////////////////////////////////////

    //Au click sur le burger on anime le menu de droite
    options.burger.click(function () {
        //On set l'offset(la position de l'élément)
        setOffset();

        //Créer un objet d'option pour la méthode jquery
        var optionAnimate = {};
        //Set l'option jquery que l'on a besoin
        optionAnimate[direction] = moveToPx;

        //On anime vers la gauche de X px et a X vitesse
        menu.animate(optionAnimate, animtionSpeed);
    });

    //Set le position de l'élément et le nombre de px vers laquelle le déplacer
    var setOffset = function () {
        //Récupère la position Droite du menu ( right : -280px dans notre cas);
        menuOffset = menu.css(direction);
        //la position ou le bouger
        moveToPx = menuOffset == "0px" ? "-280px" : "0px";
    }

    //////////////////////////////////////////
    return this.init();
}

                ///////////////////////////////////////////////////