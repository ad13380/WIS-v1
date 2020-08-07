class ProfileList {
  constructor(profileClass = Profile) {
    this.profileClass = profileClass;
    this._profileArray = [];
    this.profileId = 0;
  }

  async populate(profileListJSON) {
    profileListJSON.forEach(profileJSON => {
      const profile = new this.profileClass(profileJSON, this.profileId);
      this._profileArray.push(profile);
      this.profileId++;
    })
  }

  get profileArray() {
    return this._profileArray;
  }
}