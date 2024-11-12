document.addEventListener('DOMContentLoaded', () => {
    const todoList = document.getElementById('todo-list');

    // Mark a task as complete
    todoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('complete-btn')) {
            const listItem = event.target.closest('li');
            listItem.classList.add('completed');
            event.target.remove();

            const todoId = listItem.getAttribute('data-id');
            // Optional: Send a POST request to mark as completed in the backend
            // fetch(`?action=complete&id=${todoId}`, { method: 'POST' });
        }
    });

    // Delete a task
    todoList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const listItem = event.target.closest('li');
            const todoId = listItem.getAttribute('data-id');
            listItem.remove();

            // Optional: Send a POST request to delete from the backend
            // fetch(`?action=delete&id=${todoId}`, { method: 'POST' });
        }
    });
});
