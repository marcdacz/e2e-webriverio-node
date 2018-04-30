describe('todo app using react', () => {
	before(() => {
		browser.url('react/#/');
	});

	it('should allow to create first todo item', () => {
		browser.waitUntil(function() {
			return browser.getText('h1') === 'todos'
		}, 5000);

		browser.setValue('input[class=new-todo]', 'install webdriverio via npm\n');		
		browser.getText('span[class=todo-count]').should.contain('1 item left');
	});
});