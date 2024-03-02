function updateSubscriberCount() {
    const channelId = 'UC3n5uGu18FoCy23ggWWp8tA';
    const apiKey = 'AIzaSyCPwdfWWjTSmphfkK-NgVKJay0x0j9dCvY';

    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const subscriberCount = data.items[0].statistics.subscriberCount;
            const viewCount = data.items[0].statistics.viewCount;
            if (subscriberCount >= 1000000) {
                subscriberCount = (subscriberCount / 1000000).toFixed(2) + ' M';
            }
            document.getElementById('viewCount').textContent = `${viewCount}`;
            document.getElementById('subscriberCount').textContent = `${subscriberCount}`;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Initial call to update subscriber count
updateSubscriberCount();

// Set interval to update subscriber count every 60 seconds (adjust interval as needed)
setInterval(updateSubscriberCount, 60000); // 60000 milliseconds = 60 seconds
