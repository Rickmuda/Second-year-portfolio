<?php
?>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="css/style.css">
        <title>Login | Wordsmith's Corner</title>
        <script src="https://kit.fontawesome.com/f23681219e.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <header>
            <nav>
                <a href="addBlog.php">
                    <i class="fa-solid fa-newspaper"></i>
                    Add blog
                </a>

                <a href="index.php">
                    <img class="logo" src="img/logo.png" alt="Wordsmith Logo">
                </a>

                <a href="" class="icon">
                    <img class="user" src="img/user.png" alt="User">
                    Profile
                </a>
            </nav>
        </header>
        <div class="add-container">
            <form method="post" action="">

                <label for="title">Title</label>
                <input id="title" name="title" type="text" required>
                <label for="content">Content</label>
                <input id="content" name="content" type="text" required>

                <button type="submit">Post</button>
            </form>
        </div>
    </body>
</html>
