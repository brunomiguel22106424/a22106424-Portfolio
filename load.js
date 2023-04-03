var i = setInterval(function () {
    clearInterval(i);

    document.getElementById("loading").style.display = "none";
    document.getElementById("photoheropage").style.display = "flex";
    document.getElementById("esconder2").style.display = "flex";
    document.getElementById("header").style.display = "flex";
    

}, 2000);