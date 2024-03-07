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


// Function to fetch livestream details
function fetchLivestreamDetails() {
    const channelId = 'UC3n5uGu18FoCy23ggWWp8tA';
    const apiKey = getCookie("apiKey");
  
    // Construct the API request URL
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${apiKey}`;
  
    // Fetch livestream data from YouTube API
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          // Livestream is currently ongoing
          const livestream = data.items[0];
          const videoId = livestream.id.videoId;
          const title = livestream.snippet.title;
          const publishedAt = livestream.snippet.publishedAt;
  
          // Construct the YouTube video URL
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
  
          // Display livestream details
          document.getElementById('livestreamDetails').innerHTML = `
            <p>Status: Live</p>
            <p>Title: ${title}</p>
            <p>Published At: ${publishedAt}</p>
            <a href="${videoUrl}" target="_blank">Watch Now</a>
          `;
        } else {
          // No livestream currently ongoing, fetch latest livestream
          fetchLatestLivestream();
        }
      })
      .catch(error => {
        console.error('Error fetching livestream details:', error);
      });
  }
  
  // Function to fetch details of the latest livestream
  function fetchLatestLivestream() {
    const channelId = 'UC3n5uGu18FoCy23ggWWp8tA';
    const apiKey = getCookie("apiKey");
  
    // Construct the API request URL to fetch latest video (livestream)
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&eventType=completed&type=video&order=date&maxResults=1&key=${apiKey}`;
  
    // Fetch latest livestream data from YouTube API
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.items.length > 0) {
                // Check if the fetched item is a livestream
                const livestream = data.items[0];
                const liveBroadcastContent = livestream.snippet.liveBroadcastContent;
                if (liveBroadcastContent === 'live') {
                    // Livestream is available
                    const title = livestream.snippet.title;
                    const publishedAt = livestream.snippet.publishedAt;
                    const videoId = livestream.id.videoId;
                    const runtime = getLivestreamRuntime(publishedAt);
                    const thumbnailUrl = livestream.snippet.thumbnails.medium.url;
                    return { type: 'livestream', title, publishedAt, runtime, videoId, thumbnailUrl };
                } else if (liveBroadcastContent === 'upcoming') {
                    // Upcoming livestream is available
                    const title = livestream.snippet.title;
                    const publishedAt = livestream.snippet.publishedAt;
                    const scheduledStartTime = new Date(livestream.snippet.scheduledStartTime);
                    const scheduledStartLocalTime = scheduledStartTime.toLocaleString();
                    return { type: 'upcoming', title, scheduledStartTime: scheduledStartLocalTime };
                } else {
                    // Fetch latest video instead
                    return fetchLatestVideo();
                }
            } else {
                // No livestream available, fetch latest video instead
                return fetchLatestVideo();
            }
        })
        .catch(error => {
            console.error('Error fetching latest livestream details:', error);
        });
}

function getLivestreamRuntime(publishedAt) {
    // Calculate the runtime of the livestream based on the current time and the livestream's publish time
    // You can implement this function based on your requirements
}

function displayLivestream(livestreamData) {
    const livestreamContainer = document.getElementById('livestream-container');
    if (livestreamData.type === 'livestream') {
        const livestreamLink = document.createElement('a');
        livestreamLink.href = `https://www.youtube.com/watch?v=${livestreamData.videoId}`;
        livestreamLink.target = '_blank';

        const thumbnailImg = document.createElement('img');
        thumbnailImg.src = livestreamData.thumbnailUrl;
        thumbnailImg.alt = livestreamData.title;
        livestreamLink.appendChild(thumbnailImg);

        const titleElement = document.createElement('p');
        titleElement.textContent = livestreamData.title;
        livestreamLink.appendChild(titleElement);

        const runtimeElement = document.createElement('p');
        runtimeElement.textContent = `Runtime: ${livestreamData.runtime}`;
        livestreamLink.appendChild(runtimeElement);

        livestreamContainer.appendChild(livestreamLink);
    } else if (livestreamData.type === 'upcoming') {
        const upcomingLivestream = document.createElement('div');
        upcomingLivestream.textContent = `Upcoming Livestream: ${livestreamData.title}, Scheduled Start Time: ${livestreamData.scheduledStartTime}`;
        livestreamContainer.appendChild(upcomingLivestream);
    }
}

fetchLatestLivestream()
    .then(livestreamData => {
        displayLivestream(livestreamData);
    });