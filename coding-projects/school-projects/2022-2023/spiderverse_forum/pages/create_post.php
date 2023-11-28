<?php
// Start or resume a session
session_start();

// Include the database connection
require_once '../includes/db_connection.php';

// Check if the user is not logged in
if (!isset($_SESSION['user_id'])) {
    header("Location: ../index.php"); // Redirect to the home page or login page
    exit();
}

// Get the database connection
$conn = getDbConnection();

// Check if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate form data
    $title = $_POST['title'] ?? '';
    $category_id = $_POST['category_id'] ?? '';
    $description = $_POST['description'] ?? '';

    // Validate image upload
    if (!empty($_FILES['image']['name'])) {
        $uploadDir = '../images/';
        $uploadFile = $uploadDir . basename($_FILES['image']['name']);
        $imageFileType = strtolower(pathinfo($uploadFile, PATHINFO_EXTENSION));

        if (!move_uploaded_file($_FILES['image']['tmp_name'], $uploadFile)) {
            echo '<p>Error uploading image.</p>';
            exit();
        }
    } else {
        echo '<p>Please select an image.</p>';
        exit();
    }

    // Check for empty fields
    if (empty($title) || empty($category_id) || empty($description)) {
        echo '<p>Please fill out all required fields (title, category, description).</p>';
        exit();
    }

    // Get the user ID from the session
    $user_id = $_SESSION['user_id'];

    // Sanitize and escape input data to prevent SQL injection
    $title = mysqli_real_escape_string($conn, $title);
    $category_id = mysqli_real_escape_string($conn, $category_id);
    $description = mysqli_real_escape_string($conn, $description);

    // Insert post into the database
    $sql = "INSERT INTO posts (user_id, title, category_id, image, description, created_at)
            VALUES ('$user_id', '$title', '$category_id', '$uploadFile', '$description', NOW())";

    if ($conn->query($sql) === TRUE) {
        echo '<p>Post created successfully.</p>';
    } else {
        echo '<p>Error creating post: ' . $conn->error . '</p>';
    }
}

// Close the database connection
if (isset($conn)) {
    $conn->close();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <base href="../"> <!-- Add the base tag with the correct relative URL -->
    <title>Create Post</title>
</head>
<body>
    <header>
        <!-- Include the navigation bar -->
        <?php include '../includes/navbar.php'; ?>
    </header>

    <!-- Main content -->
    <main>
        <h2>Create a New Post</h2>

        <!-- Create Post Form with Image Upload -->
        <form action="pages/create_post.php" method="post" enctype="multipart/form-data">
            <label for="title">Title:</label>
            <input type="text" name="title" id="title" required>

            <label for="category_id">Category:</label>
            <select name="category_id" id="category_id" required>
                <option value="1">MCU</option>
                <option value="2">Comics</option>
                <option value="3">Games</option>
                <option value="4">Merch</option>
            </select>

            <label for="image">Image:</label>
            <input type="file" name="image" id="image" accept="image/*" required>

            <label for="description">Description:</label>
            <textarea name="description" id="description" rows="4" required></textarea>

            <button type="submit">Create Post</button>
        </form>
    </main>
</body>
</html>
