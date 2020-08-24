class Controller {
  constructor(profileClass = Profile, profileViewClass = ProfileView, profileListClass = ProfileList, profileListViewClass = ProfileListView, loading = new Loading()) {
    this.corsProxyUrl = 'https://wis-proxy.herokuapp.com/'
    this.wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
    this.profileList = new profileListClass(profileClass);
    this.profileViewClass  = profileViewClass;
    this.profileListViewClass = profileListViewClass;
    this.loading = loading
  }
  
  async returnListHtml() {
    await this._populateProfileList();
    const profileListView = new this.profileListViewClass(this.profileList);
    return profileListView.getHtml();
  }

  returnProfileHtml(id) {
    const profile = this._getProfileById(id)
    const profileView = new this.profileViewClass(profile)
    return profileView.getHtml();
  }

  returnLoadingHtml() {
    return this.loading.getHtml();
  }

  get profileIds() {
    return this.profileList.profileArray.map(profile => profile.id)
  }

  _getProfileById(id) {
    return this.profileList.profileArray.filter(profile => profile.id === id)[0];
  }

  async _populateProfileList() {
    const profileListJSON = await this._getPeopleInSpace();
    this.profileList.populate(profileListJSON);
  }

  async _getPeopleInSpace() {
    const astroJSON = mockData;//await this._getJSON(this.corsProxyUrl); // 
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

module.exports = Controller;