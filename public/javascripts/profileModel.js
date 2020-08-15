class Profile {
  constructor(profileJSON, id = null) {
    this.profileJSON = profileJSON;
    this._id = id;
  }

  get id() { 
    return this._id;
  }

  get name() { 
    return this.profileJSON.name;
  }

  get title() {
    return this.profileJSON.title;    
  }

  get description() {
    return this.profileJSON.astroDescription;
  }

  get craft() {
    return this.profileJSON.location;    
  }

  get flagImage() {
    return this.profileJSON.countryflag;    
  }

  get bioImage() {
    if (!this.profileJSON.biophoto) {
      // add placeholder image
      return;
    }
    return this.profileJSON.biophoto;    
  }

  get daysInSpace() {
    const parts = this.profileJSON.launchdate.split('-');
    const launchDate = new Date(parseInt(parts[0]), parseInt(parts[1] - 1), parseInt(parts[2]));
    return Math.floor((new Date() - launchDate) / (1000 * 60 * 60 * 24));
  }
}