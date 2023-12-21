document.addEventListener("DOMContentLoaded", function() {
    const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    let activeId = '';

    // Function to extract ID from header
    const getIdFromHeader = (header) => header.id || header.querySelector('a').getAttribute('name');

    // Function to activate corresponding TOC link
    const activateTocLink = (id) => {
        document.querySelectorAll("#toc a").forEach(a => {
            if (a.getAttribute('href') === `#${id}`) {
                a.classList.add('active');
                activeId = id;
            } else if (a.getAttribute('href') !== `#${activeId}`) {
                a.classList.remove('active');
            }
        });
    };

    // Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                activateTocLink(getIdFromHeader(entry.target));
            }
        });
    }, {
        rootMargin: '0px',
        threshold: 0.5
    });

    // Observe each header
    headers.forEach(header => {
        observer.observe(header);
    });
});
