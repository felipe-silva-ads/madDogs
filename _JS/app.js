/*TILT EFFECT LOGO*/
VanillaTilt.init(document.querySelector(".imgLogo"), {
    max: 25,
    speed: 400
});

/*GSAP ROLL LOGO IMG*/
gsap.from(".imgLogo",{
    x: -800,
    opacity: 0
})
gsap.to(".imgLogo",{
    x: 0,
    rotation: 360,
    duration: 1,
    opacity: 1
});

/*GSAP SCROLTO*/
function infoDiv(){
    gsap.to(window, {duration: 2, scrollTo: "#two"});
};

function homeDiv(){
    gsap.to(window, {duration: 2, scrollTo: "#one"});
};

/*GSAP StatusBarONE*/
gsap.from(".statusOne",{
    width: 0,
    duration: 3
})
gsap.to(".statusOne",{
    width: 278,
    duration: 3
});


/*GSAP StatusBarONE*/
gsap.from(".statusTwo",{
    width: 0,
    duration: 2
})
gsap.to(".statusTwo",{
    width: 278,
    duration: 2
});



