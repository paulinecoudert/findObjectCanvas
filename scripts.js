
window.onload = function () {
    var canvas = document.getElementById('canvas');
    let elemLeft = canvas.offsetLeft;
    let elemTop = canvas.offsetTop;

    var context = canvas.getContext('2d');

    var checkImg = new Image();
    checkImg.src = "check.png";
   



//    checkImg.onload = () => { context.drawImage(checkImg, 0, 0, 170, 170, 0, 0, 70,50)}

var GameScore = 0;

    var elements = [];
    elements.push({
        colour: 'rgba(0, 0, 255, 0.0)',
        width: 150,
        height: 100,
        top: 230,
        left: 250,
        nom: "Elephant"
    });

    elements.push({
        colour: 'rgba(0, 0, 255, 0.0)',
        width: 150,
        height: 100,
        top: 420,
        left: 370,
        nom: "Hippo"
    });
    elements.push({
        colour: 'rgba(0, 0, 255, 0.0)',
        width: 150,
        height: 100,
        top: 370,
        left: 180,
        nom:"Lion"
    });
    elements.push({
        colour: 'rgba(0, 0, 255, 0.0)',
        width: 150,
        height: 100,
        top: 90,
        left:450,
        nom: "Perroquet"
    });
    elements.push({
        colour: 'rgba(0, 0, 255, 0.0)',
        width: 150,
        height: 100,
        top: 300,
        left: 450,
        nom: "Girafe"
    });
    // Render elements.
    elements.forEach(function (element) {
        context.fillStyle = element.colour;
        context.fillRect(element.left, element.top, element.width, element.height);
       
    });

    // Add event listener for `click` events.
    canvas.addEventListener('click',function (event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;



        // Collision detection between clicked offset and element.
        elements.forEach(function (element)  {
          
            if (el = y > element.top && y < element.top + element.height
                && x > element.left && x < element.left + element.width) {

                 console.log(element.nom, x,y);
              
                 if (element.nom === "Perroquet"){
                    drawCoordinates(x=168,y= 20);
                    }

                if (element.nom === "Elephant"){
                    drawCoordinates(x=105,y= 50);
                }
                if (element.nom === "Girafe"){
                    drawCoordinates(x=165,y= 80);

                }
                if (element.nom === "Hippo"){
                    drawCoordinates(x=145,y= 110);
                }

                if (element.nom === "Lion"){
                    drawCoordinates(x=80,y= 90);
                }
                
                        if(GameScore <= 4 ){
                            GameScore++;
                            document.querySelector(".js-text").textContent = "Tu as trouvé: " + element.nom+' '  + GameScore +"/5 animaux";
                        };

                        if(GameScore === 5 && !el ){
                        console.log(el);
                        document.querySelector(".js-text").textContent = " Bravo le dernier etait: "+ element.nom+' ' +GameScore +"/5 animaux";
                    
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
    checkImg.onload = () => { context.drawImage(checkImg, x, y, 35, 22)}
};


