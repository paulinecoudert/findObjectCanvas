window.onload = function () {
    var canvas = document.getElementById('myCanvas');
    let elemLeft = canvas.offsetLeft;
    let elemTop = canvas.offsetTop;
    if (!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }
    var context = canvas.getContext('2d');
    if (!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }
    elements = [];
    elements.push({
        colour: 'rgba(0, 0, 255, 0.1)',
        width: 150,
        height: 100,
        top: 220,
        left: 250
    }   )
 
    elements.push({
        colour: 'rgba(0, 0, 255, 0.1)',
        width: 150,
        height: 100,
        top: 90,
        left: 450
    });
    elements.push({
        colour: 'rgba(0, 0, 255, 0.1)',
        width: 150,
        height: 100,
        top: 420,
        left: 370
    });
    elements.push({
        colour: 'rgba(0, 0, 255, 0.1)',
        width: 150,
        height: 100,
        top: 320,
        left:570
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
                alert('tu es bien là');
            }
        });
    }, false);
};