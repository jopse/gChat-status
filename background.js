chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: 'N/A'}, function() {
    console.log("Not in a meeting");
  });
});
