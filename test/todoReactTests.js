describe('todo app using react', () => {
	const toDoReactPage = require('../page/todoReactPage');
	let toDoItem;

	before(() => {
		browser.url('react/#/');
	});

	beforeEach(() => {
		todoItem = faker.lorem.sentence();
	});

	it('should show the correct page title', () => {
		browser.getTitle().should.equal('React • TodoMVC');
	});

	it('should allow to create first todo item', () => {
		toDoReactPage.addNewToDoItem(todoItem);
		toDoReactPage.getTotalToDoItems().should.contain('1 item left');
		toDoReactPage.checkIfToDoItemExists(todoItem).should.be.true;
	});

	it('should increment total todo when adding another item', () => {
		toDoReactPage.addNewToDoItem(todoItem);
		toDoReactPage.getTotalToDoItems().should.contain('2 items left');
		toDoReactPage.checkIfToDoItemExists(todoItem).should.be.true;
	});

	it('should be able to toggle all todo items as completed', () => {
		toDoReactPage.toggleAllToDoItems();
		toDoReactPage.getTotalToDoItems().should.contain('0 items left');
		toDoReactPage.getAllToDoItems().should.have.ordered.members(toDoReactPage.getAllCompletedToDoItems());
	});


});