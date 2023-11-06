
document.addEventListener("DOMContentLoaded", function() {
    // Get references to the small boxes by their IDs
    const box1 = document.getElementById("box1");
    const box2 = document.getElementById("box2");
    const box3 = document.getElementById("box3");

    // Add click event listeners to each small box
    box1.addEventListener("click", function() {
        window.location.href = "aboutme.html";
    });

    box2.addEventListener("click", function() {
        window.location.href = "projects.html";
    });

    box3.addEventListener("click", function() {
        window.location.href = "contact.html";
    });
});
