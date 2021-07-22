alert("©Copyright by Netflix. This website is for learning and job hunting purpose only. Logos, images, fonts and videos: Netflix, Inc. All Rights reserved. Made from scratch by Luca Sergiu in HTML, CSS, JAVASCRIPT.");
alert("Click Login/Get Started to get from one page to another.");

function openClose(btn, i){
    const elmc = document.getElementsByClassName("close");
    const elmo = document.getElementsByClassName("open");
    if (btn.classList.contains("active")) {
        elmc[i].style.display = "block";
        elmo[i].style.display = "none";                
    } else {
        elmc[i].style.display = "none";
        elmo[i].style.display = "block";              
    }
}

function myFunction(btn){
    const element = document.querySelectorAll(".dropdown-content");
    switch (btn.id) {
        case "dbtn1":
            i=0;
            element[i].classList.toggle("show");
            btn.classList.toggle("active");
            openClose(btn,i);
            break;
        case "dbtn2":
            i=1;
            element[i].classList.toggle("show");
            btn.classList.toggle("active");
            openClose(btn,i);
            break;
        case "dbtn3":
            i=2;
            element[i].classList.toggle("show");
            btn.classList.toggle("active");
            openClose(btn,i);
            break;
        case "dbtn4":
            i=3;
            element[i].classList.toggle("show");
            btn.classList.toggle("active");
            openClose(btn,i);
            break;
        case "dbtn5":
            i=4;
            element[i].classList.toggle("show");
            btn.classList.toggle("active");
            openClose(btn,i);
            break;
        case "dbtn6":
            i=5;
            element[i].classList.toggle("show");
            btn.classList.toggle("active");
            openClose(btn,i);
            break;
    }
}

