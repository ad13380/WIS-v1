const Profile = require('../public/javascripts/profileModel.js');

describe("Profile", () => {
  let profile
  let profileJSON =      {
    "name" : "atronaut name",
    "biophoto" : "portrait photo",
    "biophotowidth" : 100,
    "biophotoheight" : 100,
    "countryflag" : "flag url",
    "launchdate" : "2020-04-09",
    "title" : "astronaut title",
    "location" : "craft location",
    "biolink" : "bio url",
    "twitter" : "twitter url",
    "astroDescription"  : "a description of the atronaut"
  }

  beforeEach(() => {
    profile = new Profile(profileJSON)
  });

  it("should have a default id of null", () => {
    expect(profile.id).toEqual(null)
  });

  it("should calulcate days in space", () => {
    //const parts = ["2020", "04", "09"]
    //const launchDate = new Date(parseInt(parts[0]), parseInt(parts[1] - 1), parseInt(parts[2]));
    //console.log(Math.floor(new Date(2020, 4, 9) - launchDate) / (1000 * 60 * 60 * 24))
    profile.daysInSpace
    const mockDate = new Date(2020, 7, 16, 3, 24, 0)
    const spy = jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate)
    
    console.log(profile.daysInSpace)
    spy.mockRestore()
  });
});