const astrosUrl = 'https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json'
const corsProxyUrl = 'https://cors-anywhere.herokuapp.com/'
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

const mockData =      {
  "number" : 3,
  "people" : [ 
     {
      "name" : "Chris Cassidy",
      "biophoto" : "http://howmanypeopleareinspacerightnow.com/app/biophotos/chris-cassidy.jpg",
      "biophotowidth" : 640,
      "biophotoheight" : 800,
      "country" : "usa",
      "countryflag" : "http://howmanypeopleareinspacerightnow.com/app/flags/flag-usa.jpg",
      "launchdate" : "2020-04-09",
      "careerdays" : 183,
      "title" : "Commander",
      "location" : "International Space Station",
      "bio" : "Chris is a BEAST. This native to York Maine is a former NAVY SEAL (11 years) who was deployed 4 times and earned a bronze star in the process. Fun fact: Chris was the 500th human to enter space!",
      "biolink" : "https://www.nasa.gov/astronauts/biographies/christopher-j-cassidy/biography",
      "twitter" : "https://twitter.com/Astro_SEAL"
    },
     {
      "name" : "Anatoly Ivanishin",
      "biophoto" : "http://howmanypeopleareinspacerightnow.com/app/biophotos/anatoly-ivanishin.jpg",
      "biophotowidth" : 640,
      "biophotoheight" : 800,
      "country" : "russia",
      "countryflag" : "http://howmanypeopleareinspacerightnow.com/app/flags/flag-russia.jpg",
      "launchdate" : "2020-04-09",
      "careerdays" : 281,
      "title" : "Flight Engineer",
      "location" : "International Space Station",
      "bio" : "This is Anatoly’s 3rd trip to space which, once complete, will push his career days in space too well over a year!",
      "biolink" : "https://en.wikipedia.org/wiki/Anatoli_Ivanishin",
      "twitter" : ""
    },
     {
      "name" : "Ivan Vagner",
      "biophoto" : "http://howmanypeopleareinspacerightnow.com/app/biophotos/ivan-vagner.jpg",
      "biophotowidth" : 640,
      "biophotoheight" : 800,
      "country" : "russia",
      "countryflag" : "http://howmanypeopleareinspacerightnow.com/app/flags/flag-russia.jpg",
      "launchdate" : "2020-04-09",
      "careerdays" : 0,
      "title" : "Flight Engineer",
      "location" : "International Space Station",
      "bio" : "This is Ivan’s first trip to space! He is an engineer by trade that completed spaceflight training in 2012. ",
      "biolink" : "https://en.wikipedia.org/wiki/Ivan_Vagner",
      "twitter" : ""
    }
  ]
}

// Handle all fetch requests
async function getPeopleInSpace(url) {
  const peopleJSON = mockData//await getJSON(url)

  const profiles = peopleJSON.people.map( async (person) => {
    const profileJSON = await getJSON(wikiUrl + person.name);
    const description = profileJSON.extract;
    return { description, ...person };
  });
  return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
  data.map( person => {
    const section = document.createElement('section');
    peopleList.appendChild(section);
    section.innerHTML = `
      <img src=${person.biophoto}>
      <img src=${person.countryflag}>
      <span>${person.location}</span>
      <h2>${person.name}</h2>
      <p>${person.title}</p>
      <p>Days in Space: ${calcDaysInSpace(person.launchdate)}</p>
    `;
  });
}

function calcDaysInSpace(dateString) {
  const parts = dateString.split('-');
  const launchDate = new Date(parseInt(parts[0]), parseInt(parts[1] - 1), parseInt(parts[2]));
  return Math.floor((new Date() - launchDate) / (1000 * 60 * 60 * 24));
}

window.addEventListener('DOMContentLoaded', async () => {
  getPeopleInSpace(corsProxyUrl + astrosUrl)
    .then(generateHTML)
    .catch( () => {
      peopleList.innerHTML = '<h3>Something went wrong!</h3>'
    })
});