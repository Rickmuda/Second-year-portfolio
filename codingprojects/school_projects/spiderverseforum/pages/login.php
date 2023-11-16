<!-- login.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/style.css">
    <base href="../"> <!-- Add the base tag with the correct relative URL -->
    <title>User Login</title>
</head>
<body>
    <header>
        <?php include '../includes/header.php'; ?>
        <?php include '../includes/navbar.php'; ?>
        <h2>Login</h2>
    </header>

    <!-- Login form -->
    <form action="pages/login.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>

        <button type="submit" name="login">Login</button>
    </form>

    <?php
    // Handle login form submission
    if (isset($_POST['login'])) {
        // Include the database connection
        include_once '../includes/db_connection.php';

        // Get the database connection
        $conn = getDbConnection();

        // Retrieve form data
        $username = $_POST['username'];
        $password = $_POST['password'];

        // Retrieve user information from the database
        $sql = "SELECT user_id, password FROM users WHERE username = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $stmt->bind_result($userId, $hashedPassword);
        $stmt->fetch();
        $stmt->close();

        // Verify password
        if ($userId && password_verify($password, $hashedPassword)) {
            // Set session variable to indicate the user is logged in
            if (session_status() == PHP_SESSION_NONE) {
                session_start();
            }
            $_SESSION['user_id'] = $userId;

            // Redirect to the home page or another desired page
            header("Location: ../index.php");
            exit();
        } else {
            echo '<p class="error">Invalid username or password. Please try again.</p>';
        }

        // Close the database connection
        $conn->close();
    }
    ?>

</body>
</html>
