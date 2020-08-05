const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');

async function getJSON(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    throw error;
  }
}

// Handle all fetch requests
async function getPeopleInSpace(url) {
  const peopleJSON = await getJSON(url)

  const profiles = peopleJSON.people.map( async (person) => {
    console.log(person)
    // const craft = person.craft;
    // const profileJSON = await getJSON(wikiUrl + person.name);

    // return { ...profileJSON, craft };
  });

  // return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
      <img src=${person.thumbnail.source}>
      <span>${person.craft}</span>
      <h2>${person.title}</h2>
      <p>${person.description}</p>
      <p>${person.extract}</p>
    `;
  });
}

window.addEventListener('DOMContentLoaded', async () => {
  const url = 'https://cors-anywhere.herokuapp.com/https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json'
  const peopleJSON = await getPeopleInSpace(url)
  console.log(peopleJSON)


  // getPeopleInSpace(astrosUrl)
  //   .then(generateHTML)
  //   .catch( () => {
  //     peopleList.innerHTML = '<h3>Something went wrong!</h3>'
  //   })
});