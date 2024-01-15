// carousel.js

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const staticItems = document.querySelectorAll('.static-item');

function showItem(element, index) {
    element.forEach((item, i) => {
        item.style.display = i === index ? 'block' : 'none';
    });
}

function nextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showItem(carouselItems, currentIndex);
}

// Initial display
showItem(carouselItems, currentIndex);

// Auto-rotate every 3 seconds (adjust as needed)
setInterval(nextItem, 10000);

// Add these lines in your existing JavaScript file (carousel.js)

let likeCount = 0;

function likePage() {
    likeCount++;
    updateLikeCounter();
}

function updateLikeCounter() {
    const likeCounter = document.getElementById('like-counter');
    likeCounter.textContent = likeCount;
}
