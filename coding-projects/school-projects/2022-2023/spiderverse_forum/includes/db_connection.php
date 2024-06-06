<?php
// Database connection details
$servername = "localhost:3306";
$username = "muda";
$password = "";
$dbname = "spiderverse";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to get the database connection if it's not already declared
if (!function_exists('getDbConnection')) {
    function getDbConnection() {
        global $conn;
        if ($conn->ping()) {
            return $conn;
        } else {
            // Handle connection error as needed
            die("Connection lost: " . $conn->connect_error);
        }
    }
}
?>