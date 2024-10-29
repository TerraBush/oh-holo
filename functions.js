const apiKey = getCookie("apiKey");
const apiKeyHolo = getCookie("apiKeyHolo");
const premiereEmote = '🕔';
const liveEmote = '🔴';
const completedEmote = '🔘';

const channelNameList = [
    "Mumei",
    "Fauna",
    "Bae",
    "Kronii",
    "Liz",
    "Nerissa",
    "Gura",
    "Ina",
    "Kiara",
    "Minto",
    "Raora",
    "Kaela",
    "Gigi",
    "Shiorin",
    "Doki", 
    "Doob"
];
const channelIdList = [
    "UC3n5uGu18FoCy23ggWWp8tA", //Mumei
    "UCO_aKKYxn4tvrqPjcTzZ6EQ", //Fauna
    "UCgmPnx-EEeOrZSg5Tiw7ZRQ", //Bae
    "UCmbs8T6MWqUHP1tIQvSgKrg", //Kronii
    "UCW5uhrG1eCBYditmhL0Ykjw", //Liz
    "UC_sFNM0z0MWm9A6WlKPuMMg", //Nerissa
    "UCoSrY_IQQVpmIRZ9Xf-y93g", //Gura
    "UCMwGHR0BTZuLsmjY_NT5Pwg", //Ina
    "UCHsx4Hqa-1ORjQTh9TYDhww", //Kiara
    "UCcHHkJ98eSfa5aj0mdTwwLQ", //Minto
    "UCl69AEx4MdqMZH7Jtsm7Tig", //Raora
    "UCZLZ8Jjx_RN2CXloOmgTHVg", //Kaela
    "UCDHABijvPBnJm7F-KlNME3w", //Gigi
    "UCgnfPPb9JI3e9A4cXHnWbyg", //Shiorin
    "UComInW10MkHJs-_vi4rHQCQ", //Doki
    "UC6T7TJZbW6nO-qsc5coo8Pg"  //Doob
];
const channelImgList = [
    "images\\mumeiload.png",
    "images\\fauuuuuna.png",
    "images\\baeconfused.png",
    "images\\kroniiwink.png",
    "images\\lizfreak.png",
    "images\\rissavibe.png",
    "images\\guraspin.png",
    "images\\tomorrow.png",
    "",
    "images\\mintwink.png",
    "",
    "",
    "",
    "",
    ""
];
const channelAltImgList = [
    "images\\smolmei.jpg",
    "images\\smolna.png",
    "images\\smolbae.jpg",
    "images\\smolnii.jpg",
    "images\\woahliz.png",
    "images\\rissastare.jpg",
    "images\\guradum.jpg",
    "images\\inaeat.png",
    "",
    "images\\mintload.png", 
    "",
    "",
    "",
    "",
    ""
];
const channelLinkList = [
    "https://www.youtube.com/@NanashiMumei",
    "https://www.youtube.com/@ceresfauna",
    "https://www.youtube.com/@HakosBaelz",
    "https://www.youtube.com/@OuroKronii",
    "https://www.youtube.com/@holoen_erbloodflame",
    "https://www.youtube.com/@NerissaRavencroft",
    "https://www.youtube.com/@GawrGura", 
    "https://www.youtube.com/@NinomaeInanis",
    "https://www.youtube.com/@TakanashiKiara",
    "https://www.youtube.com/@mintfantome",
    "https://www.youtube.com/@holoen_raorapanthera",
    "https://www.youtube.com/@KaelaKovalskia",
    "https://www.youtube.com/@holoen_gigimurin",
    "https://www.youtube.com/@ShioriNovella",
    "https://www.youtube.com/@Dokibird",
    "https://www.youtube.com/@dooby3d"
];
const channelSoundList = [
    "sounds\\hi-1.mp3",
    "sounds\\konfauna.mp3",
    "sounds\\wazzup.mp3",
    "sounds\\kroniichiwa.mp3",
    "sounds\\ohohohoho.mp3",
    "",
    "sounds\\a.mp3",
    "sounds\\wah.mp3",
    "",
    "",
    "",
    "",
    "", 
    "",
    ""
];


let holoDataTest = [
  {
    "id": "J3dODan6-u8",
    "title": "test upcoming",
    "type": "stream",
    "topic_id": "TCG_Card_Shop_Simulator",
    "published_at": "2024-10-25T06:58:08.000Z",
    "available_at": "2024-10-26T03:00:00.000Z",
    "duration": 0,
    "status": "upcoming",
    "start_scheduled": "2024-10-26T03:00:00.000Z",
    "live_viewers": 0,
    "channel": {
      "id": "UCZLZ8Jjx_RN2CXloOmgTHVg",
      "name": "Kaela Kovalskia Ch. hololive-ID",
      "org": "Hololive",
      "suborg": "keIndonesia 3rd Gen (holoh3ro)",
      "type": "vtuber",
      "photo": "https://yt3.ggpht.com/i-aqA-4BPUKlCYErdtAkp2_s2AsG_8IB1saxXSSBXevz6bA8ptaIm53-SXB1_KIODP4SI4_l=s800-c-k-c0x00ffffff-no-rj",
      "english_name": "Kaela Kovalskia"
    }
  },
  {
    "id": "J3dODan6-u8",
    "title": "test live",
    "type": "stream",
    "topic_id": "TCG_Card_Shop_Simulator",
    "published_at": "2024-10-25T06:58:08.000Z",
    "available_at": "2024-10-26T03:00:00.000Z",
    "duration": 0,
    "status": "live",
    "start_scheduled": "2024-10-26T03:00:00.000Z",
    "live_viewers": 0,
    "channel": {
      "id": "UCZLZ8Jjx_RN2CXloOmgTHVg",
      "name": "Kaela Kovalskia Ch. hololive-ID",
      "org": "Hololive",
      "suborg": "keIndonesia 3rd Gen (holoh3ro)",
      "type": "vtuber",
      "photo": "https://yt3.ggpht.com/i-aqA-4BPUKlCYErdtAkp2_s2AsG_8IB1saxXSSBXevz6bA8ptaIm53-SXB1_KIODP4SI4_l=s800-c-k-c0x00ffffff-no-rj",
      "english_name": "Kaela Kovalskia"
    }
  }
];

var currentChannel;
var channelId;

let channelData;
let holoChannelData;

if(getTheme()) {
    currentChannel = getTheme();
    channelId = findChannelId(getTheme());
    document.getElementById("channelSelector").value = getTheme();
} else {
    currentChannel = channelAltImgList[0];
    channelId = channelIdList[0];
}

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
function updateSubscriberCountHoloPromise() {
    return new Promise((resolve, reject) => {
        const url = `https://holodex.net/api/v2/channels/${channelId}`;
        fetch(url, {
            headers: {
                'X-APIKEY': 'b3051192-044d-4da1-8822-75a9160af659'
            }
        })
            .then(response => response.json())
            .then(holoData => {

                let subscriberCount = parseInt(holoData.subscriber_count);
                if (subscriberCount >= 1000000) {
                    subscriberCount = (subscriberCount / 1000000).toFixed(2) + ' M';
                }else{
                    subscriberCount = subscriberCount.toLocaleString();
                }
                let viewCount = parseInt(holoData.view_count).toLocaleString();

                channelData.channels[currentChannel].stats.subs = subscriberCount;
                channelData.channels[currentChannel].stats.views = viewCount; 
                localStorage.setItem('localChannelData', JSON.stringify(channelData));
                resolve();
            })
            .catch(error => {
                console.error('Error fetching holo data:', error);
                reject(error);
            });
    });
}
function updateSubscriberDisplay() {
    document.getElementById('subscriberCount').textContent = channelData.channels[currentChannel].stats.subs;;
    document.getElementById('viewCount').textContent = channelData.channels[currentChannel].stats.views;

}
function latestLivestreamPromise() {
    return new Promise((resolve, reject) => {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const results = data.pageInfo.totalResults;
                if(results == 0){
                    //console.log("No completed strem~");
                    channelData.channels[currentChannel].videos.completed.title = "null";
                    channelData.channels[currentChannel].videos.completed.thumbnail = "null";
                    channelData.channels[currentChannel].videos.completed.link = "null";
                    channelData.channels[currentChannel].videos.completed.date = "null";
                    localStorage.setItem('localChannelData', JSON.stringify(channelData));
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

                channelData.channels[currentChannel].videos.completed.title = title;
                channelData.channels[currentChannel].videos.completed.thumbnail = thumbnailUrlHigh;
                channelData.channels[currentChannel].videos.completed.link = videoUrl;
                channelData.channels[currentChannel].videos.completed.date = localDateTime;
                localStorage.setItem('localChannelData', JSON.stringify(channelData));

//            console.log(videoId);
//            console.log(title);
//            console.log(videoUrl);
//            console.log("ran latestLivestreamPromise");
            resolve();
            })
            .catch(error => {
                console.error('Error fetching latest livestream data:', error);
                reject(error);
            });
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
                    //console.log("Not currently live~");
                    channelData.channels[currentChannel].videos.live.title = "null";
                    channelData.channels[currentChannel].videos.live.thumbnail = "null";
                    channelData.channels[currentChannel].videos.live.link = "null";
                    channelData.channels[currentChannel].videos.live.date = "null";
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

                channelData.channels[currentChannel].videos.live.title = title;
                channelData.channels[currentChannel].videos.live.thumbnail = thumbnailUrlHigh;
                channelData.channels[currentChannel].videos.live.link = videoUrl;
                channelData.channels[currentChannel].videos.live.date = localDateTime;
                localStorage.setItem('localChannelData', JSON.stringify(channelData));
            
//            console.log(videoId);
//            console.log(title);
//            console.log(videoUrl);
//            console.log("ran currentLivestreamPromise");
            resolve();
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                reject(error);
            });
    });
}
function updateLivestreamHoloPromise() {
    return new Promise((resolve, reject) => {
        const url = `https://holodex.net/api/v2/live?channel_id=${channelId}&type=stream&sort=start_actual&max_upcoming_hours=168`;
        fetch(url, {
            headers: {
                'X-APIKEY': `${apiKeyHolo}`
            }
        })
            .then(response => response.json())
            .then(holoData => {
                if(holoData.length == 0) {
                    channelData.channels[currentChannel].videos.premiere.title = "null";
                    channelData.channels[currentChannel].videos.premiere.thumbnail = "null";
                    channelData.channels[currentChannel].videos.premiere.link = "null";
                    channelData.channels[currentChannel].videos.premiere.date = "null";
                    channelData.channels[currentChannel].videos.live.title = "null";
                    channelData.channels[currentChannel].videos.live.thumbnail = "null";
                    channelData.channels[currentChannel].videos.live.link = "null";
                    channelData.channels[currentChannel].videos.live.date = "null";
                    resolve();
                    return;
                }else if(holoData.length == 2 && holoData[0].status == "upcoming") {
                    channelData.channels[currentChannel].videos.live.title = "null";
                    channelData.channels[currentChannel].videos.live.thumbnail = "null";
                    channelData.channels[currentChannel].videos.live.link = "null";
                    channelData.channels[currentChannel].videos.live.date = "null";
                }

                for(let i = 0; i < holoData.length; i++){
                    if(holoData[i].status == "upcoming") {
        
                        let videoId = holoData[i].id;
                        const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        
                        const dateTime = new Date(holoData[i].start_scheduled);
                        const localDateTime = dateTime.toLocaleString();
        
                        channelData.channels[currentChannel].videos.premiere.title = holoData[i].title;
                        channelData.channels[currentChannel].videos.premiere.thumbnail = thumbnailUrlHigh;
                        channelData.channels[currentChannel].videos.premiere.link = videoUrl;
                        channelData.channels[currentChannel].videos.premiere.date = localDateTime;
                        localStorage.setItem('localChannelData', JSON.stringify(channelData));

                        if(holoData.length == 1) {
                            channelData.channels[currentChannel].videos.live.title = "null";
                            channelData.channels[currentChannel].videos.live.thumbnail = "null";
                            channelData.channels[currentChannel].videos.live.link = "null";
                            channelData.channels[currentChannel].videos.live.date = "null";
                            resolve();
                            return;
                        }

                    }else if(holoData[i].status == "live") {

                        let videoId = holoData[i].id;
                        const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            
                        const dateTime = new Date(holoData[i].start_actual);
                        const localDateTime = dateTime.toLocaleString();
            
                        channelData.channels[currentChannel].videos.live.title = holoData[i].title;
                        channelData.channels[currentChannel].videos.live.thumbnail = thumbnailUrlHigh;
                        channelData.channels[currentChannel].videos.live.link = videoUrl;
                        channelData.channels[currentChannel].videos.live.date = localDateTime;
                        localStorage.setItem('localChannelData', JSON.stringify(channelData));

                        if(holoData.length == 1) {
                            channelData.channels[currentChannel].videos.premiere.title = "null";
                            channelData.channels[currentChannel].videos.premiere.thumbnail = "null";
                            channelData.channels[currentChannel].videos.premiere.link = "null";
                            channelData.channels[currentChannel].videos.premiere.date = "null";
                            resolve();
                            return;
                        }

                    } else {
                        console.log("no holoData");
                        reject(error);
                    }
                }
                resolve();
            })
            .catch(error => {
                console.error('Error fetching holo data:', error);
                reject(error);
            });
    });
}
function updateAllLivestreamHoloPromise() {
    /*
        game Plan:
        new function to return an array of fetch promises as Promise.all(array) (fetchAll() or something)
        use .map to create a corresponding array of all the responses from the promises of the input array
        create function(similar to updateallLivestreamHoloPromise() that takes a json and adds it to channelData)
        create a promise chain; fetchAll().then(mapAllData).then(udpateAllData)
    */
}
function allLivestreamDataPromise() {
    let fetches = [];
    let responses = [];
    for(let i = 0; i < channelIdList.length; i++) {
        let url = `https://holodex.net/api/v2/live?channel_id=${channelIdList[i]}&type=stream&sort=start_actual&max_upcoming_hours=168`;
        fetches.push(fetch(url, {
            headers: {
                'X-APIKEY': `${apiKeyHolo}`
            }
        })
    console.log(fetched);
    }

}  

function updateDisplay(videoType) {
    if(videoType == "premiere") {
        document.getElementById("titleDisplay").innerHTML = `${premiereEmote}${channelData.channels[currentChannel].videos.premiere.title}`;
        document.getElementById("videoThumbnail").src = channelData.channels[currentChannel].videos.premiere.thumbnail;
        document.getElementById("videoThumbnailLink").href = channelData.channels[currentChannel].videos.premiere.link;
        document.getElementById("dateDisplay").innerHTML = channelData.channels[currentChannel].videos.premiere.date;
        //console.log("switched to premiere data!");
    } else if (videoType == "live") {
        document.getElementById("titleDisplay").innerHTML = `${liveEmote}${channelData.channels[currentChannel].videos.live.title}`;
        document.getElementById("videoThumbnail").src = channelData.channels[currentChannel].videos.live.thumbnail;
        document.getElementById("videoThumbnailLink").href = channelData.channels[currentChannel].videos.live.link;
        document.getElementById("dateDisplay").innerHTML = channelData.channels[currentChannel].videos.live.date;
        //console.log("switched to live data!");
    } else if (videoType == "completed") {
        document.getElementById("titleDisplay").innerHTML = `${completedEmote}${channelData.channels[currentChannel].videos.completed.title}`;
        document.getElementById("videoThumbnail").src = channelData.channels[currentChannel].videos.completed.thumbnail;
        document.getElementById("videoThumbnailLink").href = channelData.channels[currentChannel].videos.completed.link;
        document.getElementById("dateDisplay").innerHTML = channelData.channels[currentChannel].videos.completed.date;
        //console.log("switched to completed data!");
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
    if(channelData.channels[currentChannel].videos.premiere.link == "null"){
        document.getElementById("premiereLinkButton").style.display = "none";
        //console.log("hid premiereButton");
    } else {
        document.getElementById("premiereLinkButton").style.display = "";
        //console.log("revealed premiereButton")
    }

    if(channelData.channels[currentChannel].videos.live.link == "null"){
        document.getElementById("liveLinkButton").style.display = "none";;
        //console.log("hid liveButton");
    } else {
        document.getElementById("liveLinkButton").style.display = "";
        //console.log("revealed liveButton");
    }

    if(channelData.channels[currentChannel].videos.completed.link == "null"){
        document.getElementById("completedLinkButton").style.display = "none";
        //console.log("hid completedButton");
    } else {
        document.getElementById("completedLinkButton").style.display = "";
        //console.log("revealed completedButton");
    }
}
function updateImageDisplay() {
    document.getElementById("clickableImage").src = findChannelImg(currentChannel);
    document.getElementById("altClickableImage").src = findChannelAltImg(currentChannel);
    document.getElementById("channelLink").href = findChannelLink(currentChannel);
}
function initialDisplay() {
    if(channelData.channels[currentChannel].videos.premiere.link != "null"){
        //console.log("attempted to initial display premiereing livestream");
        updateDisplay("premiere");
        return;
    }
    //console.log("no premiereUrl");
    if(channelData.channels[currentChannel].videos.live.link != "null"){
        //console.log("attempted to initial display live livestream");
        updateDisplay("live");
        return;
    }
    //console.log("no liveUrl");
    if(channelData.channels[currentChannel].videos.completed.link != "null"){
        //console.log("attempted to initial display completed livestream");
        updateDisplay("completed");
        return;
    }
    //console.log("no completedUrl");
    console.log("initialDisplay unable to find data");
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
        updateLivestreamHoloPromise(),
        //updateAllLivestreamHoloPromise(),
        latestLivestreamPromise(),
        updateSubscriberCountHoloPromise()
        
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
            if(localStorage.getItem('localChannelData')) {
                return;
            }
            localStorage.setItem('localChannelData', JSON.stringify(obj));
            //const x = JSON.parse(localStorage.getItem('localChannelData'));
            //console.log(x.channels.Mumei.stats.views);
        })
        .catch(error => {
            console.error("Error fetching:", error);
        });
}
function defineDataPromise() {
    return new Promise((resolve, reject) => {
        //console.log('running defineDataPromise');
        fetchData()
        .then(obj => {
            if(localStorage.getItem('localChannelData')) {
              resolve();
              return;
            }
            localStorage.setItem('localChannelData', JSON.stringify(obj));
            resolve();
        })
        .catch(error => {
            console.error("Error fetching:", error);
            reject(error);
        });
    });
}
function updateChannelData() {
    channelData = JSON.parse(localStorage.getItem('localChannelData'));
}
function updateChannelDataPromise() {
    return new Promise((resolve, reject) => {
        channelData = JSON.parse(localStorage.getItem('localChannelData'));
        if(channelData) {
            resolve(channelData);
        } else {
            reject(new Error('localChannelData not found'));
        }
    });

}
function readFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.addEventListener('load', a => {
            resolve(a.target.result);
            channelData = JSON.parse(a.target.result);
            localStorage.setItem('localChannelData', a.target.result);
        });
        reader.addEventListener('error', e => {
            reject(e);
        });
        reader.readAsText(file);
    })
}
