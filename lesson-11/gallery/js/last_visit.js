const last_visit = document.querySelector('.last-visit');

if (localStorage.getItem('last_date')) {
  const last_date = localStorage.getItem('last_date');
  const days = ((Date.now() - last_date ) / 86400000).toFixed()

  if (days < 1) {
    last_visit.textContent = "You visited this page today";
  } else if (days == 1) {
    last_visit.textContent = "The last time you were here was yesterday";
  } else {
    last_visit.textContent = `You visited this page ${days} days ago .`;
  }

  localStorage.setItem('last_date', Date.now())
  
} else {
  localStorage.setItem('last_date', Date.now())
  last_visit.textContent = "This is your first time here!";
}
