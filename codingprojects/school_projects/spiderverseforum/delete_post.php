<?php
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

    if (empty($post_id)) {
        echo '<p>Please provide a post ID.</p>';
    } else {
        // Get the user ID from the session
        $user_id = $_SESSION['user_id'];

        // Get the database connection
        $conn = getDbConnection();

        // Check if the user has the right to delete the post (owner or admin)
        $sqlCheckOwnership = "SELECT user_id FROM posts WHERE post_id = $post_id";
        $resultCheckOwnership = $conn->query($sqlCheckOwnership);

        if ($resultCheckOwnership->num_rows > 0) {
            $row = $resultCheckOwnership->fetch_assoc();
            $postOwnerId = $row['user_id'];

            if ($user_id == $postOwnerId) {
                // User is the owner, or you can add admin check here

                // Delete related replies first
                $sqlDeleteReplies = "DELETE FROM replies WHERE post_id = $post_id";
                $conn->query($sqlDeleteReplies);

                // Now delete the post
                $sqlDeletePost = "DELETE FROM posts WHERE post_id = $post_id";
                if ($conn->query($sqlDeletePost) === TRUE) {
                    // Post deleted successfully
                    header("Location: ./pages/posts.php"); // Redirect to posts page
                    exit();
                } else {
                    echo '<p>Error deleting post: ' . $conn->error . '</p>';
                }
            } else {
                echo '<p>You do not have permission to delete this post.</p>';
            }
        } else {
            echo '<p>Post not found.</p>';
        }

        // Close the database connection
        $conn->close();
    }
}
?>
