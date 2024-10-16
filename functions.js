const apiKey = getCookie("apiKey");
const premiereEmote = '🕔';
const liveEmote = '🔴';
const completedEmote = '🔘';

const channelNameList = ["Mumei", "Fauna", "Bae", "Kronii", "Liz", "Nerissa", "Gura", "Ina", "Kiara", "Minto", "Raora", "Kaela", "Gigi"];
const channelIdList = ["UC3n5uGu18FoCy23ggWWp8tA", "UCO_aKKYxn4tvrqPjcTzZ6EQ", "UCgmPnx-EEeOrZSg5Tiw7ZRQ", "UCmbs8T6MWqUHP1tIQvSgKrg", "UCW5uhrG1eCBYditmhL0Ykjw", "UC_sFNM0z0MWm9A6WlKPuMMg", "UCoSrY_IQQVpmIRZ9Xf-y93g", "UCMwGHR0BTZuLsmjY_NT5Pwg", "UCHsx4Hqa-1ORjQTh9TYDhww", "UCcHHkJ98eSfa5aj0mdTwwLQ", "UCl69AEx4MdqMZH7Jtsm7Tig", "UCZLZ8Jjx_RN2CXloOmgTHVg", "UCDHABijvPBnJm7F-KlNME3w"];
const channelImgList = ["images\\mumeiload.png", "images\\fauuuuuna.png", "images\\baeconfused.png", "images\\kroniiwink.png", "images\\lizfreak.png", "images\\rissavibe.png", "images\\guraspin.png", "images\\tomorrow.png", "", "", "", ""];
const channelAltImgList = ["images\\smolmei.jpg", "images\\smolna.png", "images\\smolbae.jpg", "images\\smolnii.jpg", "images\\woahliz.png", "images\\rissastare.jpg", "images\\guradum.jpg", "images\\inaeat.png", "", "", "", ""];
const channelLinkList = ["https://www.youtube.com/@NanashiMumei", "https://www.youtube.com/@ceresfauna", "https://www.youtube.com/@HakosBaelz", "https://www.youtube.com/@OuroKronii", "https://www.youtube.com/@holoen_erbloodflame", "https://www.youtube.com/@NerissaRavencroft", "https://www.youtube.com/@GawrGura", "https://www.youtube.com/@NinomaeInanis", "https://www.youtube.com/@TakanashiKiara", "https://www.youtube.com/@mintfantome", "https://www.youtube.com/@holoen_raorapanthera", "https://www.youtube.com/@KaelaKovalskia", "https://www.youtube.com/@holoen_gigimurin"];
const channelSoundList = ["sounds\\hi-1.mp3", "sounds\\konfauna.mp3", "sounds\\wazzup.mp3", "sounds\\kroniichiwa.mp3", "", "", "sounds\\a.mp3", "sounds\\wah.mp3", "", "", "", "", ""];

var currentChannel;
var channelId;

let channelData;

if(getTheme()) {
    currentChannel = getTheme();
    channelId = findChannelId(getTheme());
    document.getElementById("channelSelector").value = getTheme();
} else {
    currentChannel = channelAltImgList[0];
    channelId = channelIdList[0];
}

var premiereTitle = getCookie(`premiereTitle`);
var premiereThumbnail = getCookie(`premiereThumbnail`);
var premiereUrl = getCookie(`premiereUrl`);
var premiereDate = getCookie(`premiereDate`);

var liveTitle = getCookie(`liveTitle`);
var liveThumbnail = getCookie(`liveThumbnail`);
var liveUrl = getCookie(`liveUrl`);
var liveDate = getCookie(`liveDate`);

var completedTitle = getCookie(`completedTitle`);
var completedThumbnail = getCookie(`completedThumbnail`);
var completedUrl = getCookie(`completedUrl`);
var completedDate = getCookie(`completedDate`);

var subscriberCount = getCookie(`subscriberCount`);
var viewCount = getCookie(`viewCount`);

function setTheme(theme) {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
}
function getTheme() {
    const theme = localStorage.getItem('theme');
    if(theme) {
        setTheme(theme);
    }
    return theme;
}
function findChannelId(channelName){
    const x = channelIdList[channelNameList.indexOf(channelName)];
    //console.log(x);
    return x;
}
function findChannelImg(channelName){
    const x = channelImgList[channelNameList.indexOf(channelName)];
    //console.log(x);
    return x;
}
function findChannelAltImg(channelName){
    const x = channelAltImgList[channelNameList.indexOf(channelName)];
    //console.log(x);
    return x;
}
function findChannelLink(channelName){
    const x = channelLinkList[channelNameList.indexOf(channelName)];
    //console.log(x);
    return x;
}
function findChannelSound(channelName){
    const x = channelSoundList[channelNameList.indexOf(channelName)];
    //console.log(x);
    return x;
}
function playNoise() {
    //const r = new Audio(`sounds/hi-1.mp3`);
    const r = new Audio(findChannelSound(currentChannel));
    r.volume = .6;
    r.play();
}
function randomNumber(x, y){
    return Math.floor(Math.random()*y) + x;
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

            setCookie("subscriberCount", subscriberCount, 365);
            setCookie("viewCount", viewCount, 365);

            //document.getElementById('subscriberCount').textContent = `${subscriberCount}`;
            //document.getElementById('viewCount').textContent = `${viewCount}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}
function updateSubscriberCountPromise() {
    return new Promise((resolve, reject) => {
        console.log(`before updateSubscriberDisplayPromise: ${subscriberCount}, ${viewCount}`);

        const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = data.pageInfo.totalResults;
                    if(results == 0){
                        console.log("No channel data");
                        setCookie("subscriberCount", null, 365);
                        setCookie("viewCount", null, 365);
                        resolve();
                        return;
                    }
                let subscriberCount = parseInt(data.items[0].statistics.subscriberCount);
                if (subscriberCount >= 1000000) {
                    subscriberCount = (subscriberCount / 1000000).toFixed(2) + ' M';
                }else{
                    subscriberCount = subscriberCount.toLocaleString();
                }
                let viewCount = parseInt(data.items[0].statistics.viewCount).toLocaleString();

                setCookie("subscriberCount", subscriberCount, 365);
                setCookie("viewCount", viewCount, 365);
                console.log(`after updateSubscriberDisplayPromise: ${subscriberCount}, ${viewCount}`);
                resolve();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error);
            });
    });
}
function updateSubscriberDisplay() {
    defineChannelStatCookies();
    document.getElementById('subscriberCount').textContent = subscriberCount;
    document.getElementById('viewCount').textContent = viewCount;

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
function updateImageDisplay() {
    document.getElementById("clickableImage").src = findChannelImg(currentChannel);
    document.getElementById("altClickableImage").src = findChannelAltImg(currentChannel);
    document.getElementById("channelLink").href = findChannelLink(currentChannel);
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
    console.log("initialDisplay unable to find data");
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
function defineChannelStatCookies() {
    subscriberCount = getCookie("subscriberCount");
    viewCount = getCookie("viewCount");
}
function updateAllDisplays() {
    updateImageDisplay();
    initialDisplay();
    updateButtonDisplay();
    updateSubscriberDisplay();
}
function updateStreamPromise(){
    console.log("run updateStreamPromise");
    return Promise.all([
        upcomingLivestreamPromise(),
        currentLivestreamPromise(),
        latestLivestreamPromise(),
        updateSubscriberCountPromise()
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
function fetchData() {
    return fetch('datatemplate.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}
function defineData() {
    fetchData()
        .then(obj => {
            channelData = obj;
            console.log(channelData.channels.Mumei.stats.views);
            localStorage.setItem('localChannelData', obj);
            const x = localStorage.getItem('localChannelData');
            console.log(x);
        })
        .catch(error => {
            console.error("Error fetching:", error);
        });
}
function defineDataPromise() {
    return new Promise((resolve, reject) => {
        fetchData()
            .then(obj => {
                channelData = obj;
                resolve();
            })
            .catch(error => {
                console.error("Error fetching:", error);
                reject(error);
            });
    });
}
