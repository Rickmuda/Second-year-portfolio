<!-- posts.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <base href="../"> <!-- Add the base tag with the correct relative URL -->
    <link rel="stylesheet" href="css/style.css">
    <title>All Posts</title>
    <style>
        /* Add custom styles if needed */
    </style>
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

        // Execute the SQL query to get the most recent 30 posts
        $sql = "SELECT c.name AS category, p.post_id, p.title, p.image, p.description, p.created_at
                FROM categories c
                LEFT JOIN posts p ON c.category_id = p.category_id
                ORDER BY p.created_at DESC
                LIMIT 30";

        $result = $conn->query($sql);

        // Display the results in the boxes
        while ($row = $result->fetch_assoc()) {
            echo '<div class="box">';
            echo '<img src="images/' . $row['image'] . '" alt="Post Image" width="300" height="300">';
            echo '<p class="title">' . $row['title'] . '</p>';
            echo '<p class="description">' . $row['description'] . '</p>';

            // Add the "Read More" button
            echo '<form action="pages/post.php" method="get">';
            echo '<input type="hidden" name="post_id" value="' . $row['post_id'] . '">';
            echo '<button class="read-more-button" type="submit">Read More</button>';
            echo '</form>';

            echo '</div>';
        }
        ?>
    </main>
</body>
</html>
