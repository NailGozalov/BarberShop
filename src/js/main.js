let btn_mission = document.querySelector('#btn_mission');
let btn_why = document.querySelector('#btn_why');
let btn_about = document.querySelector('#btn_about');
let mission_text = document.querySelector('.mission_text');
let why_us_text = document.querySelector('.why_us_text');
let about_us_text = document.querySelector('.about_us_text');




btn_mission.addEventListener('click', function(){
    mission_text.style = "display: block;"
    why_us_text.style = "display: none;"
    about_us_text.style = "display: none;" 

    btn_mission.style = "background-color: #bb9d52;color: white;"
    btn_why.style = ""  
    btn_about.style = "" 

})

btn_why.addEventListener('click', function(){
    mission_text.style = "display: none;"
    why_us_text.style = "display: block;"
    about_us_text.style = "display: none;" 

    btn_mission.style = ""
    btn_why.style = "background-color: #bb9d52; color: white;"  
    btn_about.style = ""   
})

btn_about.addEventListener('click', function(){
    mission_text.style = "display: none;"
    why_us_text.style = "display: none;"
    about_us_text.style = "display: block;"    

    btn_mission.style = ""
    btn_why.style = ""  
    btn_about.style = "background-color: #bb9d52;color: white;" 
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
