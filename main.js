const channelId = 'UC3n5uGu18FoCy23ggWWp8tA'; //mumei
const currentChannel = "Mumei";

document.addEventListener("DOMContentLoaded", function() { //event listener to see if someone clicks the mumei icon

    var image = document.getElementById("clickableImage");
    /*function playRandomNoise() {
        const e = randomNumber(1,3);
        let t = e.toString();
        const r = new Audio(`sounds/hi-${t}.mp3`);
        r.volume = .7;
        r.play();
    }*/
    function playNoise() {
        const r = new Audio(`sounds/hi-1.mp3`);
        r.volume = .7;
        r.play();
    }
    function randomNumber(x, y){
        return Math.floor(Math.random()*y) + x;
    }
    //image.addEventListener("click", playNoise);
    image.addEventListener("click", () => {
        playNoise();
        //updateSubscriberCount();
        updateAll();
    });
});
document.addEventListener("DOMContentLoaded", function() { //event listener for input api key field & button
    //const apiKey = getCookie("apiKey");
    if(apiKey) { //if have api key, hide input field
        document.getElementById("apiKeyInputContainer").style.display = "none";
    }
    document.getElementById("apiKeySubmitButton").addEventListener("click", function() { //button event listener, saves api key and hides input field
        const apiKeyInput = document.getElementById("apiKeyInputBox").value;

        setCookie("apiKey", apiKeyInput, 365);

        document.getElementById("apiKeyInputContainer").style.display = "none";

        updateSubscriberCount();
    });
});
document.addEventListener("DOMContentLoaded", function() { //premiere button listener
    document.getElementById("premiereLinkButton").addEventListener("click", function() {
        updateDisplay("premiere");
        console.log("attempt switch to premiere thumbnail and link!");
    });
});
document.addEventListener("DOMContentLoaded", function() { //live button listener
    document.getElementById("liveLinkButton").addEventListener("click", function() {
        updateDisplay("live");
        console.log("attempt switch to live thumbnail and link!");
    });
});
document.addEventListener("DOMContentLoaded", function() { //completed button listener
    document.getElementById("completedLinkButton").addEventListener("click", function() {
        updateDisplay("completed");
        console.log("attempt switch to completed thumbnail and link!");
    });
});
document.getElementById('channelSelector').addEventListener('change', function() {
    setTheme(this.value);
    document.getElementById("clickableImage").src = findChannelImg(this.value);
    document.getElementById("altClickableImage").src = findChannelAltImg(this.value);
    document.getElementById("channelLink").href = findChannelLink(this.value);
    currentChannel = this.value;
    console.log(currentChannel);
});

// Initial call to update subscriber count and livestream display
updateSubscriberCount();
updateButtonDisplay();
initialDisplay();