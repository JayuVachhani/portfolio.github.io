$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 70){
            $('.navbar').addClass('sticky');
        }
        else{
            $('.navbar').removeClass('sticky');
        }
    });
    // toggle menu
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    })

    var typed = new Typed('.occupation',{
        strings : ['Developer','Designer'],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true 
    })
})  