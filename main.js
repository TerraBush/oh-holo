document.addEventListener("DOMContentLoaded", function() {

    var image = document.getElementById("clickableImage");

    function playNoise() {
        
        const e = randomNumber(1,3);
        let t = e.toString();
        const r = new Audio(`/oh-hi/sounds/hi-${t}.mp3`);
        r.volume = .7;
        r.play();
    }

    function randomNumber(x, y){
        return Math.floor(Math.random()*y) + x;
    }

    image.addEventListener("click", playNoise);
});
