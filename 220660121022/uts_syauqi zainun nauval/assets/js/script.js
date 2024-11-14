document.addEventListener("DOMContentLoaded", function () {
    const notification = document.createElement("div");
    notification.className = "notification";
    document.body.appendChild(notification);

    function showNotification(message, isError = false) {
        notification.textContent = message;
        notification.classList.add("show");
        notification.classList.toggle("error", isError);
        
        setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);
    }

    // Handle notifications for different actions
    const urlParams = new URLSearchParams(window.location.search);
    const action = urlParams.get("action");

    if (action === "add") {
        showNotification("Task added successfully!");
    } else if (action === "complete") {
        showNotification("Task marked as completed.");
    } else if (action === "delete") {
        showNotification("Task deleted successfully.");
    }
});
