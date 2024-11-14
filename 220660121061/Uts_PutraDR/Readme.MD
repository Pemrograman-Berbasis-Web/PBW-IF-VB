Berikut ini adalah penjelasan fungsionalitas dari kode CSS dan JavaScript

 -------------------------------------------------**CSS Penjelasan**-------------------------------------------

1. **Basic Reset**:
   ```css
   * {
       margin: 0;
       padding: 0;
       box-sizing: border-box;
       font-family: Arial, Helvetica, sans-serif;
   }
   ```
   - Menghapus margin dan padding default untuk semua elemen (`*`), sehingga lebih mudah untuk mengatur tampilan.
   - Menggunakan `box-sizing: border-box` untuk memastikan bahwa padding dan border termasuk dalam ukuran total elemen.
   - Mengatur `font-family` secara global untuk menggunakan Arial atau Helvetica.

2. **Body Styling**:
   ```css
   body {
       display: flex;
       flex-direction: column;
       align-items: center;
       padding: 12em;
       background: linear-gradient(135deg, rgba(33, 33, 33, 1) 0%, rgba(48, 48, 48, 1) 100%);
   }
   ```
   - Mengatur body menggunakan `flexbox` untuk mengatur elemen secara kolom (`flex-direction: column`) dan memusatkan secara horizontal (`align-items: center`).
   - Menggunakan padding yang besar (`12em`) agar konten ada di tengah layar.
   - Mengatur background dengan gradien gelap menggunakan warna `rgba`.

3. **Todo List Container**:
   ```css
   h1 { ... }
   ul { ... }
   li { ... }
   ```
   - `h1`: Menentukan tampilan judul dengan warna abu-abu terang dan ukuran font besar.
   - `ul`: Menghapus style list bawaan dengan `list-style-type: none` dan mengatur lebar container `300px`.
   - `li`: Mengatur item daftar dengan gaya kotak, menggunakan warna abu-abu gelap, padding, dan `box-shadow` untuk efek elevasi. Saat di-hover, warna latar belakang berubah menjadi lebih terang.

4. **Form Styling**:
   ```css
   form { ... }
   input[type="text"] { ... }
   button { ... }
   ```
   - Mengatur tampilan form untuk memasukkan data.
   - Input teks memiliki lebar `750px`, padding, border radius, serta warna latar belakang gelap.
   - Tombol diberi gaya dengan warna abu-abu dan efek hover yang membuat warna menjadi lebih terang.

5. **Notification Styling**:
   ```css
   .notification { ... }
   .notification.show { ... }
   .notification.error { ... }
   ```
   - `.notification`: Mengatur notifikasi agar berada di tengah atas layar menggunakan `position: fixed`. Notifikasi disembunyikan secara default (`opacity: 0`) dan diberi efek transisi halus pada perubahan opacity dan posisi.
   - `.notification.show`: Membuat notifikasi terlihat dengan mengubah `opacity` menjadi 1.
   - `.notification.error`: Mengubah warna latar belakang menjadi merah gelap jika ada kesalahan.

------------------------------------------- **JavaScript Penjelasan** -----------------------------------------

1. **Memuat Event**:
   ```javascript
   document.addEventListener("DOMContentLoaded", function () {
   ```
   - Menunggu sampai seluruh halaman dimuat sebelum menjalankan kode JavaScript. Fungsinya agar elemen-elemen yang ada di halaman sudah siap digunakan.

2. **Membuat Elemen Notifikasi**:
   ```javascript
   const notification = document.createElement("div");
   notification.className = "notification";
   document.body.appendChild(notification);
   ```
   - Membuat elemen `<div>` baru yang digunakan sebagai notifikasi. Elemen ini diberi kelas `"notification"` dan ditempatkan di `body`.

3. **Fungsi `showNotification`**:
   ```javascript
   function showNotification(message, isError = false) {
       notification.textContent = message;
       notification.classList.add("show");
       notification.classList.toggle("error", isError);
       
       setTimeout(() => {
           notification.classList.remove("show");
       }, 3000);
   }
   ```
   - **Parameter**:
     - `message`: Teks yang akan ditampilkan pada notifikasi.
     - `isError`: Boolean yang menunjukkan apakah notifikasi ini merupakan pesan kesalahan.
   - **Fungsionalitas**:
     - Mengatur teks notifikasi dengan `message`.
     - Menambahkan kelas `"show"` untuk menampilkan notifikasi.
     - Menambah atau menghapus kelas `"error"` tergantung nilai `isError`.
     - Setelah 3 detik (`3000ms`), kelas `"show"` dihapus untuk menyembunyikan notifikasi kembali.

4. **Menangani Aksi URL**:
   ```javascript
   const urlParams = new URLSearchParams(window.location.search);
   const action = urlParams.get("action");
   ```
   - Membaca parameter query dari URL, menggunakan `action` untuk menentukan jenis aksi yang dilakukan (`add`, `complete`, `delete`).

5. **Menampilkan Notifikasi Berdasarkan Aksi**:
   ```javascript
   if (action === "add") {
       showNotification("Task Berhasil Ditambahkan :)");
   } else if (action === "complete") {
       showNotification("Task Selesai Di Tandai");
   } else if (action === "delete") {
       showNotification("Task Berhasil Di Hapus.");
   }
   ```
   - Berdasarkan nilai `action`, notifikasi yang sesuai akan ditampilkan:
     - `"add"`: Menampilkan pesan bahwa tugas berhasil ditambahkan.
     - `"complete"`: Menampilkan pesan bahwa tugas sudah ditandai selesai.
     - `"delete"`: Menampilkan pesan bahwa tugas berhasil dihapus.