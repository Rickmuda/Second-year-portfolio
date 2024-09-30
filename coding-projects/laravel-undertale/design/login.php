<?php
?>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="
            css/style.css
            ">
        <title>Login | Wordsmith's Corner</title>
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
        <div class="login-container">
            <form method="post" action="">

                <label for="email">Email</label>
                <input id="email" name="email" type="email" required>
                <label for="password">Password</label>
                <input id="password" name="password" type="password" required>

                <button>Login</button>
                <button href="register.php">Register</button>
            </form>
        </div>
    </body>
</html>