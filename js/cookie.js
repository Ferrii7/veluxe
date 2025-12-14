document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('cookiesAccepted') !== 'true') {
        document.getElementById('cookie-banner').style.display = 'block';
    }
});

function acceptCookies() {
    localStorage.setItem('cookiesAccepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}