<?php
// index.php

/**
 * File ini adalah titik awal dari aplikasi.
 *
 * Ia menggunakan kelas TodoController untuk menangani berbagai aksi
 * dan kemudian merender tampilan dengan daftar tugas.
 */

// Memanggil file TodoController.php untuk menggunakan class TodoController
require_once 'controller/TodoController.php';

$controller = new TodoController();
$action = $_GET['action'] ?? null;

// Menangani parameter aksi
switch ($action) {
    case 'add':
        // Dapatkan tugas dari request
        $task = $_POST['task'] ?? '';

        // Tambahkan tugas ke daftar
        $controller->add($task);
        header("Location: index.php?status=add_success");
        break;
    case 'complete':
        // Dapatkan id dari request
        $id = $_GET['id'] ?? '';

        // Tandai tugas sebagai selesai
        $controller->markAsCompleted($id);
        header("Location: index.php?status=complete_success");
        break;
    case 'delete':
        // Dapatkan id dari request
        $id = $_GET['id'] ?? '';

        // Hapus tugas dari daftar
        $controller->delete($id);
        header("Location: index.php?status=delete_success");
        break;
}

// Dapatkan daftar tugas
$todos = $controller->index();

// Merender tampilan
require 'views/listTodos.php';