// Slider scroll
function scrollSlider(direction) {
    const slider = document.getElementById("movieSlider");
    const scrollAmount = 300;
    slider.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-box').forEach(box => {
    box.addEventListener('click', () => {
        const item = box.parentElement; // .faq-item
        const isOpen = item.classList.contains('open');

        // Close all open items first
        document.querySelectorAll('.faq-item.open').forEach(openItem => {
            openItem.classList.remove('open');
        });

        // If it wasn't open, open it
        if (!isOpen) {
            item.classList.add('open');
        }
    });
});
