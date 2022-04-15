function startTime() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML = h + ':' + m + ':' + s;
  setTimeout(startTime, 1000);
}

function startDate() {
  const weekday = [
    'Sekmadienis',
    'Pirmadienis',
    'Antradienis',
    'Trečiadienis',
    'Ketvirtadienis',
    'Penktadienis',
    'Šeštadienis',
  ];
  const monthsLt = [
    'Sausio',
    'Vasario',
    'Kovo',
    'Balandžio',
    'Gegužės',
    'Birželio',
    'Liepos',
    'Rugpjūčio',
    'Rugsėjo',
    'Spalio',
    'Lapkričio',
    'Gruodžio',
  ];

  const today = new Date();
  let years = today.getFullYear();
  let month = monthsLt[today.getMonth()];
  let day = today.getDate();
  let weekDay = weekday[today.getDay()];
  document.getElementById(
    'date'
  ).innerHTML = `${weekDay}, ${month} ${day}, ${years}`;
  setTimeout(startTime, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // add zero in front of numbers < 10
  return i;
}
