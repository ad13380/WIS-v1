class Controller {
  constructor(profileList = new ProfileList(), profileListViewClass = ProfileListView) {
    this.astrosUrl = 'https://www.howmanypeopleareinspacerightnow.com/peopleinspace.json'
    this.corsProxyUrl = 'https://cors-anywhere.herokuapp.com/'
    this.wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    this.profileList = profileList;
    this.profileListViewClass = profileListViewClass;
  }
  
  async returnListHtml() {
    await this._populateList();
    const profileListView = new this.profileListViewClass(this.profileList);
    return profileListView.getHtml();
  }

  async _populateList() {
    const profileListJSON = await this._getPeopleInSpace();
    this.profileList.populate(profileListJSON);
  }

  async _getPeopleInSpace() {
    const astroJSON = mockData // await _getJSON(this.astrosUrl);
    const profileListJSON = astroJSON.people.map(async (astro) => {
      const wikiJSON = await this._getJSON(this.wikiUrl + astro.name);
      const astroDescription = wikiJSON.extract;
      return { astroDescription, ...astro };
    });
    return Promise.all(profileListJSON);
  }

  async _getJSON(url) {
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}