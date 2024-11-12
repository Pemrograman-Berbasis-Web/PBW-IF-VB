<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <script src="assets/js/script.js" defer></script>
</head>
<body>
    <div class="container">
        <h1>Todo List</h1>
        <ul id="todo-list">
            <?php foreach ($todos as $todo): ?>
                <li data-id="<?= $todo['id']; ?>" class="<?= $todo['is_completed'] ? 'completed' : ''; ?>">
                    <span><?= htmlspecialchars($todo['task']); ?></span>
                    <div>
                        <?php if (!$todo['is_completed']): ?>
                            <button class="complete-btn">✔️</button>
                        <?php endif; ?>
                        <button class="delete-btn">❌</button>
                    </div>
                </li>
            <?php endforeach; ?>
        </ul>
        <form id="todo-form" method="POST" action="?action=add">
            <input type="text" name="task" placeholder="New Task" required>
            <button type="submit">Add</button>
        </form>
    </div>
</body>
</html>