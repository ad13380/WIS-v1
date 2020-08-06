class ProfileList {
  constructor() {
    this.profileArray = [];
    this.profileId = 0;
  }

  populateList(profiles) {
    profiles.forEach(profileJSON => {
      const profile = new Profile(profileJSON, this.profileId);
      this.profileArray.push(profile);
      this.profileId++;
    })
  }
}