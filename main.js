function domready(callback) {
    document.readyState === 'interactive' || document.readyState === 'complete'
        ? callback()
        : document.addEventListener('DOMContentLoaded', callback);
};
domready(() => {
    document.body.style.visibility = 'visible';
};
document.addEventListener("DOMContentLoaded", function() { //event listener to see if someone clicks the icon

    var image = document.getElementById("clickableImage");

    //image.addEventListener("click", playNoise);
    image.addEventListener("click", () => {
        playNoise();
    });
});
document.addEventListener("DOMContentLoaded", function() { //reload button listener
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
    updateAllDisplays();
});
document.addEventListener("DOMContentLoaded", function() { //event listener to see if someone clicks the json import button

    var image = document.getElementById("jsonImportButton");

    //image.addEventListener("click", playNoise);
    image.addEventListener("click", () => {
        playNoise();
    });
});
document.addEventListener("DOMContentLoaded", function() { //event listener to see if someone clicks the json export button

    var image = document.getElementById("jsonExportButton");

    //image.addEventListener("click", playNoise);
    image.addEventListener("click", () => {
        playNoise();
    });
});

//Initial calls to update images and color scheme
//Initial call to update subscriber count and livestream display

/*
defineDataPromise()
    .then(() => {
        updateChannelDataPromise()
            .then(() => {
                updateAllDisplays();
            })
            .catch(error => {
                console.error('unable to start initial stuff because of updateChannelDataPromise:', error)
            });
    })
    .catch(error => {
        console.error('unable to start initial stuff because of defineDataPromise:', error)
    });
*/
defineDataPromise()
    .then(() => {
        updateChannelData();
        updateAllDisplays();
    })
    .catch(error => {
        console.error('unable to start initial stuff because of defineDataPromise:', error)
    });
