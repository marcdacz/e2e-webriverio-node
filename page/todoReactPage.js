const addNewToDoItem = (todoItem) => {
	helpers.waitUntilElementExists(selectors.todoReact.input);
	browser.setValue(selectors.todoReact.input, `${todoItem}\n`);
}

const getTotalToDoItems = () => browser.getText(selectors.todoReact.todoCount);

const checkIfToDoItemExists = (todoItem) => browser.isExisting(`${selectors.todoReact.item}*=${todoItem}`);

module.exports = {
	addNewToDoItem,
	getTotalToDoItems,
	checkIfToDoItemExists
};
