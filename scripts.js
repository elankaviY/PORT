function openProject(url) {
    window.open(url, '_blank');
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Your message has been sent!');
});