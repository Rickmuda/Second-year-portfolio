<!-- profile.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <base href="../"> <!-- Add the base tag with the correct relative URL -->
    <title>User Profile</title>
</head>
<body>
    <?php
    // Include the database connection
    require_once '../includes/db_connection.php';

    // Check if a session is already active
    if (session_status() == PHP_SESSION_NONE) {
        session_start();
    }

    // Check if the user is logged in
    if (!isset($_SESSION['user_id'])) {
        echo '<header>';
        include '../includes/navbar.php';
        echo '<h2>User Profile</h2>';
        echo '</header>';

        echo '<p class="error">You are not logged in. Please <a href="login.php">log in</a>.</p>';
        exit();
    }

    // Get the database connection
    $conn = getDbConnection();

    // Retrieve user information from the database
    $userId = $_SESSION['user_id'];
    $sql = "SELECT username, email, profile_picture, profile_description, created_at FROM users WHERE user_id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userId);
    $stmt->execute();
    $stmt->bind_result($username, $email, $profilePicture, $profileDescription, $createdAt);
    $stmt->fetch();
    $stmt->close();

// Update profile description if the form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['update_description'])) {
        $newDescription = $_POST['new_description'];

        // Update the profile description in the database
        $updateSql = "UPDATE users SET profile_description = ? WHERE user_id = ?";
        $updateStmt = $conn->prepare($updateSql);
        $updateStmt->bind_param("si", $newDescription, $userId);
        $updateStmt->execute();
        $updateStmt->close();

        // Update the profileDescription variable
        $profileDescription = $newDescription;

        // Use JavaScript to redirect back to the profile page
        echo '<script>window.location.href = "profile.php";</script>';
        exit();
    }
}

    ?>

    <header>
        <?php include '../includes/header.php'; ?>
        <?php include '../includes/navbar.php'; ?>
        <h2>User Profile</h2>
    </header>

    <div class="profile-info">
        <p><strong>Username:</strong> <?php echo $username; ?></p>
        <p><strong>Email:</strong> <?php echo $email; ?></p>
        <p><strong>Joined:</strong> <?php echo date('F j, Y', strtotime($createdAt)); ?></p>

        <?php
        // Display profile picture if it exists
        if (!empty($profilePicture)) {
            echo '<img src="./images/' . $profilePicture . '" alt="Profile Picture">';
        }

        echo '<p><strong>Profile Description:</strong> ' . $profileDescription . '</p>';
        ?>

        <!-- Form to update profile description -->
        <form action="profile.php" method="post">
            <label for="new_description">Update Profile Description:</label>
            <textarea id="new_description" name="new_description" rows="4" cols="50"><?php echo $profileDescription; ?></textarea>
            <button type="submit" name="update_description">Update Description</button>
        </form>
    </div>
</body>
</html>
