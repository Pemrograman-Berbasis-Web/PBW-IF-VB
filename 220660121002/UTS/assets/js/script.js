document.addEventListener('DOMContentLoaded', function() {
    const todoLinks = document.querySelectorAll('a');

    todoLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            if (this.textContent.includes('Delete')) {
                const confirmation = confirm('Are you sure you want to delete this task?');
                if (!confirmation) {
                    event.preventDefault(); // Mencegah penghapusan jika tidak dikonfirmasi
                }
            }
        });
    });
});