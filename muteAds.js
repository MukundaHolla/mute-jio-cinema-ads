// (function() {
//     'use strict';

//     let userMutePreference = false;

//     const checkForAd = () => {
//         const adImgElement = document.querySelector('img[alt="Adds logo"]');

//         if (adImgElement && adImgElement.src) {
//             // Ad is being displayed
//             if (!window.navigator.muted) {
//                 window.navigator.muted = true;
//             }
//         } else {
//             // Ad is not being displayed
//             if (window.navigator.muted !== userMutePreference) {
//                 window.navigator.muted = userMutePreference;
//             }
//         }
//     };

//     const muteVolume = (mute) => {
//         const video = document.querySelector('video');
//         if (video) {
//             video.muted = mute;
//         }
//     };

//     Object.defineProperty(window.navigator, 'muted', {
//         set: (mute) => {
//             muteVolume(mute);
//         },
//         get: () => {
//             const video = document.querySelector('video');
//             return video ? video.muted : false;
//         }
//     });

//     setInterval(checkForAd, 500); // Check for ads every 0.5 second

//     // Listen for user's mute/unmute action
//     document.addEventListener('click', (event) => {
//         const muteButton = document.querySelector('.hlsPlayerRoot .mute-button');
//         if (muteButton && event.target.closest('.mute-button')) {
//             userMutePreference = !userMutePreference;
//         }
//     });
// })();
