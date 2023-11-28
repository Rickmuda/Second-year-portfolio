<?php
// Check if a session is already active
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}

// Placeholder for user login status and admin status (replace these with actual checks)
$userLoggedIn = isset($_SESSION['user_id']); // Check if the user is logged in
$isAdmin = false; // Replace with actual admin check

// Check if the user is logged in
if ($userLoggedIn) {
    include __DIR__ . '/../includes/db_connection.php'; // Adjust the path as needed

    // Get the database connection
    $conn = getDbConnection();

    $user_id = $_SESSION['user_id'];

    // Use prepared statement to prevent SQL injection
    $sql = "SELECT admin FROM users WHERE user_id = ?";
    $stmt = $conn->prepare($sql);

    if ($stmt) {
        $stmt->bind_param("i", $user_id);

        if ($stmt->execute()) {
            $result = $stmt->get_result();

            // Check if there are rows in the result
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();
                $isAdmin = $row['admin'] == 1;
            }
        } else {
            // Handle query execution error
            echo "Query failed: " . $stmt->error;
        }

        // Close the prepared statement
        $stmt->close();
    } else {
        // Handle statement preparation error
        echo "Statement preparation failed: " . $conn->error;
    }
}

// Define the navigation buttons based on user status
$navButtons = [];

if (!$userLoggedIn) {
    // Display buttons for logged-out users
    $navButtons = [
        '<li><a href="../spiderverse_forum/index.php">Home</a></li>',
        '<li><a href="../spiderverse_forum/pages/posts.php">Posts</a></li>',
        '<li><a href="../spiderverse_forum/pages/login.php">Log in</a></li>',
        '<li><a href="../spiderverse_forum/pages/register.php">Register</a></li>',
    ];
} else {
    // Display buttons for logged-in users
    $navButtons = [
        '<li><a href="../spiderverse_forum/index.php">Home</a></li>',
        '<li><a href="../spiderverse_forum/pages/profile.php">Profile</a></li>',
        '<li><a href="../spiderverse_forum/pages/posts.php">Posts</a></li>',
        '<li><a href="../spiderverse_forum/pages/create_post.php">Create Post</a></li>',
        '<li><a href="../spiderverse_forum/pages/logout.php">Log out</a></li>',
    ];

    // Add admin-specific button for logged-in admins
    if ($isAdmin) {
        $navButtons[] = '<li><a href="#">Admin Panel</a></li>';
    }
}

?>

<nav>
    <ul>
        <?php echo implode('', $navButtons); ?>
    </ul>
</nav>
