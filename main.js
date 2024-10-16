document.addEventListener("DOMContentLoaded", function() { //event listener to see if someone clicks the icon

    var image = document.getElementById("clickableImage");

    //image.addEventListener("click", playNoise);
    image.addEventListener("click", () => {
        playNoise();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("reloadButton").addEventListener("click", function() {
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

        updateSubscriberCountPromise()
            .then(updateSubscriberDisplay)
            .catch(error => {
                console.error("Error updating subscriberDisplay:", error);
            });
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
    channelId = findChannelId(this.value);
});

//Initial calls to update images and color scheme

// Initial call to update subscriber count and livestream display
updateAllDisplays();

let channelData;

fetchData()
    //.then(console.log(channelData.channels.Mumei.stats.views))
    .then(console.log(channelData))
    .catch(error => {
        console.error("Error updating:", error);
    });

function fetchData() {
    return fetch('datatemplate.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data.channels.Mumei.stats.views);
            channelData = data;
            console.log(channelData.channels.Mumei.stats.views);
        })
        .then(function() {
            console.log(channelData);
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

