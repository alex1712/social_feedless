// The CSS to inject
const css = `
    /* Facebook */
    div[role="main"] { display: none !important; }
    /* Twitter (X) */
    main[role="main"] { display: none !important; }
    /* LinkedIn */
    main[aria-label="Feed principal"] { display: none !important; }
    /* Instagram */
    main[role="main"] { display: none !important; }
`;

// Function to apply or remove the CSS
async function toggleBlocking(isEnabled) {
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    if (!tab || !tab.id) return; // No active tab

    if (isEnabled) {
        // Turn on the blocking
        await chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            css: css
        });
    } else {
        // Turn off the blocking
        await chrome.scripting.removeCSS({
            target: { tabId: tab.id },
            css: css
        });
    }
}

// Listen for storage changes to apply/remove CSS automatically
chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync' && changes.blockerEnabled) {
        const isEnabled = changes.blockerEnabled.newValue;
        toggleBlocking(isEnabled);
    }
});

// Also run when a tab is updated (e.g., page navigation)
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        chrome.storage.sync.get('blockerEnabled', (data) => {
            if (data.blockerEnabled !== false) {
                chrome.scripting.insertCSS({
                    target: { tabId: tab.id },
                    css: css
                });
            }
        });
    }
});