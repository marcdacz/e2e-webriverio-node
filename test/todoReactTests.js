describe('todo app using react', () => {
	before(() => {
		browser.url('react/#/');
	});

	it('should show the correct page title', () => {
		browser.getTitle().should.equal('React • TodoMVC');
	});

	it('should allow to create first todo item', () => {
		browser.waitUntil(function() {
			return browser.isExisting(selectors.todoReact.input);
		}, 10000);		
		
		browser.setValue(selectors.todoReact.input, 'install webdriverio via npm\n');		
		browser.getText(selectors.todoReact.todoCount).should.contain('1 item left');
	});
});