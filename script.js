const typingText = `Hi, I'm Christian, a BSIT student. I've found is a very happy place to be in the world of coding and technology. It's a place I love, a place where I constantly immerse myself in the pursuit of knowledge and improving what I do. Teaching myself to draw has become a hobby for me and I am always looking for new challenges to improve my skills. I can't get enough!`;
const showText = document.querySelector('.typing-text');
const typingDelay = 20;
let charIndex = 0;

function typeText() {
    if (charIndex < typingText.length) {
        showText.textContent += typingText.charAt(charIndex);
        charIndex++;        
        setTimeout(typeText, typingDelay);
    }
}

// Start typing the text immediately
typeText();

// Deep Links for Mobile and Desktop users
var isMobile = /mobile/i.test(navigator.userAgent); // Check if the user is on mobile

// Helper function for deep linking
function openAppOrWeb(appUrl, webUrl) {
    if (isMobile) {
        // For mobile devices, try to open the app
        const iframe = document.createElement("iframe");
        iframe.style.display = "none";
        iframe.src = appUrl; // The mobile deep link for the app
        document.body.appendChild(iframe);

        // Immediately fallback to web if the app cannot be opened (without timeout)
        window.location.href = webUrl; // Redirect to web if app doesn't open
    } else {
        // For desktop users, open the web version immediately
        window.location.href = webUrl;
    }
}

// Facebook
document.getElementById('facebook').addEventListener('click', function () {
    openAppOrWeb('fb://profile/100019100501787', 'https://www.facebook.com/CDR9311');
});

// Instagram
document.getElementById('instagram').addEventListener('click', function () {
    openAppOrWeb('instagram://user?username=cdr9311', 'https://www.instagram.com/cdr9311');
});

// Discord
document.getElementById('discord').addEventListener('click', function () {
    openAppOrWeb('discord-user://1167427800916041780', 'https://discord.com/users/1167427800916041780');
});

// YouTube
document.getElementById('youtube').addEventListener('click', function () {
    openAppOrWeb('vnd.youtube://channel/UC1nvZa059uaieBAklXWA7PA', 'https://www.youtube.com/@CDGamingYouTube');
});

// GitHub
document.getElementById('github').addEventListener('click', function () {
    openAppOrWeb('github://user/Christian93111', 'https://github.com/Christian93111');
});

// Replit
document.getElementById('replit').addEventListener('click', function () {
    openAppOrWeb('replit://user/CDR9311', 'https://replit.com/@CDR9311');
});

// Chess.com
document.getElementById('chess').addEventListener('click', function () {
    openAppOrWeb('chess://member/christian9311', 'https://chess.com/member/christian9311');
});

// Speedrun.com
document.getElementById('speedrun').addEventListener('click', function () {
    window.location.href = 'https://www.speedrun.com/users/Christian9311';
});
