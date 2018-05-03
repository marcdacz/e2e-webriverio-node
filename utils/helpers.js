const waitUntilElementExists = (selector, timeout = 10000) => {
	browser.waitUntil(() => {
		return browser.isExisting(selector);
	}, timeout);
};


module.exports = {
	waitUntilElementExists
};
