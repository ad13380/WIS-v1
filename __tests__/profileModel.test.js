const Profile = require('../public/javascripts/profileModel.js');

describe("Profile", () => {
  let profile
  let profileJSON =      {
    "name" : "astronaut name",
    "biophoto" : "portrait photo",
    "biophotowidth" : 100,
    "biophotoheight" : 100,
    "countryflag" : "flag url",
    "launchdate" : "2020-04-09",
    "title" : "astronaut title",
    "location" : "spacecraft",
    "biolink" : "bio url",
    "twitter" : "twitter url",
    "astroDescription"  : "a description of the astronaut"
  }

  beforeEach(() => {
    profile = new Profile(profileJSON)
  });

  it("should have a default id of null", () => {
    expect(profile.id).toEqual(null)
  });

  it("should calulcate days in space", () => {
    const spy = jest
      .spyOn(global.Date, 'now')
      .mockImplementation(() => new Date(2020, 7, 14).valueOf())
    expect(profile.daysInSpace).toEqual(127)
    spy.mockRestore()
  });

  it("should return the astronauts name", () => {
    expect(profile.name).toEqual('astronaut name')
  });

  it("should return the astronauts title", () => {
    expect(profile.title).toEqual('astronaut title')
  });

  it("should return a description about the astronaut", () => {
    expect(profile.description).toEqual('a description of the astronaut')
  });

  it("should return the name of the astronaut's craft", () => {
    expect(profile.craft).toEqual('spacecraft')
  });

  it("should return the astronaut's country flag url", () => {
    expect(profile.flagImage).toEqual('flag url')
  });

  it("should return the astronaut's portrait photo url", () => {
    expect(profile.bioImage).toEqual('portrait photo')
  });

  describe("if data fields are missing", () => {
    xit("should return a placeholder photo", () => {
      // feature not yet implemented
    })

    xit("should return a placeholder descripion", () => {
      // feature not yet implemented
    })
  })
});