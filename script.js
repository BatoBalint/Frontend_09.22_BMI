function BMISzamitas() {
  let bmiSpan = document.getElementById("bmiResult");
  let magassag = document.getElementById('magassag');
  let suly = document.getElementById('suly');

  let szam = parseInt(suly.value) / (parseInt(magassag.value) / 100) ** 2;
  bmiSpan.innerHTML = szam.toFixed(1);
}
