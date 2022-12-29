let cube = document.getElementById('cube');

angleArray = [[0,0,0],[-310,-362,-38],[-400,-320,-2],[135,-217,-88],[-224,-317,5],[-47,-219,-81],[-133,-360,-53]];
//this array of degree that show the deffrent number 1 2 3 4 5 6 on cube ie
cube.addEventListener('click',function(e){

    /*ANIMATION */
    cube.style.animation = 'animate 1.4s linear';

    const userNumber = Math.floor(Math.random() * 6) + 1;
    const pcNumber = Math.floor(Math.random() * 6) + 1;

    cube.style.transform = 'rotateX('+angleArray[userNumber][0]+'deg) rotateY('+angleArray[userNumber][1]+'deg) rotateZ('+angleArray[userNumber][2]+'deg)';
    cube.style.transition = '1s linear'

    cube.addEventListener('animationend',function(e){
        cube.style.animation = ''; });

    const result = document.querySelector('.result');

    if (userNumber > pcNumber) {
    
        result.innerHTML =  " Hai vinto!!" ;

        document.getElementById('show-results').style.display = 'none';
      
    
    } else if (userNumber < pcNumber) {

        result.innerHTML =  " Hai perso!!" ;
        document.getElementById('show-results').style.display = 'none';
        
    } else {

        result.innerHTML =  " Pareggio!" ;
        document.getElementById('show-results').style.display = 'none';
    }

    function compari() {

        document.getElementById('show-results').style.display = 'block';

        
        
        }
      
        secondi = 2;
        ritardo = secondi * 1000;
        setTimeout(compari, ritardo);

       

});





