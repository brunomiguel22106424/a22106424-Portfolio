document.getElementById("responsive-menu").onclick = function() {
    if (document.getElementById("esconder").style.display === "none") {
        document.getElementById("esconder").style.display = "flex";
    }
    else {
        document.getElementById("esconder").style.display = "none";
    }

    if (document.getElementById("esconder2").style.display === "none") {
        document.getElementById("esconder2").style.display = "flex";
    }
    else {
        document.getElementById("esconder2").style.display = "none";
    }

    if (document.getElementById("esconder-scroll").style.display === "none") {
        document.getElementById("esconder-scroll").style.display = "flex";
    }
    else {
        document.getElementById("esconder-scroll").style.display = "none";
    }

}


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

    if(window.innerWidth > "600px"){
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


    var header = document.querySelector("#header");
    header.classList.toggle("dark-mode-header");

    var first_content = document.querySelector(".first-content");
    first_content.classList.toggle("dark-mode-first-content");

    var menu = document.querySelector(".container");
    menu.classList.toggle("dark-mode-menu");

    var second_content = document.querySelector("main");
    second_content.classList.toggle("dark-mode-second-content");

}






