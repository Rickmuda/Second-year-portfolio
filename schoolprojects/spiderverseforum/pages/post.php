<!-- post.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <base href="../"> <!-- Add the base tag with the correct relative URL -->
    <title>Post Details</title>
</head>
<body>
    <header>
        <!-- Include the header -->
        <?php include '../includes/header.php'; ?>
        <!-- Include the navigation bar -->
        <?php include '../includes/navbar.php'; ?>
    </header>

    <!-- Main content -->
    <main>
        <?php
        // Include the database connection
        include_once '../includes/db_connection.php';

        // Get the database connection
        $conn = getDbConnection();

        // Check if the post_id is set in the URL
        if (isset($_GET['post_id'])) {
            $post_id = $_GET['post_id'];

            // Retrieve the post details from the database
            $sql = "SELECT p.title, p.image, p.description, p.created_at, c.name AS category, u.username, p.user_id AS author_id
            FROM posts p
            JOIN categories c ON p.category_id = c.category_id
            JOIN users u ON p.user_id = u.user_id
            WHERE p.post_id = $post_id";

            $result = $conn->query($sql);

            // Check if there are rows in the result
            if ($result->num_rows > 0) {
                $row = $result->fetch_assoc();

                // Display the post details
                echo '<div class="post-details">';
                echo '<h2>' . $row['title'] . '</h2>';
                echo '<img src="./images/' . $row['image'] . '" alt="Post Image" width="300" height="300">';
                echo '<p class="description">' . $row['description'] . '</p>';
                echo '<p><strong>Category:</strong> ' . $row['category'] . '</p>';
                echo '<p><strong>Author:</strong> ' . $row['username'] . '</p>';
                echo '<p><strong>Created at:</strong> ' . date('F j, Y, g:i a', strtotime($row['created_at'])) . '</p>';

                // Display the delete button for the post author or admin users
                $loggedInUserId = $_SESSION['user_id'] ?? null;
                if ($loggedInUserId && ($loggedInUserId == $row['author_id'] || $isAdmin)) {
                    echo '<form action="./delete_post.php" method="post">';
                    echo '<input type="hidden" name="post_id" value="' . $post_id . '">';
                    echo '<button type="submit">Delete Post</button>';
                    echo '</form>';
                }

                echo '</div>';

                // Display the reply form if the user is logged in
                if (isset($_SESSION['user_id'])) {
                    echo '<div class="reply-form">';
                    echo '<h3>Reply to this post</h3>';
                    echo '<form action="./reply_process.php" method="post">';
                    echo '<input type="hidden" name="post_id" value="' . $post_id . '">';
                    echo '<label for="reply_content">Your Reply:</label>';
                    echo '<textarea name="reply_content" id="reply_content" rows="4" required></textarea>';
                    echo '<button type="submit">Submit Reply</button>';
                    echo '</form>';
                    echo '</div>';
                }

                // Display the replies
                echo '<div class="replies">';
                // Retrieve and display replies
                $sqlReplies = "SELECT r.reply_content, r.created_at, u.username
                               FROM replies r
                               JOIN users u ON r.user_id = u.user_id
                               WHERE r.post_id = $post_id
                               ORDER BY r.created_at ASC";

                $resultReplies = $conn->query($sqlReplies);

                while ($rowReply = $resultReplies->fetch_assoc()) {
                    echo '<div class="reply">';
                    echo '<p><strong>' . $rowReply['username'] . ':</strong> ' . $rowReply['reply_content'] . '</p>';
                    echo '<p class="reply-date">' . date('F j, Y, g:i a', strtotime($rowReply['created_at'])) . '</p>';
                    echo '</div>';
                }

                echo '</div>';
            } else {
                echo '<p>Post not found.</p>';
            }
        } else {
            echo '<p>Invalid post ID.</p>';
        }

        // Close the database connection
        $conn->close();
        ?>
    </main>
</body>
</html>
