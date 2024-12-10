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
    "GG",
    "Shiorin",
    "Doki", 
    "Doob",
    "IRyS"
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
    "UCDHABijvPBnJm7F-KlNME3w", //GG
    "UCgnfPPb9JI3e9A4cXHnWbyg", //Shiorin
    "UComInW10MkHJs-_vi4rHQCQ", //Doki
    "UC6T7TJZbW6nO-qsc5coo8Pg", //Doob
    "UC8rcEBzJSleTkf_-agPM20g"  //IRyS
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
    "images\\kiarapeek.png",
    "images\\mintwink.png",
    "",
    "",
    "",
    "images\\shiozoom.png",
    "images\\dokihuh.png",
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
    "images\\kiarawink.png",
    "images\\mintload.png", 
    "",
    "",
    "",
    "images\\shiogrin.png",
    "images\\dokilean.png",
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
    "https://www.youtube.com/@dooby3d",
    "https://www.youtube.com/@IRyS"
];
const channelSoundList = [
    "sounds\\hi-1.mp3",         //Mumei
    "sounds\\konfauna.mp3",     //Fauna
    "sounds\\wazzup.mp3",       //Bae
    "sounds\\kroniichiwa.mp3",  //Kronii
    "sounds\\ohohohoho.mp3",    //Liz
    "",                         //Nerissa
    "sounds\\a.mp3",            //Gura
    "sounds\\wah.mp3",          //Ina
    "",     //Kiara
    "",     //Minto
    "",     //Raora
    "sounds\\kaelaGSH.mp3",     //Kaela
    "",     //GG
    "",     //Shiorin
    "",     //Doki
    "",     //Doob
    ""      //IRyS
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

//misc use
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
//subscriber
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
                }else if(subscriberCount >= 1000) {
                    subscriberCount = (subscriberCount / 1000) + ' K';
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
    document.getElementById('subscriberCount').textContent = channelData.channels[currentChannel].stats.subs;
    document.getElementById('viewCount').textContent = channelData.channels[currentChannel].stats.views;
}
//livestream
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
function updateLatestLivestreamHoloPromise() {
    return new Promise((resolve, reject) => {
        const url = `https://holodex.net/api/v2/videos?channel_id=${channelId}&limit=1&status=past`;
        fetch(url, {
            headers: {
                'X-APIKEY': `${apiKeyHolo}`
            }
        })
            .then(response => response.json())
            .then(holoData => {
                if(holoData.length == 0) {
                    channelData.channels[currentChannel].videos.completed.title = "null";
                    channelData.channels[currentChannel].videos.completed.thumbnail = "null";
                    channelData.channels[currentChannel].videos.completed.link = "null";
                    channelData.channels[currentChannel].videos.completed.date = "null";
                    resolve();
                    return;
                }

                let videoId = holoData[0].id;
                const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

                const dateTime = new Date(holoData[0].available_at);
                const localDateTime = dateTime.toLocaleString();

                channelData.channels[currentChannel].videos.completed.title = holoData[0].title;
                channelData.channels[currentChannel].videos.completed.thumbnail = thumbnailUrlHigh;
                channelData.channels[currentChannel].videos.completed.link = videoUrl;
                channelData.channels[currentChannel].videos.completed.date = localDateTime;
                localStorage.setItem('localChannelData', JSON.stringify(channelData));
                resolve();
            })
            .catch(error => {
                console.error('Error fetching latest livestream holo data:', error);
                reject(error);
            });
    });
}
//all live/premiere trio
function submitAllLivestreamDataPromise(data) {
    //console.log(data);
    return new Promise((resolve, reject) => {
        for(let i = 0; i < data.length; i++) {
            if(data[i].length == 0) {
                channelData.channels[channelNameList[i]].videos.premiere.title = "null";
                channelData.channels[channelNameList[i]].videos.premiere.thumbnail = "null";
                channelData.channels[channelNameList[i]].videos.premiere.link = "null";
                channelData.channels[channelNameList[i]].videos.premiere.date = "null";
                channelData.channels[channelNameList[i]].videos.live.title = "null";
                channelData.channels[channelNameList[i]].videos.live.thumbnail = "null";
                channelData.channels[channelNameList[i]].videos.live.link = "null";
                channelData.channels[channelNameList[i]].videos.live.date = "null";
                localStorage.setItem('localChannelData', JSON.stringify(channelData));
                //console.log(`${channelNameList[i]} has no premiering or live videos`);
                resolve();
                continue;
            }

            //console.log(`${channelNameList[i]} has data`);

            for(let j = 0; j < data[i].length; j++) {

                //console.log(`second loop`);
                //console.log(data[i][j]);

                if(data[i][j].status == "upcoming") {
        
                    let videoId = data[i][j].id;
                    const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        
                    const dateTime = new Date(data[i][j].start_scheduled);
                    const localDateTime = dateTime.toLocaleString();
        
                    channelData.channels[channelNameList[i]].videos.premiere.title = data[i][j].title;
                    channelData.channels[channelNameList[i]].videos.premiere.thumbnail = thumbnailUrlHigh;
                    channelData.channels[channelNameList[i]].videos.premiere.link = videoUrl;
                    channelData.channels[channelNameList[i]].videos.premiere.date = localDateTime;

                    //console.log(`${channelNameList[i]} has a premiere`);

                    if(data[i].length == 1 || j == 0) {

                        channelData.channels[channelNameList[i]].videos.live.title = "null";
                        channelData.channels[channelNameList[i]].videos.live.thumbnail = "null";
                        channelData.channels[channelNameList[i]].videos.live.link = "null";
                        channelData.channels[channelNameList[i]].videos.live.date = "null";

                        localStorage.setItem('localChannelData', JSON.stringify(channelData));
                        //console.log(`${channelNameList[i]} has no live but a premiere`);
                        continue;
                    }

                    localStorage.setItem('localChannelData', JSON.stringify(channelData));

                } else if(data[i][j].status == "live") {

                    let videoId = data[i][j].id;
                    const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
                    const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            
                    const dateTime = new Date(data[i][j].start_actual);
                    const localDateTime = dateTime.toLocaleString();
            
                    channelData.channels[channelNameList[i]].videos.live.title = data[i][j].title;
                    channelData.channels[channelNameList[i]].videos.live.thumbnail = thumbnailUrlHigh;
                    channelData.channels[channelNameList[i]].videos.live.link = videoUrl;
                    channelData.channels[channelNameList[i]].videos.live.date = localDateTime;
                    //console.log(`${channelNameList[i]} has a live`);

                    if(data[i].length == 1) {
                        channelData.channels[channelNameList[i]].videos.premiere.title = "null";
                        channelData.channels[channelNameList[i]].videos.premiere.thumbnail = "null";
                        channelData.channels[channelNameList[i]].videos.premiere.link = "null";
                        channelData.channels[channelNameList[i]].videos.premiere.date = "null";
                        localStorage.setItem('localChannelData', JSON.stringify(channelData));
                        //console.log(`${channelNameList[i]} has no premiere but a live`);
                        resolve();
                        continue;
                    }

                    localStorage.setItem('localChannelData', JSON.stringify(channelData));
                } else {
                    console.log("no holoData");
                    reject(error);
                }
            }
        }
        localStorage.setItem('localChannelData', JSON.stringify(channelData));
        resolve();
    });
}
function updateAllLivestreamHoloPromise() {
    return fetchAllLivestreamDataPromise()
        .then(data => {
            //console.log(data);
            submitAllLivestreamDataPromise(data);
            return data;
        })
}
function fetchAllLivestreamDataPromise() {
    let fetches = [];
    for(let i = 0; i < channelIdList.length; i++) {
        let url = `https://holodex.net/api/v2/live?channel_id=${channelIdList[i]}&type=stream&sort=start_actual&max_upcoming_hours=168`;
        fetches.push(fetch(url, {
            headers: {
                'X-APIKEY': `${apiKeyHolo}`
            }
        }));
    }
    return Promise.all(fetches)
        .then(responses => {
            return Promise.all(responses.map(response => {
                if(response.ok) return response.json();
                console.error(response.statusText);
            }))
        })
        .then(data => {
            return data;
        })
}
//all latest trio
function submitAllLatestLivestreamDataPromise(data) {
    return new Promise((resolve) => {
        for(let i = 0; i < data.length; i++) {
            if(data[i].length == 0) {
                channelData.channels[channelNameList[i]].videos.completed.title = "null";
                channelData.channels[channelNameList[i]].videos.completed.thumbnail = "null";
                channelData.channels[channelNameList[i]].videos.completed.link = "null";
                channelData.channels[channelNameList[i]].videos.completed.date = "null";
            }

            let videoId = data[i][0].id;
            const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;
            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

            const dateTime = new Date(data[i][0].available_at);
            const localDateTime = dateTime.toLocaleString();

            channelData.channels[channelNameList[i]].videos.completed.title = data[i][0].title;
            //console.log(data[i][0].title);
            channelData.channels[channelNameList[i]].videos.completed.thumbnail = thumbnailUrlHigh;
            //console.log(thumbnailUrlHigh);
            channelData.channels[channelNameList[i]].videos.completed.link = videoUrl;
            //console.log(videoUrl);
            channelData.channels[channelNameList[i]].videos.completed.date = localDateTime;
            //console.log(localDateTime);
        }
        localStorage.setItem('localChannelData', JSON.stringify(channelData));
        resolve();
    });
}
function updateAllLatestLivestreamHoloPromise() {
    return fetchAllLatestLivestreamDataPromise()
        .then(data => {
            //console.log(data);
            submitAllLatestLivestreamDataPromise(data);
            return data;
        })
}
function fetchAllLatestLivestreamDataPromise() {
    let fetches = [];
    for(let i = 0; i < channelIdList.length; i++) {
        let url = `https://holodex.net/api/v2/videos?channel_id=${channelIdList[i]}&limit=1&status=past`;
        fetches.push(fetch(url, {
            headers: {
                'X-APIKEY': `${apiKeyHolo}`
            }
        }));
    }
    return Promise.all(fetches)
        .then(responses => {
            return Promise.all(responses.map(response => {
                if(response.ok) return response.json();
                console.error(response.statusText);
            }))
        })
        .then(data => {
            return data;
        })
}
//all subscriber trio
function updateAllSubscriberHoloPromise() {
    return fetchAllSubscriberHoloPromise()
        .then(data => {
            //console.log(data);
            submitAllSubscriberHoloPromise(data);
            return data;
        })
}
function fetchAllSubscriberHoloPromise() {
    let fetches = [];
    for(let i = 0; i < channelIdList.length; i++) {
        let url = `https://holodex.net/api/v2/channels/${channelIdList[i]}`;
        fetches.push(fetch(url, {
            headers: {
                'X-APIKEY': `${apiKeyHolo}`
            }
        }));
    }
    return Promise.all(fetches)
        .then(responses => {
            return Promise.all(responses.map(response => {
                if(response.ok) return response.json();
                console.error(response.statusText);
            }))
        })
        .then(data => {
            return data;
        })
}
function submitAllSubscriberHoloPromise(data) {
    //console.log(data);
    return new Promise((resolve) => {
        for(let i = 0; i < data.length; i++) {
            //console.log(data[i].subscriber_count);
            let subscriberCount = parseInt(data[i].subscriber_count);
            if (subscriberCount >= 1000000) {
                subscriberCount = (subscriberCount / 1000000).toFixed(2) + ' M';
            }else if(subscriberCount >= 1000) {
                subscriberCount = (subscriberCount / 1000) + ' K';
            }else{                                                                  
                subscriberCount = subscriberCount.toLocaleString();
            }
            let viewCount = parseInt(data[i].view_count).toLocaleString();

            channelData.channels[channelNameList[i]].stats.subs = subscriberCount;
            channelData.channels[channelNameList[i]].stats.views = viewCount;
        }
        localStorage.setItem('localChannelData', JSON.stringify(channelData));
        resolve();
    });
}
//account status
function updateStreamStatus(data) {
    for(let i = 0; i < channelNameList.length; i++) {
        if(data[i].length > 0) {
            if(data[i][0].status == "live") {
                document.getElementById(`${channelNameList[i]}`).text = `${liveEmote}${channelNameList[i]}`
            } else if (data[i][0].status == "upcoming") {
                document.getElementById(`${channelNameList[i]}`).text = `${premiereEmote}${channelNameList[i]}`
            } else {
                document.getElementById(`${channelNameList[i]}`).text = `${channelNameList[i]}`
            }
        }
    }
}
function updateVideo(videoType) {
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
        console.log("updateVideo has not recieved a proper arguement");
        return;
    }
}
function updateButtonDisplay() {
    if(channelData.channels[currentChannel].videos.premiere.link == "null"){
        document.getElementById("premiereLinkButton").style.display = "none";
        //console.log("hid premiereButton");
    } else {
        document.getElementById("premiereLinkButton").style.display = "";
        //console.log("revealed premiereButton");
    }

    if(channelData.channels[currentChannel].videos.live.link == "null"){
        document.getElementById("liveLinkButton").style.display = "none";
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
function updateVideoDisplay() {
    if(channelData.channels[currentChannel].videos.live.link != "null"){
        //console.log("attempted to initial display live livestream");
        updateVideo("live");
        return;
    }
    //console.log("no liveUrl");
    if(channelData.channels[currentChannel].videos.premiere.link != "null"){
        //console.log("attempted to initial display premiereing livestream");
        updateVideo("premiere");
        return;
    }
    //console.log("no premiereUrl");
    if(channelData.channels[currentChannel].videos.completed.link != "null"){
        //console.log("attempted to initial display completed livestream");
        updateVideo("completed");
        return;
    }
    //console.log("no completedUrl");
    console.log("updateVideoDisplay unable to find data");
}
function updateDisplays() {
    updateImageDisplay();
    updateVideoDisplay();
    updateButtonDisplay();
    updateSubscriberDisplay();
}
function updateDisplaysPromise() {
    return new Promise((resolve) => {
        //updateSubscriberDisplay
        document.getElementById('subscriberCount').textContent = channelData.channels[currentChannel].stats.subs;
        document.getElementById('viewCount').textContent = channelData.channels[currentChannel].stats.views;
        //updateVideoDisplay
        if(channelData.channels[currentChannel].videos.premiere.link != "null"){
            updateVideo("premiere");
        }else if(channelData.channels[currentChannel].videos.live.link != "null"){
            updateVideo("live");
        }else if(channelData.channels[currentChannel].videos.completed.link != "null"){
            updateVideo("completed");
        }else{
            console.log("updateDisplayPromise unable to find video data");
        }
        //updateButtonDisplay
        if(channelData.channels[currentChannel].videos.premiere.link == "null"){
            document.getElementById("premiereLinkButton").style.display = "none";
        } else {
            document.getElementById("premiereLinkButton").style.display = "";
        }
        if(channelData.channels[currentChannel].videos.live.link == "null"){
            document.getElementById("liveLinkButton").style.display = "none";
        } else {
            document.getElementById("liveLinkButton").style.display = "";
        }
        if(channelData.channels[currentChannel].videos.completed.link == "null"){
            document.getElementById("completedLinkButton").style.display = "none";
        } else {
            document.getElementById("completedLinkButton").style.display = "";
        }
        //updateImageDisplay
        document.getElementById("clickableImage").src = findChannelImg(currentChannel);
        document.getElementById("altClickableImage").src = findChannelAltImg(currentChannel);
        document.getElementById("channelLink").href = findChannelLink(currentChannel);
        resolve();
    });
}
function updateStreamPromise(){
    console.log("run updateStreamPromise");
    return Promise.all([
        updateLatestLivestreamHoloPromise(),
        updateLivestreamHoloPromise(),
        //updateAllLivestreamHoloPromise(),
        updateSubscriberCountHoloPromise()
        
    ]);
}
function updateAllDisplays() {
    updateStreamPromise()
        .then(updateDisplays)
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
function updateStatusDisplay() {
    let display = document.getElementById("statusDisplay");
    display.innerHTML = "";

    //display.insertAdjacentHTML("beforeend", `<p onclick="switchDropdown('${channelNameList[0]}')">test</p><hr>`);

    for(let i = 0; i < channelNameList.length; i++) {
        //display.insertAdjacentHTML("beforeend", `<p>${channelNameList[i]}</p>`);
        let hasLive = channelData.channels[channelNameList[i]].videos.live.link.includes("null") ? false : true;
        let hasPremiere = channelData.channels[channelNameList[i]].videos.premiere.link.includes("null") ? false : true;

        if(hasLive == true) {
            display.insertAdjacentHTML("beforeend", `<p onclick="switchDropdown('${channelNameList[i]}')">${liveEmote}${channelNameList[i]}</p>`);
        } else if (hasPremiere == true) {
            display.insertAdjacentHTML("beforeend", `<p onclick="switchDropdown('${channelNameList[i]}')">${premiereEmote}${channelNameList[i]}</p>`);
        } else {
            display.insertAdjacentHTML("beforeend", `<p onclick="switchDropdown('${channelNameList[i]}')">${completedEmote}${channelNameList[i]}</p>`);
        }
        if(i < (channelNameList.length - 1)) {
            display.insertAdjacentHTML("beforeend", "<hr>");
        }
    }
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
function preloadIcons() {
    for(let i = 0; i < channelImgList.length; i++) {
        new Image().src = channelImgList[i];
        new Image().src = channelAltImgList[i];
    }
}
function preloadThumbnails() {
    for(let i = 0; i < channelNameList.length; i++) {
        new Image().src = channelData.channels[channelNameList[i]].videos.completed.thumbnail;
        new Image().src = channelData.channels[channelNameList[i]].videos.live.thumbnail;
        new Image().src = channelData.channels[channelNameList[i]].videos.premiere.thumbnail;
    }
}