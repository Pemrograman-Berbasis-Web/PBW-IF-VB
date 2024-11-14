    // // Menangani klik tombol "Finished"
    // document.querySelectorAll('#finishedButton').forEach(button => {
    //     button.addEventListener('click', function(event) {
    //         event.preventDefault();  // Mencegah aksi default (redirect)
    //         if (confirm('Are you sure you want to mark this task as finished?')) {
                
    //             window.location.href = this.href;  // Arahkan ke URL setelah konfirmasi
    //         }
    //     });
    // });

    // // Menangani klik tombol "Delete"
    // document.querySelectorAll('#deleteButton').forEach(button => {
    //     button.addEventListener('click', function(event) {
    //         event.preventDefault();  // Mencegah aksi default (redirect)
    //         if (confirm('Are you sure you want to delete this task?')) {
    //             window.location.href = this.href;  // Arahkan ke URL setelah konfirmasi
    //         }
    //     });
    // });

    // // Menangani klik tombol "Add" untuk memberikan alert setelah tugas ditambahkan
    // const addForm = document.querySelector('form');
    // addForm.addEventListener('submit', function(event) {
    //     event.preventDefault();  // Mencegah form submit default
    //     const taskInput = addForm.querySelector('input[name="task"]');
    //     if (taskInput.value.trim() !== "") {
    //         alert('Task added successfully!');
    //         this.submit();  // Jika ada task yang dimasukkan, kirim form
    //     } else {
    //         alert('Please enter a task!');
    //     }
    // });

    
const urlParams = new URLSearchParams(window.location.search);
const status = urlParams.get('status');

if (status) {
    const notification = document.getElementById('notification');
    const notificationMessage = document.getElementById('notificationMessage');

    switch (status) {
        case 'add_success':
            notificationMessage.textContent = "Tugas berhasil ditambahkan!";
            break;
        case 'complete_success':
            notificationMessage.textContent = "Tugas berhasil diselesaikan!";
            break;
        case 'delete_success':
            notificationMessage.textContent = "Tugas berhasil dihapus!";
            break;
    }

    // Tampilkan notifikasi
    notification.style.display = 'block';

    // Sembunyikan notifikasi setelah 3 detik
    setTimeout(() => {
        notification.style.display = 'none';
        // Hapus parameter status dari URL
        history.replaceState(null, null, window.location.pathname);
    }, 3000);
}
