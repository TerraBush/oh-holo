const apiKey = getCookie("apiKey");

var premiereTitle = getCookie("premiereTitle");
var premiereThumbnail = getCookie("premiereThumbnail");
var premiereUrl = getCookie("premiereUrl");
var premiereDate = getCookie("premiereDate");
console.log(premiereTitle);
console.log(premiereThumbnail);
console.log(premiereUrl);
console.log(premiereDate);

var liveTitle = getCookie("liveTitle");
var liveThumbnail = getCookie("liveThumbnail");
var liveUrl = getCookie("liveUrl");
var liveDate = getCookie("liveDate");
console.log(liveTitle);
console.log(liveThumbnail);
console.log(liveUrl);
console.log(liveDate);

var completedTitle = getCookie("completedTitle");
var completedThumbnail = getCookie("completedThumbnail");
var completedUrl = getCookie("completedUrl");
var completedDate = getCookie("completedDate");
console.log(completedTitle);
console.log(completedThumbnail);
console.log(completedUrl);
console.log(completedDate);

const premiereEmote = '🕔';
const liveEmote = '🔴';
const completedEmote = '🔘';

const channelNameList = ["Mumei", "Fauna", "Bae"];
const channelIdList = ["UC3n5uGu18FoCy23ggWWp8tA", "UCO_aKKYxn4tvrqPjcTzZ6EQ", "UCgmPnx-EEeOrZSg5Tiw7ZRQ"];
const channelImgList = ["images\mumeiload.png", "images\fauuuuuna.png", "images\mumeiload.png"];

const setTheme = theme => document.documentElement.className = theme;

function channelId(channelName){
    return channelIdList[channelNameList.indexOf(channelName)];
}
function channelImg(channelName){
    return channelImgList[channelNameList.indexOf(channelName)];
}
function updateSubscriberCount() {

    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let subscriberCount = parseInt(data.items[0].statistics.subscriberCount);
            if (subscriberCount >= 1000000) {
                subscriberCount = (subscriberCount / 1000000).toFixed(2) + ' M';
            }else{
                subscriberCount = subscriberCount.toLocaleString();
            }
            let viewCount = parseInt(data.items[0].statistics.viewCount).toLocaleString();

            document.getElementById('subscriberCount').textContent = `${subscriberCount}`;
            document.getElementById('viewCount').textContent = `${viewCount}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function latestLivestream() {
    //eventType= completed, upcoming, or live
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.pageInfo.totalResults;
            if(results == 0){
                console.log("No completed strem~");
                setCookie("completedTitle", null, 365);
                setCookie("completedThumbnail", null, 365);
                setCookie("completedUrl", null, 365);
                setCookie("completedDate", null, 365);
                return;
            }
            const livestream = data.items[0];
            const videoId = livestream.id.videoId;
            const title = livestream.snippet.title;
            const publishedAt = livestream.snippet.publishedAt;
            //const thumbnailUrlHigh = data.items[0].snippet.thumbnails.high.url;
            const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            const dateTime = new Date(publishedAt);
            const localDateTime = dateTime.toLocaleString();
            
            setCookie("completedTitle", title, 365);
            setCookie("completedThumbnail", thumbnailUrlHigh, 365);
            setCookie("completedUrl", videoUrl, 365);
            setCookie("completedDate", localDateTime, 365);

        console.log(videoId);
        console.log(title);
        console.log(videoUrl);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function latestLivestreamPromise() {
    return new Promise((resolve, reject) => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = data.pageInfo.totalResults;
                if(results == 0){
                    console.log("No completed strem~");
                    setCookie("completedTitle", null, 365);
                    setCookie("completedThumbnail", null, 365);
                    setCookie("completedUrl", null, 365);
                    setCookie("completedDate", null, 365);
                    resolve();
                    return;
                }
                const livestream = data.items[0];
                const videoId = livestream.id.videoId;
                const title = livestream.snippet.title;
                const publishedAt = livestream.snippet.publishedAt;
                const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                const dateTime = new Date(publishedAt);
                const localDateTime = dateTime.toLocaleString();
            
                setCookie("completedTitle", title, 365);
                setCookie("completedThumbnail", thumbnailUrlHigh, 365);
                setCookie("completedUrl", videoUrl, 365);
                setCookie("completedDate", localDateTime, 365);

            console.log(videoId);
            console.log(title);
            console.log(videoUrl);
            console.log("ran latestLivestreamPromise");
            resolve();
            })
        .catch(error => {
            console.error('Error fetching latest livestream data:', error);
            reject(error);
        });
    });
}
function currentLivestream() {
    //eventType= completed, upcoming, or live
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&order=date&maxResults=1&key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.pageInfo.totalResults;
            if(results == 0){
                console.log("Not currently live~");
                setCookie("liveTitle", null, 365);
                setCookie("liveThumbnail", null, 365);
                setCookie("liveUrl", null, 365);
                setCookie("liveDate", null, 365);
                return;
            }
            const livestream = data.items[0];
            const videoId = livestream.id.videoId;
            const title = livestream.snippet.title;
            const publishedAt = livestream.snippet.publishedAt;
            //const thumbnailUrlHigh = data.items[0].snippet.thumbnails.high.url;
            const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            const dateTime = new Date(publishedAt);
            const localDateTime = dateTime.toLocaleString();

            setCookie("liveTitle", title, 365);
            setCookie("liveThumbnail", thumbnailUrlHigh, 365);
            setCookie("liveUrl", videoUrl, 365);
            setCookie("liveDate", localDateTime, 365);
            
        console.log(videoId);
        console.log(title);
        console.log(videoUrl);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function currentLivestreamPromise() {
    return new Promise((resolve, reject) => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&order=date&maxResults=1&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = data.pageInfo.totalResults;
                if(results == 0){
                    console.log("Not currently live~");
                    setCookie("liveTitle", null, 365);
                    setCookie("liveThumbnail", null, 365);
                    setCookie("liveUrl", null, 365);
                    setCookie("liveDate", null, 365);
                    resolve();
                    return;
                }
                const livestream = data.items[0];
                const videoId = livestream.id.videoId;
                const title = livestream.snippet.title;
                const publishedAt = livestream.snippet.publishedAt;
            
                const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                const dateTime = new Date(publishedAt);
                const localDateTime = dateTime.toLocaleString();

                setCookie("liveTitle", title, 365);
                setCookie("liveThumbnail", thumbnailUrlHigh, 365);
                setCookie("liveUrl", videoUrl, 365);
                setCookie("liveDate", localDateTime, 365);
            
            console.log(videoId);
            console.log(title);
            console.log(videoUrl);
            console.log("ran currentLivestreamPromise");
            resolve();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error);
            });
    });
}
function upcomingLivestream() {
    //eventType= completed, upcoming, or live
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=upcoming&type=video&order=date&maxResults=1&key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const results = data.pageInfo.totalResults;
            if(results == 0){
                console.log("No current premiere~");
                setCookie("premiereTitle", null, 365);
                setCookie("premiereThumbnail", null, 365);
                setCookie("premiereUrl", null, 365);
                setCookie("premiereDate", null, 365);
                return;
            }
            const livestream = data.items[0];
            const videoId = livestream.id.videoId;
            const title = livestream.snippet.title;
            const publishedAt = livestream.snippet.publishedAt;
            //const thumbnailUrlHigh = data.items[0].snippet.thumbnails.high.url;
            const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            const dateTime = new Date(publishedAt);
            const localDateTime = dateTime.toLocaleString();

            setCookie("premiereTitle", title, 365);
            setCookie("premiereThumbnail", thumbnailUrlHigh, 365);
            setCookie("premiereUrl", videoUrl, 365);
            setCookie("premiereDate", localDateTime, 365);
            
        console.log(videoId);
        console.log(title);
        console.log(videoUrl);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        }
    );
}
function upcomingLivestreamPromise() {
    return new Promise((resolve, reject) => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=upcoming&type=video&order=date&maxResults=1&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = data.pageInfo.totalResults;
                if(results == 0){
                    console.log("No current premiere~");
                    setCookie("premiereTitle", null, 365);
                    setCookie("premiereThumbnail", null, 365);
                    setCookie("premiereUrl", null, 365);
                    setCookie("premiereDate", null, 365);
                    resolve();
                    return;
                }
                const livestream = data.items[0];
                const videoId = livestream.id.videoId;
                const title = livestream.snippet.title;
                const publishedAt = livestream.snippet.publishedAt;

                const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
                const dateTime = new Date(publishedAt);
                const localDateTime = dateTime.toLocaleString();

                setCookie("premiereTitle", title, 365);
                setCookie("premiereThumbnail", thumbnailUrlHigh, 365);
                setCookie("premiereUrl", videoUrl, 365);
                setCookie("premiereDate", localDateTime, 365);
            
            console.log(videoId);
            console.log(title);
            console.log(videoUrl);
            console.log("ran upcomingLivestreamPromise");
            resolve();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error);
            });
    });
}
function updateDisplay(videoType) {
    defineLivestreamCookies();
    if(videoType == "premiere") {
        document.getElementById("titleDisplay").innerHTML = `${premiereEmote}${premiereTitle}`;
        document.getElementById("videoThumbnail").src = `${premiereThumbnail}`;
        document.getElementById("videoThumbnailLink").href = `${premiereUrl}`;
        document.getElementById("dateDisplay").innerHTML = `${premiereDate}`;
        console.log("switched to premiere data!");
    } else if (videoType == "live") {
        document.getElementById("titleDisplay").innerHTML = `${liveEmote}${liveTitle}`;
        document.getElementById("videoThumbnail").src = `${liveThumbnail}`;
        document.getElementById("videoThumbnailLink").href = `${liveUrl}`;
        document.getElementById("dateDisplay").innerHTML = `${liveDate}`;
        console.log("switched to live data!");
    } else if (videoType == "completed") {
        document.getElementById("titleDisplay").innerHTML = `${completedEmote}${completedTitle}`;
        document.getElementById("videoThumbnail").src = `${completedThumbnail}`;
        document.getElementById("videoThumbnailLink").href = `${completedUrl}`;
        document.getElementById("dateDisplay").innerHTML = `${completedDate}`;
        console.log("switched to completed data!");
    } else {
        console.log("updateDisplay has not recieved a proper arguement");
        return;
    }
}
function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + (1000 * 60 * 60 * 24 * days));
    document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + expires.toUTCString() + ";path=/";
}
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if(cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}
function updateButtonDisplay() {
    if(getCookie("premiereUrl") == "null"){
        document.getElementById("premiereLinkButton").style.display = "none";
        console.log("hid premiereButton");
    } else {
        document.getElementById("premiereLinkButton").style.display = "";
        console.log("revealed premiereButton")
    }
    if(getCookie("liveUrl") == "null"){
        document.getElementById("liveLinkButton").style.display = "none";;
        console.log("hid liveButton");
    } else {
        document.getElementById("liveLinkButton").style.display = "";
        console.log("revealed liveButton");
    }
    if(getCookie("completedUrl") == "null"){
        document.getElementById("completedLinkButton").style.display = "none";
        console.log("hid completedButton");
    } else {
        document.getElementById("completedLinkButton").style.display = "";
        console.log("revealed completedButton");
    }
}
function initialDisplay() {
    if(getCookie("premiereUrl") != "null"){
        console.log("attempted to initial display premiereing livestream");
        updateDisplay("premiere");
        return;
    }
    console.log("no premiereUrl");
    if(getCookie("liveUrl") != "null"){
        console.log("attempted to initial display live livestream");
        updateDisplay("live");
        return;
    }
    console.log("no liveUrl");
    if(getCookie("completedUrl") != "null"){
        console.log("attempted to initial display completed livestream");
        updateDisplay("completed");
        return;
    }
    console.log("no completedUrl");
    console.log("unable to find data");
}
function defineLivestreamCookies() {
    premiereTitle = getCookie("premiereTitle");
    premiereThumbnail = getCookie("premiereThumbnail");
    premiereUrl = getCookie("premiereUrl");
    premiereDate = getCookie("premiereDate");
    liveTitle = getCookie("liveTitle");
    liveThumbnail = getCookie("liveThumbnail");
    liveUrl = getCookie("liveUrl");
    liveDate = getCookie("liveDate");
    completedTitle = getCookie("completedTitle");
    completedThumbnail = getCookie("completedThumbnail");
    completedUrl = getCookie("completedUrl");
    completedDate = getCookie("completedDate");
}
function updateAllDisplays() {
    console.log("updateAllDisplays will run initialDisplay");
    initialDisplay();
    console.log("updateAllDisplays ran initialDisplay");
    console.log("updateAllDisplays will run updateButtonDisplay");
    updateButtonDisplay();
    console.log("updateAllDisplays ran updateButtonDisplay");
    console.log("ran updateAllDisplays");
}
function updateStreamPromise(){
    console.log("run updateStreamPromise");
    return Promise.all([
        upcomingLivestreamPromise(),
        currentLivestreamPromise(),
        latestLivestreamPromise()
    ]);
}
function updateAll() {
    updateStreamPromise()
        .then(updateAllDisplays)
        .catch(error => {
            console.error("Error updating:", error);
        });
    console.log("updated all");
}

