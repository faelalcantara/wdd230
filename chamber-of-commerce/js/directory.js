function createCard(object) {
  let card = document.createElement('div');
  card.classList.add('member-card');

  let h3 = document.createElement('h3');
  h3.textContent = object.name;

  let address = document.createElement('div');
  address.classList.add('address');
  address.textContent = object.address;

  let phone = document.createElement('div');
  phone.classList.add('phone');
  phone.textContent = object.phoneNumber;

  let website = document.createElement('div');
  website.classList.add('website');
  website.textContent = `Website: ${object.website}`;

  card.appendChild(h3);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(website);

  document.querySelector('#info-container').appendChild(card);
}

function createTable() {
  let table = document.createElement('table');
  table.classList.add('data-table')
  let thead = document.createElement('thead');
  let row1 = document.createElement('tr');
  let th1 = document.createElement('th');
  th1.setAttribute('colspan', 4)
  th1.textContent = "Members List"
  row1.appendChild(th1);
  thead.appendChild(row1);
  
  let row2 = document.createElement('tr');
  let th2 = document.createElement('th');
  th2.textContent = "Company Name";
  let th3 = document.createElement('th');
  th3.textContent = "Address";
  let th4 = document.createElement('th');
  th4.textContent = "Phone Number";
  let th5 = document.createElement('th');
  th5.textContent = "Website";
  
  row2.appendChild(th2);
  row2.appendChild(th3);
  row2.appendChild(th4);
  row2.appendChild(th5);
  thead.appendChild(row2);

  let tbody = document.createElement('tbody');
  
  table.appendChild(thead);
  table.appendChild(tbody);

  document.querySelector('#info-container').appendChild(table);
}

function createTableRowIncident(object) {
  let tr = document.createElement('tr');
  let td1 = document.createElement('td');
  td1.textContent = object.name;
  let td2 = document.createElement('td');
  td2.textContent = object.address;
  let td3 = document.createElement('td');
  td3.textContent = object.phoneNumber;
  let td4 = document.createElement('td');
  td4.textContent = object.website;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  document.querySelector("tbody").appendChild(tr);
}

function outputCards() {
  document.querySelector('#info-container').innerHTML = ''
  
  const url = 'json/directory.json'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let members = data["members"];
    
      for (let i = 0; i < members.length; i++) {
				createCard(members[i]);
			}
    });
}

function outputList() {
  document.querySelector('#info-container').innerHTML = ''
  
  const url = 'json/directory.json'
  fetch(url)
    .then(response => response.json())
    .then(data => {
      let members = data["members"];
      
      createTable();
      for (let i = 0; i < members.length; i++) {
				createTableRowIncident(members[i]);
			}
    });
}

// Start diplaying cards by default
outputCards()



