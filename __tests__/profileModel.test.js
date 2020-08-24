const Profile = require('../public/javascripts/profileModel.js');

describe("Profile", () => {
  let profile
  let profileJSON = {
    "name" : "astronaut name",
    "biophoto" : "portrait photo",
    "countryflag" : "flag url",
    "launchdate" : "2020-04-09",
    "careerdays" : 100,
    "title" : "astronaut title",
    "location" : "spacecraft",
    "biolink" : "read more url",
    "twitter" : "twitter url",
    "astroDescription"  : "a description of the astronaut"
  }

  beforeEach(() => {
    profile = new Profile(profileJSON);
  });

  it("should have a default id of null", () => {
    expect(profile.id).toEqual(null)
  });

  it("should return the astronaut's number of career days", () => {
    expect(profile.careerDays).toEqual(100)
  });

  it("should return the astronaut's laumch date", () => {
    expect(profile.launchDate).toEqual("2020-04-09")
  });

  it("should calulcate days in space", () => {
    const spy = jest
      .spyOn(global.Date, 'now')
      .mockImplementation(() => new Date(2020, 7, 14).valueOf())
    expect(profile.daysInSpace).toEqual(127)
    spy.mockRestore()
  });

  it("should return the astronaut's name", () => {
    expect(profile.name).toEqual('astronaut name')
  });

  it("should return the astronaut's title", () => {
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

  it("should return the astronaut's read more url", () => {
    expect(profile.readMoreLink).toEqual('read more url')
  });

  describe("if data fields are missing", () => {
    beforeEach(() => {
      profileJSON.astroDescription = ""
      profileJSON.biophoto = ""
      profile = new Profile(profileJSON);
    });

    it("should return a placeholder portrait photo", () => {
      expect(profile.bioImage).toEqual('/images/bio-placeholder.png')
    });

    it("should return a placeholder description", () => {
      expect(profile.description).toEqual('astronaut name launched on 2020-04-09 and has been aboard the spacecraft for 137 day(s)')
    });
  })
});