function updateSubscriberCount() {
    
    const channelId = 'UC3n5uGu18FoCy23ggWWp8tA';
    const apiKey = getCookie("apiKey");

    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let subscriberCount = parseInt(data.items[0].statistics.subscriberCount);
            if (subscriberCount >= 1000000) {
                subscriberCount = (subscriberCount / 1000000).toFixed(2) + ' M';
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
updateSubscriberCount();
// Set interval to update subscriber count every 60 seconds (adjust interval as needed)
setInterval(updateSubscriberCount, 300000); // 300000 milliseconds = 300 seconds

function lastestLivestream() {
    
    const channelId = 'UC3n5uGu18FoCy23ggWWp8tA';
    const apiKey = getCookie("apiKey");

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const livestream = data.items[0];
            const videoId = livestream.id.videoId;
            const title = livestream.snippet.title;
            const publishedAt = livestream.snippet.publishedAt;

            const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
            const dateTime = new Date(publishedAt);
            const localDateTime = dateTime.toLocaleString();

            document.getElementById('livestreamDetails').innerHTML = `
            <p>${title}</p>
            <p>Published ${localDateTime}</p>
            <a href="${videoUrl}" target="_blank">Watch Now</a>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

lastestLivestream();