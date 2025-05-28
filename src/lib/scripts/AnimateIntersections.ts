export function animateIntersections() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-animation');
            }
        });
    });
    
    const elements = document.querySelectorAll('.hidden-animation');
    elements.forEach((element) => {
        observer.observe(element);
    });
}