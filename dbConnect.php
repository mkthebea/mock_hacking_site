<?php

$link = mysqli_connect('localhost', 'root', '000129','swsecsql');

if(!$link)
{
	die("Could not connect to the server: " .mysql_error());
}

?>