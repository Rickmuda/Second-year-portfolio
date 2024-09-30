<body>
  <header>
    <nav>
      <a href="../index.php">
        <img class="logo" src="../img/logo.png" alt="">
      </a>
      <a href="addblog.php" class="icon <?= isActiveNavItem('addblog') ? 'active' : '' ?>">
        <i class="fa-solid fa-newspaper <?= isActiveNavItem('addblog') ? 'active' : '' ?>"></i>
        Add blog
      </a>
      <a href="profile.php" class="icon <?= isActiveNavItem('profile') ? 'active' : '' ?>">
        <i class="fa-solid fa-circle-user <?= isActiveNavItem('profile') ? 'active' : '' ?>"></i>
        Profile
      </a>
    </nav>
  </header>