/*const ah = {
    onClick() {
        const e = qr(1,3);
        let t = e.toString();
        const r = new Audio('sounds/hi-${t}.mp3');
        r.volume = .7,
        r.play()
    }
}*/
/*document.addEventListener("DOMContentLoaded", function() {

    var image = document.getElementById("clickableImage");

    function playNoise() {
        
        const e = qr(1,3);
        let t = e.toString();
        const r = new Audio('sounds/hi-${t}.mp3');
        r.volume = .7;
        r.play();
    }

    image.addEventListener("click", playNoise);
});*/
document.addEventListener("DOMContentLoaded", function() {

    var image = document.getElementById("clickableImage");

    function playNoise() {
        
        const e = randomNumber(1,3);
        let t = e.toString();
        const r = new Audio('sounds/hi-${t}.mp3');
        r.volume = .7;
        r.play();
    }

    function randomNumber(x, y){
        return Math.floor(Math.random()*3) + 1;
    }

    image.addEventListener("click", playNoise);
});
