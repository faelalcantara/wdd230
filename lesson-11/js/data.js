const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(response => response.json())
  .then(jsonObject => {
    console.log(jsonObject)
    const towndata = jsonObject['towns'];

    for (let i = 0; i < towndata.length; i++) {
      let card = document.createElement('section');
      card.classList.add('card')
      let textContainer = document.createElement('div');
      textContainer.classList.add('text-container');
      let h2 = document.createElement('h2');
      let motto = document.createElement('div');
      motto.classList.add('motto')
      let ul = document.createElement('ul')
      let yearFounded = document.createElement('li');
      let currentPopulation = document.createElement('li');
      let averageRainfall = document.createElement('li');
      let image = document.createElement('img');

      h2.textContent = `${towndata[i].name}`;
      motto.textContent = `${towndata[i].motto}`;
      yearFounded.textContent = `Year Founded: ${towndata[i].yearFounded}`;
      currentPopulation.textContent = `Population: ${towndata[i].currentPopulation}`;
      averageRainfall.textContent = `Annual Rain Fall: ${towndata[i].averageRainfall}`;
      image.setAttribute('src', `images/${towndata[i].photo}`)
      image.setAttribute('atl', `${towndata[i].name} photography`)

      textContainer.appendChild(h2);
      textContainer.appendChild(motto);
      textContainer.appendChild(ul);
      ul.appendChild(yearFounded);
      ul.appendChild(currentPopulation);
      ul.appendChild(averageRainfall);
      card.appendChild(textContainer);
      card.appendChild(image);

      document.querySelector('div.cards').appendChild(card);
    }
  })
