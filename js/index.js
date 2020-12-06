var working = false;
$('.login').on('submit', function(e) {
  e.preventDefault();
  if (working) return;
  working = true;
  var $this = $(this),
    $state = $this.find('button > .state');
  $this.addClass('loading');
  $state.html('Waiting For Encryption');
  setTimeout(function() {
    $this.addClass('ok');
    var plaintext = $("#plaintext").val();
    var kuncitext = $("#kuncitext").val();
    var bittext = Number($("#bittext").val());
    if (bittext) {
        var result = rc4(kuncitext, plaintext, bittext);
        $state.html('Plaintext : '+plaintext+".<br/> Kunci :"+kuncitext+".<br/> Jumlah Bit "+bittext+" bit.<br/> Hasil "+result);
    }
    else {
        $state.html('result failed because not integer for the bit');
    }
    setTimeout(function() {
      $state.html('Back to RC4 Encryption Page');
      $this.removeClass('ok loading');
      working = false;
  }, 8000);
}, 1000);
});
