<?php

/*
 * RC4 contoh dengan 4 bit
 * 28 November 2016
 */
$kunci = "2573";
$plainteks = "ALAM";
$hasil = rc4($kunci, $plainteks);


echo "<h1>kunci = ".$kunci."<br>
		string = ".$plainteks."<br>
		hasilnya = ".$hasil."</h1>";

function rc4($key, $str) {
	$s = array();
	for ($i = 0; $i < 4; $i++) {
		$s[$i] = $i;
	}
	$j = 0;
	for ($i = 0; $i < 4; $i++) {
		$j = ($j + $s[$i] + ord($key[$i % strlen($key)])) % 4;
		$x = $s[$i];
		$s[$i] = $s[$j];
		$s[$j] = $x;
	}
	$i = 0;
	$j = 0;
	$res = '';
	for ($y = 0; $y < strlen($str); $y++) {
		$i = ($i + 1) % 4;
		$j = ($j + $s[$i]) % 4;
		$x = $s[$i];
		$s[$i] = $s[$j];
		$s[$j] = $x;
		$res .= $str[$y] ^ chr($s[($s[$i] + $s[$j]) % 4]);
	}
	return $res;
}

?>
