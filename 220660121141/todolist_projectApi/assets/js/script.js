// document.addEventListener("DOMContentLoaded", function() {
//     // Fungsi untuk menampilkan notifikasi
//     function showNotification(message, type = 'success') {
//         const notification = document.getElementById("notification");
//         notification.innerText = message;
//         notification.style.display = "block";
//         notification.style.backgroundColor = type === 'error' ? '#f8d7da' : '#e3f7e3';
//         notification.style.color = type === 'error' ? '#721c24' : '#4CAF50';

//         setTimeout(() => {
//             notification.style.display = "none";
//         }, 3000);
//     }

//     // Tambahkan event listener untuk setiap form edit, selesai, dan hapus
//     document.querySelectorAll(".edit-form").forEach(form => {
//         form.addEventListener("submit", function(e) {
//             e.preventDefault();
//             const taskText = form.querySelector(".edit-input").value;
//             showNotification(`Tugas "${taskText}" berhasil diperbarui`);
//             form.submit();
//         });
//     });

//     document.querySelectorAll(".complete-form").forEach(form => {
//         form.addEventListener("submit", function(e) {
//             e.preventDefault();
//             const taskText = form.parentNode.querySelector(".task-text").innerText;
//             showNotification(`Tugas "${taskText}" selesai`);
//             form.submit();
//         });
//     });

//     document.querySelectorAll(".delete-form").forEach(form => {
//         form.addEventListener("submit", function(e) {
//             e.preventDefault();
//             const taskText = form.parentNode.querySelector(".task-text").innerText;
//             showNotification(`Tugas "${taskText}" dihapus`);
//             form.submit();
//         });
//     });
// });

// $(document).ready(function() {
//     // Fungsi untuk memuat semua todo dari API
//     function loadTodos() {
//         $.get('api.php?action=list', function(data) {
//             var todoList = $('#todo-list');
//             todoList.empty();
//             data.forEach(function(todo) {
//                 var li = $('<li>').text(todo.task);
//                 if (!todo.is_completed) {
//                     li.append(' <a href="#" class="complete" data-id="' + todo.id + '">Mark as completed</a>');
//                 }
//                 li.append(' <a href="#" class="delete" data-/="' + todo.id + '">Delete</a>');
//                 todoList.append(li);
//             });
//         });
//     }

//     // Add todo
//     // Fungsi untuk menambahkan todo baru
//     $('#add-form').submit(function(e) {
//         e.preventDefault();
//         var task = $('#task').val();
//         $.post('api.php?action=add', JSON.stringify({task: task}), function() {
//             $('#task').val('');
//             loadTodos();
//         });
//     });

//     // Complete todo
//     // // Fungsi untuk menandai todo sebagai selesai
//     $(document).on('click', '.complete', function() {
//         var id = $(this).data('id');
//         $.ajax({
//             url: 'api.php?action=complete',
//             type: 'PUT',
//             data: JSON.stringify({id: id}),
//             success: loadTodos
//         });
//     });

//     // Delete todo
//     // Fungsi untuk menghapus todo
//     $(document).on('click', '.delete', function() {
//         var id = $(this).data('id');
//         $.ajax({
//             url: 'api.php?action=delete',
//             type: 'DELETE',
//             data: JSON.stringify({id: id}),
//             success: loadTodos
//         });
//     });

//     // Initial load
//     // Memuat todos pada inisialisasi awal
//     loadTodos();
// });