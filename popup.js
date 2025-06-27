const toggleSwitch = document.getElementById('toggleSwitch');

// Load the saved state from storage and set the toggle switch
chrome.storage.sync.get('blockerEnabled', (data) => {
    toggleSwitch.checked = data.blockerEnabled !== false; // Default to true
});

// Save the state when the toggle is changed
toggleSwitch.addEventListener('change', () => {
    chrome.storage.sync.set({ blockerEnabled: toggleSwitch.checked });
});