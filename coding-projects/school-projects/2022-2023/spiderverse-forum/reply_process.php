<?php
// Start or resume a session
session_start();

// Check if the user is not logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: ../index.php"); // Redirect to the home page or login page
    exit();
}

// Include the database connection
include_once 'includes/db_connection.php';

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate form data
    $post_id = $_POST['post_id'] ?? '';
    $reply_content = $_POST['reply_content'] ?? '';

    if (empty($post_id) || empty($reply_content)) {
        echo '<p>Please fill out all required fields (post_id, reply_content).</p>';
    } else {
        // Get the user ID from the session
        $user_id = $_SESSION['user_id'];

        // Sanitize and escape input data to prevent SQL injection
        $post_id = mysqli_real_escape_string($conn, $post_id);
        $reply_content = mysqli_real_escape_string($conn, $reply_content);

        // Insert reply into the database
        $sql = "INSERT INTO replies (post_id, user_id, reply_content, created_at)
                VALUES ('$post_id', '$user_id', '$reply_content', NOW())";

        if ($conn->query($sql) === TRUE) {
            // Reply submitted successfully, redirect back to the post page
            header("Location: ./pages/post.php?post_id=$post_id");
            exit();
        } else {
            echo '<p>Error submitting reply: ' . $conn->error . '</p>';
        }
    }
}

// Close the database connection
$conn->close();
?>
