const typingText = `Hi, I'm Christian, an 18-year-old. Having no "social life" I've found is a very happy place to be in the world of coding and technology. It's a place I love, a place where I constantly immerse myself in the pursuit of knowledge and improving what I do. Teaching myself to draw has become a hobby for me and I am always looking for new challenges to improve my skills. I can't get enough!.`;
const typingDelay = 20;
const showText = document.querySelector('.typing-text');
let charIndex = 0;

function typeText() {
    if (charIndex < typingText.length) {
        showText.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingDelay);
    }
}

typeText();


// Deep Links (Universal Links) For Mobile Users And Desktop Users Check on HTML Code on `` Line 18 Code or <div class="button-container"> ``
// 1.) Check For Mobile Device
var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
// 2.) Use Different Url Scheme for App if Mobile
document.getElementById('facebook').addEventListener('click', function () {
    if (isMobile) {
        // 3.) Try to Open the App
        try {
            navigator.startApp.check('fb://profile/100019100501787').then(function () {
                window.location.href = 'fb://profile/100019100501787'; // 4.) App is Installed, Redirect tO App Url
            });
        } catch (error) {
            window.location.href = 'https://m.facebook.com/profile.php/?id=100019100501787'; // 5.) App is not Installed, Show a Link tO The App (Maybe this Link Works for FB Lite Users)
        }
    } else {
        window.location.href = 'https://www.facebook.com/CDR9311'; // Desktop Users
    }
});

// 6.) Repeat the same Logic for other Apps
document.getElementById('instagram').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('instagram://user?username=cdr9311').then(function () {
                window.location.href = 'instagram://user?username=cdr9311';
            });
        } catch (error) {
            window.location.href = 'https://www.instagram.com/cdr9311';
        }
    } else {
        window.location.href = 'https://www.instagram.com/cdr9311';
    }
});

document.getElementById('discord').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('discord-user://1167427800916041780').then(function () {
                window.location.href = 'discord-user://1167427800916041780';
            });
        } catch (error) {
            window.location.href = 'https://discord.com/users/1167427800916041780';
        }
    } else {
        window.location.href = 'https://discord.com/users/1167427800916041780';
    }
});

document.getElementById('youtube').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('vnd.youtube://channel/UC1nvZa059uaieBAklXWA7PA').then(function () {
                window.location.href = 'vnd.youtube://channel/UC1nvZa059uaieBAklXWA7PA';
            });
        } catch (error) {
            window.location.href = 'https://www.youtube.com/@CDGamingYouTube';
        }
    } else {
        window.location.href = 'https://www.youtube.com/@CDGamingYouTube';
    }
});

document.getElementById('github').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('github://user/Christian93111').then(function () {
                window.location.href = 'github://user/Christian93111';
            });
        } catch (error) {
            window.location.href = 'https://github.com/Christian93111';
        }
    } else {
        window.location.href = 'https://github.com/Christian93111';
    }
});

document.getElementById('replit').addEventListener('click', function () {
    if (isMobile) {
        try {
            navigator.startApp.check('replit://user/CDR9311').then(function () {
                window.location.href = 'replit://user/CDR9311';
            });
        } catch (error) {
            window.location.href = 'https://replit.com/@CDR9311';
        }
    } else {
        window.location.href = 'https://replit.com/@CDR9311';
    }
});