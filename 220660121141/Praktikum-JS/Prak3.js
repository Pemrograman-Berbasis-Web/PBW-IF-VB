// Fungsi untuk menghasilkan warna acak
function generateRandomColor() {
    var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

// Mengubah warna latar belakang halaman secara acak
function changeBackgroundColor() {
    document.body.style.backgroundColor = generateRandomColor();
}

// Menampilkan pesan sambutan
function showWelcomeMessage() {
    alert("Selamat datang di portofolio saya! Saya adalah seorang pengembang web yang penuh semangat.");
}

// Fungsi untuk mengubah tema
function toggleTheme() {
    document.body.classList.toggle('night-mode');
    const themeLogo = document.getElementById('toggle-theme');
    if (document.body.classList.contains('night-mode')) {
        themeLogo.src = "../Menyelesaikan Praktikum HTML/Gambar/moon_dark_mode_night-512.png"; // Ganti dengan logo untuk mode malam
    } else {
        themeLogo.src = "../Menyelesaikan Praktikum HTML/Gambar/moon_dark_mode_night-512.png"; // Ganti dengan logo untuk mode terang
    }
}

// Memanggil fungsi saat halaman dimuat ulang
window.onload = function() {
    changeBackgroundColor();
    showWelcomeMessage();
};

// Tambahkan event listener pada logo
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);