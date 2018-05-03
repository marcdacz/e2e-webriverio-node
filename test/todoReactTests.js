describe('todo app using react', () => {
	const toDoReactPage = require('../page/todoReactPage');
	const firstToDoItem = randomstring.generate(20);
	const secondToDoItem = randomstring.generate(20);

	before(() => {
		browser.url('react/#/');
	});

	it('should show the correct page title', () => {
		browser.getTitle().should.equal('React • TodoMVC');
	});

	it('should allow to create first todo item', () => {
		toDoReactPage.addNewToDoItem(firstToDoItem);
		toDoReactPage.getTotalToDoItems().should.contain('1 item left');
		toDoReactPage.checkIfToDoItemExists(firstToDoItem).should.be.true;
	});

	it('should increment total todo when adding another item', () => {
		toDoReactPage.addNewToDoItem(secondToDoItem);
		toDoReactPage.getTotalToDoItems().should.contain('2 items left');
		toDoReactPage.checkIfToDoItemExists(secondToDoItem).should.be.true;
	});
});