<?php
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="
            css/style.css
            ">
    <title>Register | Wordsmith's Corner</title>
    <script src="https://kit.fontawesome.com/f23681219e.js" crossorigin="anonymous"></script>
</head>

<body>
<header>
    <nav>
        <a href="index.php">
            <img class="logo" src="img/logo.png" alt="Wordsmith Logo">
        </a>
    </nav>
</header>
<div class="auth-container">
    <form action="" method="POST">

        <label for="username"></label>
        <input id="username" name="username" type="text" value="{{ old('name') }}" required autofocus>
        <label for="email">Email</label>
        <input id="email" name="email" type="email" required>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" required>
        <label for="password-confirm">Confirm password</label>
        <input id="password-confirm" name="password_confirmation" type="password" required>

        <button>Register</button>
    </form>
</div>
</body>
</html>