let ArrLink = document.getElementsByClassName("nav-linkbar");
console.log(ArrLink)
let ArrItem = [];

for (n = 0; n < ArrLink.length; n++) {
    ArrItem.push(ArrLink[n]);
}
console.log(ArrItem);

ArrItem.forEach(element => {
    element.addEventListener("click", function () {
        ArrItem.forEach(value => {
            value.className = "nav-linkbar";
        })
        console.log(element);
        element.className = "nav-linkbar active-link"
    })
});

let observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        ArrItem.forEach(value => {
            value.style.color = "white";
            value.className = "nav-linkbar";
        })
        ArrItem[0].className = "nav-linkbar active-link";
        document.getElementsByClassName("container-contact-bar")[0].style.backgroundColor = "rgba(0, 0, 0, 0.600)";
        document.getElementsByClassName("container-contact-bar")[0].style.height = "50px";
        document.getElementsByClassName("contact-bar")[0].style.height = "50px";
        document.getElementsByClassName("container-navbar")[0].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
        document.getElementsByClassName("container-navbar")[0].style.height = "84px";
        document.getElementsByClassName("container-navbar")[0].style.top = "50px";
        document.getElementsByClassName("navbar-navigation")[0].style.top = "50px";
        document.getElementsByClassName("container-navbar")[0].style.borderBottom = "none";
    }
}, { threshold: [0] });

observer.observe(document.querySelector("#home-button"));

let observer1 = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        ArrItem.forEach(value => {
            value.style.color = "black";
            value.className = "nav-linkbar";
        })
        ArrItem[1].className = "nav-linkbar active-link";
        document.getElementsByClassName("container-contact-bar")[0].style.backgroundColor = "black";
        document.getElementsByClassName("container-contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("container-navbar")[0].style.backgroundColor = "white";
        document.getElementsByClassName("container-navbar")[0].style.height = "60px";
        document.getElementsByClassName("container-navbar")[0].style.top = "30px";
        document.getElementsByClassName("navbar-navigation")[0].style.top = "30px";
        document.getElementsByClassName("container-navbar")[0].style.borderBottom = "groove";
    }
}, { threshold: [0.90] });

observer1.observe(document.querySelector("#propos"));

let observer2 = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        ArrItem.forEach(value => {
            value.style.color = "black";
            value.className = "nav-linkbar";
        })
        ArrItem[2].className = "nav-linkbar active-link";
        document.getElementsByClassName("container-contact-bar")[0].style.backgroundColor = "black";
        document.getElementsByClassName("container-contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("container-navbar")[0].style.backgroundColor = "white";
        document.getElementsByClassName("container-navbar")[0].style.height = "60px";
        document.getElementsByClassName("container-navbar")[0].style.top = "30px";
        document.getElementsByClassName("navbar-navigation")[0].style.top = "30px";
        document.getElementsByClassName("container-navbar")[0].style.borderBottom = "groove";
    }
}, { threshold: [0.90] });

observer2.observe(document.querySelector("#portfolio"));

let ArrLink2 = document.getElementsByClassName("menu-link");
let ArrItem2 = [];

for (n = 1; n < ArrLink2.length; n++) {
    ArrItem2.push(ArrLink2[n]);
}

ArrItem2.forEach(element => {
    element.addEventListener("click", function () {
        ArrItem2.forEach(value => {
            value.className = "menu-link";
        })
        element.className = "menu-link active"
    })
});


let observer3 = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        ArrItem.forEach(value => {
            value.style.color = "black";
            value.className = "nav-linkbar";
        })
        ArrItem[3].className = "nav-linkbar active-link";
        document.getElementsByClassName("container-contact-bar")[0].style.backgroundColor = "black";
        document.getElementsByClassName("container-contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("container-navbar")[0].style.backgroundColor = "white";
        document.getElementsByClassName("container-navbar")[0].style.height = "60px";
        document.getElementsByClassName("container-navbar")[0].style.top = "30px";
        document.getElementsByClassName("navbar-navigation")[0].style.top = "30px";
        document.getElementsByClassName("container-navbar")[0].style.borderBottom = "groove";

        $(".bar").each(function () {
            $(this).find(".bar-inner").animate({
                width: $(this).attr("data-width")
            }, 2000)
        });
    }
}, { threshold: [0.90] });

observer3.observe(document.querySelector("#competence"));

let observer4 = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        ArrItem.forEach(value => {
            value.style.color = "black";
            value.className = "nav-linkbar";
        })
        ArrItem[4].className = "nav-linkbar active-link";
        document.getElementsByClassName("container-contact-bar")[0].style.backgroundColor = "black";
        document.getElementsByClassName("container-contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("contact-bar")[0].style.height = "30px";
        document.getElementsByClassName("container-navbar")[0].style.backgroundColor = "white";
        document.getElementsByClassName("container-navbar")[0].style.height = "60px";
        document.getElementsByClassName("container-navbar")[0].style.top = "30px";
        document.getElementsByClassName("navbar-navigation")[0].style.top = "30px";
        document.getElementsByClassName("container-navbar")[0].style.borderBottom = "groove";
    }
}, { threshold: [0.90] });

observer4.observe(document.querySelector("#contact"));



ArrItem2[1].addEventListener("click", function () {
    ArrItem2.forEach(element => {
        element.removeAttribute("data-aos");
    })
    document.getElementsByClassName("projet-one")[0].setAttribute("data-aos" , "flip-right");
    document.getElementsByClassName("projet-two")[0].setAttribute("data-aos" , "flip-right");
    document.getElementsByClassName("projet-three")[0].setAttribute("data-aos" , "flip-right");
    setTimeout( function (){
        document.getElementsByClassName("projet-one")[0].removeAttribute("data-aos");
        document.getElementsByClassName("projet-two")[0].removeAttribute("data-aos");
        document.getElementsByClassName("projet-three")[0].removeAttribute("data-aos");
        document.getElementsByClassName("projet-one")[0].firstChild.firstChild.setAttribute("src","./images/projet.jpg");
        document.getElementsByClassName("projet-two")[0].firstChild.firstChild.setAttribute("src","./images/projet.jpg");
        document.getElementsByClassName("projet-three")[0].firstChild.firstChild.setAttribute("src","./images/projet.jpg");
    },500);
})


ArrItem2[0].addEventListener("click", function () {
    ArrItem2.forEach(element => {
        element.removeAttribute("data-aos");
    })
    document.getElementsByClassName("projet-one")[0].setAttribute("data-aos" , "flip-right");
    document.getElementsByClassName("projet-two")[0].setAttribute("data-aos" , "flip-right");
    document.getElementsByClassName("projet-three")[0].setAttribute("data-aos" , "flip-right");
    setTimeout( function (){
        document.getElementsByClassName("projet-one")[0].removeAttribute("data-aos");
        document.getElementsByClassName("projet-two")[0].removeAttribute("data-aos");
        document.getElementsByClassName("projet-three")[0].removeAttribute("data-aos");
        document.getElementsByClassName("projet-one")[0].firstChild.firstChild.setAttribute("src","./images/snapchat.jpg");
        document.getElementsByClassName("projet-two")[0].firstChild.firstChild.setAttribute("src","./images/twitter.jpg");
        document.getElementsByClassName("projet-three")[0].firstChild.firstChild.setAttribute("src","./images/quiz.jpg");
    },500);
})





