<!-- views/listTodos.php -->
<!DOCTYPE html>
<html>
<head>
    <title>Todo List</title>
    <!--
        style.CSS
        Berfungsi untuk membuat tampilan lebih menarik
    -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css">
    <link rel="stylesheet" type="text/css" href="assets/css/mdb.min.css">
    
    <!--
        script.js
        Berfungsi untuk mengirimkan data ke server
        serta menampilkan alert jika data berhasil di input
    -->
    
    
</head>

<body>

<section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col col-xl-10">

        <div class="card">
        <div id="notification" style="display: none; padding: 10px; color: #fff; background-color: #4CAF50; margin-bottom: 10px; border-radius: 4px;">
            <span id="notificationMessage"></span>
        </div>
          <div class="card-body p-5">

<h1>Todo List</h1>
    <form method="POST" action="index.php?action=add" class="d-flex justify-content-center align-items-center mb-4">
        <input type="text" name="task" placeholder="New Task" class="form-control">
        <button type="submit" class="btn btn-info ms-2">Add</button>
    </form>

    <ul class="list-group mb-0">
        <?php foreach ($todos as $todo): ?>
            <li class="list-group-item d-flex align-items-center border-0 mb-2 rounded" style="background-color: #d9d9d9;<?= $todo['is_completed'] ? 'text-decoration: line-through; color: gray; ' : ''; ?>" >
            <input class="form-check-input me-2" type="checkbox" value="" aria-label="..." checked />
                <?php
                    // Tampilkan deskripsi Todo
                    echo $todo['task'];

                    // Jika Todo belum selesai, tampilkan link untuk menandai sebagai selesai
                    if (!$todo['is_completed']) {
                        echo ' ';
                        echo '<a href="index.php?action=complete&id=' . $todo['id'] . '" class="px-2" id="finishedButton">Finished</a>';
                    }

                    // Tampilkan link untuk menghapus Todo
                    echo ' ';
                    echo '<a href="index.php?action=delete&id=' . $todo['id'] . '"class="px-2" id="deleteButton">Delete</a>';
                ?>
            </li>
        <?php endforeach; ?>
    </ul>
                </div>
                </div>
                </div>
                </div>
                </div>
                </section>
                <script src="assets/js/script.js"></script>
</body>
</html>