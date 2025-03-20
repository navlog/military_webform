<?php
$server-name = "localhost"; // Change to your database host if using online hosting
$username = "root"; // Default username for XAMPP (change if using a real host)
$password = ""; // No password for XAMPP, change for real hosting
$dbname = "web_form_db"; // Name of your database

// Connect to the database
$conn = new mysqli($server-name, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];

// Insert into database
$sql = "INSERT INTO users (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>


<?php
$servername = "localhost"; // Change to your database host
$username = "your_username";
$password = "your_password";
$dbname = "your_database";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];

// Insert into database
$sql = "INSERT INTO users (first_name, last_name, email) VALUES ('$first_name', '$last_name', '$email')";

if ($conn->query($sql) === TRUE) {
    echo "Data saved successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>

