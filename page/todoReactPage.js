const addNewToDoItem = (todoItem) => {
	helpers.waitUntilElementExists(selectors.todoReact.input);
	browser.setValue(selectors.todoReact.input, `${todoItem}\n`);
}

const getTotalToDoItems = () => browser.getText(selectors.todoReact.todoCount);

const checkIfToDoItemExists = (todoItem) => browser.isExisting(`li*=${todoItem}`);

const toggleAllToDoItems = () => browser.click(selectors.todoReact.toggleAll);

const getAllToDoItems = () => $$(selectors.todoReact.item).map((x) => x.getText());

const getAllCompletedToDoItems = () => $$(selectors.todoReact.completedItem).map((x) => x.getText());

module.exports = {
	addNewToDoItem,
	getTotalToDoItems,
	checkIfToDoItemExists,
	toggleAllToDoItems,
	getAllToDoItems,
	getAllCompletedToDoItems
};
