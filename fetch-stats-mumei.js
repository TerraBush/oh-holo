const channelId = 'UC3n5uGu18FoCy23ggWWp8tA'; //mumei
//const channelId = 'UCO_aKKYxn4tvrqPjcTzZ6EQ'; //fauna
//const channelId = 'UCgmPnx-EEeOrZSg5Tiw7ZRQ'; //bae
const apiKey = getCookie("apiKey");
const premiereEmote = '🕔';
const liveEmote = '🔴';
const completedEmote = '🔘';

function updateSubscriberCountMumei() {

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
// Initial call to update subscriber count
updateSubscriberCountMumei();
// Set interval to update subscriber count every 60 seconds (adjust interval as needed)
//setInterval(updateSubscriberCountMumei, 300000); // 300000 milliseconds = 300 seconds = 5 minutes

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

/*            document.getElementById('livestreamDisplay').innerHTML = ` //old replacing info
                <p class="top-left-text">${completedEmote}${title}</p>
                <a href="${videoUrl}" target="_blank">
                    <img src="${thumbnailUrlHigh}" class="card-image" alt="Image">
                </a>
                <div id="livestreamInfoDisplay">
                    <p class="bottom-left-text">${localDateTime}</p>
                    <div id="livestreamButtonDisplay">
                        <a href="${videoUrl}" class="button" id="premiereLinkButton" target="_blank">🕔</a>
                        <a href="${videoUrl}" class="button" id="liveLinkButton" target="_blank">🔴</a>
                        <a href="${videoUrl}" class="button" id="completedLinkButton" target="_blank">🔘</a>
                    </div>
                </div>
            `;*/
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

            document.getElementById('livestreamDisplay').innerHTML = `
                <p class="top-left-text">${liveEmote}${title}</p>
                <a href="${videoUrl}" target="_blank">
                    <img src="${thumbnailUrlHigh}" class="card-image" alt="Image">
                </a>
                <div id="livestreamInfoDisplay">
                    <p class="bottom-left-text">${localDateTime}</p>
                    <div id="livestreamButtonDisplay">
                        <a href="${videoUrl}" class="button" id="premiereLinkButton" target="_blank">🕔</a>
                        <a href="${videoUrl}" class="button" id="liveLinkButton" target="_blank">🔴</a>
                        <a href="${videoUrl}" class="button" id="completedLinkButton" target="_blank">🔘</a>
                    </div>
                </div>
            `;
            //<a href="${videoUrl}" class="button" target="_blank">Watch</a>
        console.log(videoId);
        console.log(title);
        console.log(videoUrl);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
    
}

currentLivestream();
