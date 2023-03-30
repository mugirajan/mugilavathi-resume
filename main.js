$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClas('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle')
    });
    // smooth scrolling
    $(`a[href*="#"]`).on('click',function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:$($(this).attr('href')).offset().top,
        },
        500,
        'linear'
        );
    });
});

var button=document.getElementById("menuu");
var div=document.querySelector(".menu-bar");
var link1=document.querySelector(".link1");
var link2=document.querySelector(".link2");
var link3=document.querySelector(".link3");
var link4=document.querySelector(".link4");
var link5=document.querySelector(".link5");


button.addEventListener("click",()=>{
    div.style.display="flex";
});

function clear(){
   div.style.display="none";
   
}

link1.addEventListener("click",()=>{
    clear()
});

link2.addEventListener("click",()=>{
    clear()
});

link3.addEventListener("click",()=>{
    clear()
});

link4.addEventListener("click",()=>{
    clear()
});

link5.addEventListener("click",()=>{
    clear()
});








 