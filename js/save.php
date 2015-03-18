<?php
//$cont = $_POST['str'];
//setlocale(LC_TIME, "fi_FI"); 
//date_default_timezone_set("Europe/Helsinki");
//$date = strftime("%Y-%m-%d-%A");
//$timesaved = strftime("%H:%M:%S");
//$elapsedtime = $_POST['current_time'];
//$file = "Shivam.txt";
//$ssf = fopen ($file, 'w');
//fwrite($f, $cont);
//fclose($f);
$myfile = fopen("newfile.txt", "w") or die("Unable to open file!");
$txt = "Mickey Mouse\n";
fwrite($myfile, $txt);
$txt = "Minnie Mouse\n";
fwrite($myfile, $txt);
fclose($myfile);
echo $_POST['content'];
?>
