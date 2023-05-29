# Number of users as of 28th may 😍

<img width="1430" alt="Screenshot 2023-05-29 at 5 11 59 PM" src="https://github.com/MukundaHolla/mute-jio-cinema-ads/assets/19995154/9930d179-12fe-464e-83ea-44e3d6eb1dfa">


# Mute JioCinema Ads Chrome Extension

This Chrome extension automatically mutes ads on JioCinema during live cricket matches and restores the volume when the ads are over.

## Features

- Automatically mutes the video when ads are displayed
- Resumes the volume when the ads are over
- Remembers user's mute/unmute preference

## Installation

1. Clone or download this repository.
2. Open Chrome and go to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click on "Load unpacked" and select the repository folder.
5. The extension should now be installed and active.

## Usage

The extension works automatically. When you watch a live cricket match on JioCinema, the extension will mute the volume when ads are displayed and unmute the volume when the ads are over. You can still manually control the volume using the video player controls.

## Tampermonkey Script

If you prefer to use this as a Tampermonkey script instead of a Chrome extension, you can create a new Tampermonkey script and paste the following code:

```javascript
// ==UserScript==
// @name         Mute Ads on JioCinema
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Mute ads on JioCinema live cricket matches
// @author       You
// @match        *://*.jiocinema.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let userMutePreference = false;

    const checkForAd = () => {
        const adImgElement = document.querySelector('img[alt="Adds logo"]');

        if (adImgElement && adImgElement.src) {
            // Ad is being displayed
            if (!window.navigator.muted) {
                window.navigator.muted = true;
            }
        } else {
            // Ad is not being displayed
            if (window.navigator.muted !== userMutePreference) {
                window.navigator.muted = userMutePreference;
            }
        }
    };

    const muteVolume = (mute) => {
        const video = document.querySelector('video');
        if (video) {
            video.muted = mute;
        }
    };

    Object.defineProperty(window.navigator, 'muted', {
        set: (mute) => {
            muteVolume(mute);
        },
        get: () => {
            const video = document.querySelector('video');
            return video ? video.muted : false;
        }
    });

    setInterval(checkForAd, 500); // Check for ads every 0.5 second

    // Listen for user's mute/unmute action
    document.addEventListener('click', (event) => {
        const muteButton = document.querySelector('.hlsPlayerRoot .mute-button');
        if (muteButton && event.target.closest('.mute-button')) {
            userMutePreference = !userMutePreference;
        }
    });
})();
