function tarkasta(form) {
  {
    var ehdot = /\S+@\S+/;
    if(!ehdot.test(sahkoposti))
  }
  {
    alert("Anna oikea Sähköposti");
    form.email.focus();
    return false;
  }
}
