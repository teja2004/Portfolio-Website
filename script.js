console.log("Script Executed");

let sidebar = document.querySelector('.sidebar');
let toggle = document.querySelectorAll('button')[0];

toggle.addEventListener('click', function(){
    if (sidebar.style.marginLeft === "0px"){
        sidebar.style.marginLeft = "-300px";
        toggle.style.marginLeft = "-100px";
        toggle.innerHTML = "Menu";
    }
    else{
        sidebar.style.marginLeft = "0px";
        toggle.style.marginLeft = "0px";
        toggle.innerHTML = "Close";

    }
})