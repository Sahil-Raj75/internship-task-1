// script.js

const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementById('close');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let currentIndex = 0;

// Function to open lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = 'flex';
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Function to close lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Function to show previous image
function showPrev() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Function to show next image
function showNext() {
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    lightboxImg.src = galleryItems[currentIndex].src;
}

// Add event listeners to gallery items
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
});

// Add event listeners for close and navigation buttons
closeBtn.addEventListener('click', closeLightbox);
prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Close lightbox when clicking outside the image
lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
        closeLightbox();
    }
});