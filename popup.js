let scrapeButton = document.getElementById('scrapeButton');

scrapeButton.onclick = function(element){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	chrome.tabs.executeScript(
		tabs[0].id,
		{file: 'scrape.js'}
	);
  });
};
