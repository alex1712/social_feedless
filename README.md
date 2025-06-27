# Social Feedless

Social Feedless is a minimal browser extension that hides the news feed on popular social networks so you can focus on what really matters. By injecting a small bit of CSS, it removes distracting content on Facebook, Twitter (X), LinkedIn and Instagram.

## Features

- **Feed blocking** for Facebook, Twitter (X), LinkedIn and Instagram.
- **On/off toggle** from the extension popup to quickly enable or disable the blocking.
- Stores your preference using Chrome's synced storage so the setting persists across devices.

## Installation

1. Download or clone this repository.
2. In Chrome or any Chromium‑based browser, open `chrome://extensions/`.
3. Enable **Developer mode** and choose **Load unpacked**.
4. Select the directory containing this project. The extension icon will appear in your toolbar.

## Usage

Click the extension icon and use the switch to enable or disable feed blocking. When enabled, the extension injects CSS that hides the main feed areas on the supported social networks. Turning it off restores the feeds without reloading the page.

## Development

The extension consists of a background script (`background.js`) that injects or removes CSS and a popup (`popup.html`, `popup.js`) with a simple toggle interface. Icons live in the `images/` folder and the behavior is defined in `manifest.json`.

Feel free to modify the CSS selectors in `styles.css` and `background.js` if the layout of these websites changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
