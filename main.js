const apiKey = getCookie("apiKey");
const channelId = 'UC3n5uGu18FoCy23ggWWp8tA'; //mumei
//const channelId = 'UCO_aKKYxn4tvrqPjcTzZ6EQ'; //fauna
//const channelId = 'UCgmPnx-EEeOrZSg5Tiw7ZRQ'; //bae
const premiereEmote = '🕔';
const liveEmote = '🔴';
const completedEmote = '🔘';



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
        currentLivestream();
    });
});
document.addEventListener("DOMContentLoaded", function() { //event listener for input key field & button
    
    const apiKey = getCookie("apiKey"); //get api key from cookie
    
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

// Initial call to update subscriber count and livestream display
updateSubscriberCount();
upcomingLivestream();