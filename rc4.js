/*
 * RC4 symmetric cipher encryption/decryption
 *
 * @license Public Domain
 * @param string key - secret key for encryption/decryption
 * @param string str - string to be encrypted/decrypted
 * @return string
 */
function rc4(key, str, bit) {
	var s = [], j = 0, x, res = '';
	for (var i = 0; i < bit; i++) {
		s[i] = i;
	}
	for (i = 0; i < bit; i++) {
		j = (j + s[i] + key.charCodeAt(i % key.length)) % bit;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
	}
	i = 0;
	j = 0;
	for (var y = 0; y < str.length; y++) {
		i = (i + 1) % bit;
		j = (j + s[i]) % bit;
		x = s[i];
		s[i] = s[j];
		s[j] = x;
		res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % bit]);
	}
	return res;
}
