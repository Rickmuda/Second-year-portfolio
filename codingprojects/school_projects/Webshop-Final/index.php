<?php

require('../db.php');

session_start();

$page_title = 'Home';

@require_once('src/templates/bovenstukhtml.php');
@require_once('src/templates/logo.php');
@require_once('src/templates/main.php');
@require_once('src/templates/icons.php');
@require_once('src/templates/onderstukhtml.php');