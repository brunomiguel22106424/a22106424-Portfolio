var i = setInterval(function () {
    clearInterval(i);

    document.getElementById("loading").style.display = "none";
    document.getElementById("photoheropage").style.display = "block";
   
}, 2000);