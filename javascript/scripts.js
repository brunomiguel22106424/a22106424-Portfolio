
document.getElementById("responsive-menu").onclick = function() {
    if (document.getElementById("home").style.display === "none") {
        document.getElementById("home").style.display = "flex";
    }
    else {
        document.getElementById("home").style.display = "none";
    }

    if (document.getElementById("aboutme").style.display === "none") {
        document.getElementById("aboutme").style.display = "flex";
    }
    else {
        document.getElementById("aboutme").style.display = "none";
    }

    if (document.querySelector(".grid-content").style.display === "none") {
        document.querySelector(".grid-content").style.display = "grid";
    }
    else {
        document.querySelector(".grid-content").style.display = "none";
    }

    if (document.getElementById("contactme").style.display === "none") {
        document.getElementById("contactme").style.display = "flex";
    }
    else {
        document.getElementById("contactme").style.display = "none";
    }

    if (document.getElementById("esconder-scroll").style.display === "none") {
        document.getElementById("esconder-scroll").style.display = "flex";
    }
    else {
        document.getElementById("esconder-scroll").style.display = "none";
    }

    if (document.querySelector(".first-content-c").style.display === "none") {
        document.querySelector(".first-content-c").style.display = "flex";
    }
    else {
        document.querySelector(".first-content-c").style.display = "none";
    }

    if (document.querySelector(".second-content-c").style.display === "none") {
        document.querySelector(".second-content-c").style.display = "flex";
    }
    else {
        document.querySelector(".second-content-c").style.display = "none";
    }

};


window.onscroll = () => {
    if (window.scrollY > 100) {
        document.querySelector('.text-scroll-down').style.color = '#eabe68';
    }
    else{
        document.querySelector('.text-scroll-down').style.color = '#3f2222';
    }
};



document.querySelector(".button-darkmode").onclick = function() {
    var botao = document.querySelector(".button-darkmode");
    var bola = document.querySelector(".ball");

    if(window.innerWidth > "600"){
        if(botao.style.backgroundColor === "whitesmoke"){
            botao.style.backgroundColor = "#1a1919";
            bola.style.backgroundColor = "whitesmoke";
            bola.style.transform = "translateX(0px)";
        }
        else{
            botao.style.backgroundColor = "whitesmoke";
            bola.style.backgroundColor = "#1a1919";
            bola.style.transform = "translateX(2vw)";
        }
    }
    else{
        if(botao.style.backgroundColor === "whitesmoke"){
            botao.style.backgroundColor = "#1a1919";
            bola.style.backgroundColor = "whitesmoke";
            bola.style.transform = "translateX(0px)";
        }
        else{
            botao.style.backgroundColor = "whitesmoke";
            bola.style.backgroundColor = "#1a1919";
            bola.style.transform = "translateX(4vw)";
        }
    }


    const header = document.querySelector(".header");
    header.classList.toggle("dark-mode-header");

    const first_content = document.querySelector(".first-content");
    first_content.classList.toggle("dark-mode-first-content");

    const menu = document.querySelector("nav");
    menu.classList.toggle("dark-mode-menu");

    const second_content = document.querySelector("main");
    second_content.classList.toggle("dark-mode-second-content");

    const terceira_content = document.querySelector(".terceira-content");
    terceira_content.classList.toggle("dark-mode-terceira-content");

    const grid_content = document.querySelector(".grid-content");
    grid_content.classList.toggle("dark-mode-grid-content");

    const footer = document.querySelector(".footer");
    footer.classList.toggle("dark-mode-footer");

/*
    const terceira_content2 = document.querySelector(".terceira-contentpt2");
    terceira_content2.classList.toggle("dark-mode-terceira-contentpt2");
*/
};









