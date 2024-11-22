// Function to handle deep linking for apps
function handleAppRedirect(appScheme, appUrl, webUrl) {
    if (isMobile) {
        // Try opening the app and fall back to the web URL if the app is not installed
        const appOpen = new Image();
        appOpen.onload = function () {
            window.location.href = appUrl; // Redirect to app if installed
        };
        appOpen.onerror = function () {
            window.location.href = webUrl; // Fallback to web version if app is not installed
        };
        appOpen.src = appScheme; // Trigger the deep link

        // If the deep link doesn't work, fall back after a small timeout
        setTimeout(function () {
            window.location.href = webUrl; // Ensure fallback happens after trying to open the app
        }, 2000); // Adjust the timeout as necessary
    } else {
        window.location.href = webUrl; // Desktop users always go to the web URL
    }
}

// Check for mobile device
var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

// Facebook
document.getElementById('facebook').addEventListener('click', function () {
    handleAppRedirect('fb://profile/100019100501787', 'fb://profile/100019100501787', 'https://www.facebook.com/CDR9311');
});

// Instagram
document.getElementById('instagram').addEventListener('click', function () {
    handleAppRedirect('instagram://user?username=cdr9311', 'instagram://user?username=cdr9311', 'https://www.instagram.com/cdr9311');
});

// Discord
document.getElementById('discord').addEventListener('click', function () {
    handleAppRedirect('discord-user://1167427800916041780', 'discord-user://1167427800916041780', 'https://discord.com/users/1167427800916041780');
});

// YouTube
document.getElementById('youtube').addEventListener('click', function () {
    handleAppRedirect('vnd.youtube://channel/UC1nvZa059uaieBAklXWA7PA', 'vnd.youtube://channel/UC1nvZa059uaieBAklXWA7PA', 'https://www.youtube.com/@CDGamingYouTube');
});

// GitHub
document.getElementById('github').addEventListener('click', function () {
    handleAppRedirect('github://user/Christian93111', 'github://user/Christian93111', 'https://github.com/Christian93111');
});

// Replit
document.getElementById('replit').addEventListener('click', function () {
    handleAppRedirect('replit://user/CDR9311', 'replit://user/CDR9311', 'https://replit.com/@CDR9311');
});

// Chess.com
document.getElementById('chess').addEventListener('click', function () {
    handleAppRedirect('chess://member/christian9311', 'chess://member/christian9311', 'https://chess.com/member/christian9311');
});

// Speedrun.com
document.getElementById('speedrun').addEventListener('click', function () {
    window.location.href = 'https://www.speedrun.com/users/Christian9311'; // Open Speedrun website for both mobile and desktop
});
