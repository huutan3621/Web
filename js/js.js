$(document).ready(function () {
    //Responsive with header
    let menu = document.querySelector('#menu-bars');
    let header = document.querySelector('header');
    menu.onclick = () => {
       menu.classList.toggle('fa-times');
       header.classList.toggle('active');
    }

    window.onscroll = () => {
        menu.classList.remove('fa-times')
        header.classList.remove('active')
    }

    //Text goes out in header
    var types = new Typed('.typing-text',{
        strings: ['web designer', 'graphic designer', 'web developer'],
        loop: true,
        typeSpeed: 200,
    })

    //Image go when hover
    VanillaTilt.init(document.querySelectorAll('.tilt'),{
        max:50
    })
   

});