let currentImageIndex = 0;
const images = [
    'Picks/1.jpg', 'Picks/2.jpg', 'Picks/3.jpg',
    'Picks/4.jpg', 'Picks/5.jpg', 'Picks/6.jpg',
    'Picks/7.jpg', 'Picks/8.jpg', 'Picks/9.jpg',
    'Picks/10.jpg', 'Picks/11.jpg', 'Picks/12.jpg',
    'Picks/13.jpg', 'Picks/14.jpg', 'Picks/15.jpg',
    'Picks/16.jpg', 'Picks/17.jpg', 'Picks/18.jpg',
    'Picks/19.jpg', 'Picks/20.jpg'
];

// Open Modal
function openModal(index) {
    currentImageIndex = index;
    updateModalImage();
    document.getElementById("modal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// Change Image
function changeImage(step) {
    currentImageIndex = (currentImageIndex + step + images.length) % images.length;
    updateModalImage();
}

// Update Modal Image
function updateModalImage() {
    const modalImage = document.getElementById("modalImage");
    modalImage.src = images[currentImageIndex];
}
// Surprise Me Button
function surpriseMe() {
    const randomIndex = Math.floor(Math.random() * images.length);
    openModal(randomIndex);
}
// Update Modal Image with Fade-Out and Fade-In Animation
function updateModalImage() {
    const modalImage = document.getElementById("modalImage");

    // Apply fade-out effect
    modalImage.classList.remove("fade-in");
    modalImage.classList.add("fade-out");

    // After fade-out completes, switch the image and fade-in
    setTimeout(() => {
        modalImage.src = images[currentImageIndex];

        // Remove fade-out, apply fade-in
        modalImage.classList.remove("fade-out");
        modalImage.classList.add("fade-in");
    }, 500); // Matches the duration of fadeOut animation (0.5s)
}

