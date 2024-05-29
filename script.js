document.getElementById('fetch-button').addEventListener('click', fetchImage);

async function fetchImage() {
    try {
        const response = await fetch('https://picsum.photos/v2/list');
        const data = await response.json();
        const randomImage = data[Math.floor(Math.random() * data.length)];
        
        const img = document.createElement('img');
        img.src = randomImage.download_url;
        img.alt = `Photo by ${randomImage.author}`;

        const container = document.getElementById('image-container');
        container.insertBefore(img, container.firstChild);

        console.log(`Author: ${randomImage.author}`);
    } catch (error) {
        console.error('Error fetching image:', error);
    }
}
