const hamburguer = document.querySelector('#hamburguer'); 

const menu = document.querySelector('nav');

const icon_aparece =  hamburguer.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH6DyLcgnWUw7s87IsJrRYTpC1UfXo67RzOx0-jxQpmw&s'


hamburguer.addEventListener("click", () => {

    if (!(menu.classList.contains('revelar'))) {
          menu.classList.add('revelar')
          
          hamburguer.src = 'https://w7.pngwing.com/pngs/807/47/png-transparent-x-log-x-plane-logo-aircraft-roblox-x-mark-transport-bird-silhouette-thumbnail.png'

          hamburguer.style.opacity = '6'
    } 
    
    else {
        hamburguer.src = icon_aparece;

        hamburguer.style.opacity = '.5';
        

        menu.classList.remove('revelar');
    }

})

window.addEventListener('scroll', ()=> {
    if (window.pageYOffset > 0) {
        menu.classList.remove('revelar');
        
        hamburguer.src = icon_aparece;
    }
})