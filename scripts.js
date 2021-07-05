
window.onload = function () {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    let elemLeft = canvas.offsetLeft;
    let elemTop = canvas.offsetTop;

    canvas.height = 600;
    canvas.width = 900;



    var GameScore = 0;

    var elements = [];

    elements.push({
        color: 'rgba(0, 0, 255, 0.9)',
        width: 150,
        height: 100,
        top: 200,
        left: 250,
        nom: "Elephant"
    });

    elements.push({
        color: 'rgba(0, 0, 255, 0.5)',
        width: 150,
        height: 100,
        top: 420,
        left: 370,
        nom: "Hippo"
    });
    elements.push({
        color: 'rgba(0, 0, 255, 0.5)',
        width: 150,
        height: 100,
        top: 370,
        left: 180,
        nom:"Lion"
    });
    elements.push({
        color: 'rgba(0, 0, 255, 0.5)',
        width: 150,
        height: 100,
        top: 90,
        left:450,
        nom: "Perroquet"
    });
    elements.push({
        color: 'rgba(0, 0, 255, 0.5)',
        width: 150,
        height: 100,
        top: 300,
        left: 450,
        nom: "Girafe"
    });




    // Render elements.
    elements.forEach(function (element) {
        context.fillStyle = element.color;
        context.fillRect(element.left, element.top, element.width, element.height);

    });



    // Add event listener for `click` events.
    canvas.addEventListener('click',function (event) {
        var x = event.pageX - elemLeft;
            y = event.pageY - elemTop;

        console.log(x , y );

        // Collision detection between clicked offset and element.
        elements.forEach(function (element)  {

            if (window.innerWidth >= 900  ) {
                if (el = y > element.top && y < element.top + element.height
                && x > element.left && x < element.left + element.width) {
                    drawCoordinates(element.left + element.width/2 ,  element.top + element.height/2);

                    elements = elements.filter(function( obj ) {
                        return obj.nom !== element.nom;

                    });
                    console.log("au dessus de 900 ");
                    console.log(element.nom, element.top, x,y);

                    if(GameScore < 5 ){
                        GameScore++;
                        document.querySelector(".js-text").textContent = "Tu as trouvé: " + element.nom+' ' + GameScore +"/5 animaux";
                    };

                    if(GameScore === 5 ){
                    document.querySelector(".js-text").textContent = " Bravo le dernier etait: "+ element.nom+' ' +GameScore +"/5 animaux";

                    };
                };
            };

              ///FENTRE ENTRE 480 et 900 !!!!

              if (  375 > window.innerWidth < 900) {
                if (el = y > element.top/2 && y < element.top + element.height/2
                    && x > element.left/2 && x < element.left + element.width/2) {
                        drawCoordinates(element.left + element.width/2 ,  element.top+ element.height/2);
    
                        elements = elements.filter(function( obj ) {
                            return obj.nom !== element.nom;
    
                        });
    
                         console.log("entre 480 et 900");

                

                    console.log(element.nom, element.top, x,y);
                    
                    if(GameScore < 5 ){
                        GameScore++;
                        document.querySelector(".js-text").textContent = "Tu as trouvé: " + element.nom+' ' + GameScore +"/5 animaux";
                    };

                    if(GameScore === 5 ){
                    document.querySelector(".js-text").textContent = " Bravo le dernier etait: "+ element.nom+' ' +GameScore +"/5 animaux";

                    };

               
                };

            };

            ////FENETRE en dessous de 375

            
           
                    if (window.innerWidth <= 375 ) {
                        if (el = y > element.top/3 && y < element.top/3 + element.height/2
                            && x > element.left/3 && x < element.left/3 + element.width/2) {
                                drawCoordinates(element.left + element.width/2 ,  element.top+ element.height/2);
            
                                elements = elements.filter(function( obj ) {
                                    return obj.nom !== element.nom;
            
                                });
            
                                console.log("en dessous de 380");

                        

                            console.log(element.nom, element.top, x,y);
                            
                            if(GameScore < 5 ){
                                GameScore++;
                                document.querySelector(".js-text").textContent = "Tu as trouvé: " + element.nom+' ' + GameScore +"/5 animaux";
                            };
        
                            if(GameScore === 5 ){
                            document.querySelector(".js-text").textContent = " Bravo le dernier etait: "+ element.nom+' ' +GameScore +"/5 animaux";
        
                            };

                       
                        };

                    };
        });

    }, false);

};

//////////////////////////////////////////////////////////////


function drawCoordinates(x,y){
     // Change according to the size of the point.
    var context = document.getElementById("canvas").getContext("2d");

    var checkImg = new Image();
    checkImg.src = "check.png";
    checkImg.onload = () => {
        width = checkImg.width
        height = checkImg.height
        context.drawImage(checkImg, x - width /2, y- height / 2, width , height)}

};





