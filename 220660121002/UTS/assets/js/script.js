document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Mencegah pengiriman form secara default

        const taskInput = form.querySelector('input[name="task"]');
        const task = taskInput.value.trim();

        if (task) {
            // Mengirim data ke server menggunakan Fetch API
            fetch(form.action, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(new FormData(form)).toString()
            })
            .then(response => response.text())
            .then(data => {
                // Menampilkan alert jika berhasil
                alert('Task added successfully!');
                // Mengosongkan input setelah menambahkan task
                taskInput.value = '';
                // Memuat ulang halaman untuk menampilkan task terbaru
                location.reload();
            })
            .catch(error => {
                console.error('Error:', error);
            });
        } else {
            alert('Please enter a task!');
        }
    });
});