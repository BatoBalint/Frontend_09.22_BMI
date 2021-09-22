function BMISzamitas() {
  let bmiSpan = document.getElementById("bmiResult");
  let magassag = document.getElementById('magassag');
  let suly = document.getElementById('suly');

  let szam = parseInt(suly.value) / (parseInt(magassag.value) / 100) ** 2;
  bmiSpan.innerHTML = szam.toFixed(1);

  let tableRows = document.getElementsByClassName('bmiTableRow');

  for (let i = 0; i < tableRows.length; i++) {
    if (tableRows[i].classList.contains('selectedBmiTableRow')) {
      tableRows[i].classList.remove('selectedBmiTableRow');
    }
  }

  if (szam < 18.5) {
    tableRows[0].classList.add('selectedBmiTableRow');
  }
  else if (szam < 25) {
    tableRows[1].classList.add('selectedBmiTableRow');
  }
  else if (szam < 30) {
    tableRows[2].classList.add('selectedBmiTableRow');
  }
  else if (szam < 35) {
    tableRows[3].classList.add('selectedBmiTableRow');
  }
  else if (szam < 40) {
    tableRows[4].classList.add('selectedBmiTableRow');
  }
  else {
    tableRows[5].classList.add('selectedBmiTableRow');
  }

  let idealisSuly = (((parseInt(magassag.value) / 100) ** 2)*21.7).toFixed(1);
  let alsoHatar = (((parseInt(magassag.value) / 100) ** 2)*18.5).toFixed(1);//parseInt(suly.value) / (parseInt(magassag.value) / 100) ** 2;
  let felsoHatar = (((parseInt(magassag.value) / 100) ** 2)*24.9).toFixed(1);

  document.getElementById('idealisTesttomegSpan').innerHTML = idealisSuly;
  document.getElementById('idealisTesttomegTD').innerHTML = alsoHatar + ' - ' + felsoHatar + ' kg';

}
