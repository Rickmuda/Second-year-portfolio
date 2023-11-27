<?php
?>

<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="
            css/style.css
            ">
        <title>Blog | Wordsmith's Corner</title>
        <script src="https://kit.fontawesome.com/f23681219e.js" crossorigin="anonymous"></script>
    </head>

    <body>
        <header>
                <div class="nav-main">
                    <a href="addBlog.php" class="icon admin">
                        <i class="fa-solid fa-newspaper"></i>
                        Add blog
                    </a>

                    <a href="index.php">
                        <img class="logo" src="img/logo.png" alt="Wordsmith Logo">
                    </a>

                    <a href="" class="icon">
                        <img class="user" src="img/user.png" alt="User">
                        logout
                    </a>
                </div>
                <div class="nav-side">
                    <a href="blog.php" class="p-comments">Comments</a>
                    <a href="blog-side.php" class="p-blogs">Blogs</a>
                </div>
        </header>

            <div class="container">
                <div class="blog">
                    <p class="title">Hello World</p>

                    <p class="blog-content">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
                </div>


                <div class="main-side">
<!--                 <div class="side-blogs">-->
<!--                     <p>Hello World</p>-->
<!--                     <img src="img/placeholder.png" alt="">-->
<!--                 </div>-->

<!--                    <div class="post-comment">-->
<!--                        <form action="">-->
<!--                            <div>-->
<!--                                <p class="user-name">TRT_ndv18</p>-->
<!--                                <button class="reply-post">Post Comment</button>-->
<!--                            </div>-->
<!--                            <label for="">-->
<!--                                <input class="post-comment-content" placeholder="type here">-->
<!--                            </label>-->
<!---->
<!--                        </form>-->
<!--                    </div>-->
<!--                    <div class="comment">-->
<!--                        <p class="user-name">RvSpijker</p>-->
<!--                        <p class="reply-content">Lorum Ipsum is a format text that should not be used</p>-->
<!--                    </div>-->

                    <div class="no-auth">
                        <p>Login to see and place comments</p>
                        <a href="login.php">
                            <p>Login</p>
                        </a>
                        <a href="register.php">
                            <p>Register</p>
                        </a>
                    </div>
                </div>
            </div>
    </body>
</html>
