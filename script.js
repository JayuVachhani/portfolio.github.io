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
        strings : ['Web Developer'],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true 
    })
    var typed = new Typed('.occupation-2',{
        strings : ['Web Developer'],
        typeSpeed : 100,
        backSpeed : 60,
        loop : true 
    })
    
    
})
