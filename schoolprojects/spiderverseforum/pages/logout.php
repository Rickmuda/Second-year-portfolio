<!-- logout.php -->
<?php
session_start(); // Ensure session is started

// Logout process
session_unset();
session_destroy();

// Redirect to the home page or another desired page
header("Location: ../index.php");
exit();
?>
