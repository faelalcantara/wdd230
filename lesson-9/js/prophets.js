const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';


fetch(requestURL)
  .then(response => response.json())
  .then(jsonObject => {
    // console.log(jsonObject)
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++) {
      let card = document.createElement('section');
      card.classList.add('card')
      let h2 = document.createElement('h2');
      let birthDate = document.createElement('div');
      let birthPlace = document.createElement('div');
      let image = document.createElement('img');

      h2.textContent = `${prophets[i].name} ${prophets[i].lastname}`;
      birthDate.textContent = `Date of Birth: ${prophets[i].birthdate}`;
      birthPlace.textContent = `Place of Birth: ${prophets[i].birthplace}`;
      image.setAttribute('src', prophets[i].imageurl);
      image.setAttribute('alt', `${prophets[i].name} ${prophets[i].lastname}`)

      card.appendChild(h2);
      card.appendChild(birthDate);
      card.appendChild(birthPlace);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  })
