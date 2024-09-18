

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
function lastestLivestream() {
    //eventType= completed, upcoming, or live
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const livestream = data.items[0];
            const videoId = livestream.id.videoId;
            const title = livestream.snippet.title;
            const publishedAt = livestream.snippet.publishedAt;
            //const thumbnailUrlHigh = data.items[0].snippet.thumbnails.high.url;
            const thumbnailUrlHigh = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`;

            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            const dateTime = new Date(publishedAt);
            const localDateTime = dateTime.toLocaleString();
            




            document.getElementById("titleDisplay").innerHTML = `${completedEmote}${title}`;
            document.getElementById("videoThumbnail").src = `${thumbnailUrlHigh}`;
            document.getElementById("videoThumbnailLink").href = `${videoUrl}`;
            document.getElementById("dateDisplay").innerHTML = `${localDateTime}`;
            document.getElementById("premiereLinkButton").href = `${videoUrl}`;
            document.getElementById("liveLinkButton").href = `${videoUrl}`;
            document.getElementById("completedLinkButton").href = `${videoUrl}`;

        console.log(videoId);
        console.log(title);
        console.log(videoUrl);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
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
                lastestLivestream();
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

            document.getElementById("titleDisplay").innerHTML = `${liveEmote}${title}`;
            document.getElementById("videoThumbnail").src = `${thumbnailUrlHigh}`;
            document.getElementById("videoThumbnailLink").href = `${videoUrl}`;
            document.getElementById("dateDisplay").innerHTML = `${localDateTime}`;
            document.getElementById("premiereLinkButton").href = `${videoUrl}`;
            document.getElementById("liveLinkButton").href = `${videoUrl}`;
            document.getElementById("completedLinkButton").href = `${videoUrl}`;
            
        console.log(videoId);
        console.log(title);
        console.log(videoUrl);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
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
                currentLivestream();
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

            document.getElementById("titleDisplay").innerHTML = `${premiereEmote}${title}`;
            document.getElementById("videoThumbnail").src = `${thumbnailUrlHigh}`;
            document.getElementById("videoThumbnailLink").href = `${videoUrl}`;
            document.getElementById("dateDisplay").innerHTML = `${localDateTime}`;
            document.getElementById("premiereLinkButton").href = `${videoUrl}`;
            document.getElementById("liveLinkButton").href = `${videoUrl}`;
            document.getElementById("completedLinkButton").href = `${videoUrl}`;
            
        console.log(videoId);
        console.log(title);
        console.log(videoUrl);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
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

