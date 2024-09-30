<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <title>Spider-Men</title>
</head>
<body>
    <header>
        <!-- Placeholder image -->
        <?php include 'includes/header.php'; ?>
        <!-- Include the navigation bar -->
        <?php include 'includes/navbar.php'; ?>
    </header>

    <!-- Main content -->
    <main>
        <?php
        // Include the database connection
        include_once './includes/db_connection.php';

        // Get the database connection
        $conn = getDbConnection();

        // Execute the SQL query
        $sql = "SELECT c.name AS category, p.title, p.image, p.description, p.created_at
        FROM categories c
        LEFT JOIN posts p ON c.category_id = p.category_id
        WHERE p.created_at = (
            SELECT MAX(created_at)
            FROM posts
            WHERE category_id = c.category_id
        )
        ORDER BY c.category_id";


        $result = $conn->query($sql);

        // Display the results in the boxes
        while ($row = $result->fetch_assoc()) {
            echo '<div class="box">';
            echo '<img src="images/' . $row['image'] . '" alt="Post Image" width="300" height="300">';
            echo '<p class="title">' . $row['title'] . '</p>';
            echo '<p class="description">' . $row['description'] . '</p>';
            echo '</div>';
        }
        ?>
    </main>
</body>
</html>
