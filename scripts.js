
window.onload = function () {
    var canvas = document.getElementById('canvas');
    let elemLeft = canvas.offsetLeft;
    let elemTop = canvas.offsetTop;
    
    var context = canvas.getContext('2d');

   var GameScore= 0;

    elements = [];
    elements.push({
        colour: 'rgba(0, 0, 255, 0.0)',
        width: 150,
        height: 100,
        top: 220,
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
    canvas.addEventListener('click', function (event) {
        var x = event.pageX - elemLeft,
            y = event.pageY - elemTop;
           
        // Collision detection between clicked offset and element.
        elements.forEach(function (element) {
         
            if (y > element.top && y < element.top + element.height
                && x > element.left && x < element.left + element.width) {
                  if(GameScore <= 3){
                    GameScore++;
                  
                    canvas.classList.toggle("rescued");
                   
                    console.log(element.nom);
                //  alert('lol');
                document.querySelector(".js-text").textContent = "Tu as trouvé: " + element.nom+' '  +GameScore+"/5 animaux";
            }
                else if(GameScore === 4){
                    console.log(element.nom);
                document.querySelector(".js-text").textContent = " Bravo le dernier etait: "+ element.nom+' ' +(GameScore+1) +"/5 animaux";
                }
            }
           
        });
    }, false);

};




