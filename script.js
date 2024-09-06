function openModal(certId) {
    document.getElementById(certId).style.display = "block";
}

function closeModal(certId) {
    document.getElementById(certId).style.display = "none";
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

