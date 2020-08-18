const ProfileList = require('../public/javascripts/profileListModel.js');
const Profile = require('../public/javascripts/profileModel.js');
jest.mock('../public/javascripts/profileModel.js');

describe("ProfileList", () => {
  let profileList
  let profileListJSON = [...Array(5).keys()].map( index => {
    return {
      "name" : `astronaut name ${index}`,
      "biophoto" : `portrait photo ${index}`,
      "biophotowidth" : 100,
      "biophotoheight" : 100,
      "countryflag" : `flag url ${index}`,
      "launchdate" : `2020-04-${index}`,
      "title" : `astronaut title ${index}`,
      "location" : `spacecraft ${index}`,
      "biolink" : `bio url ${index}`,
      "twitter" : `twitter url ${index}`,
      "astroDescription"  : `a description of the astronaut ${index}`
    }
  })

  beforeEach(() => {
    Profile.mockClear();
    profileList = new ProfileList(Profile);
  });

  it("should return an empty profile array by default", () => {
    expect(profileList.profileArray).toEqual([]);
  });

  it("should create a Profile instance for each JSON item", () => {
    profileList.populate(profileListJSON);
    profileList.profileArray.forEach(profile => {
      expect(profile).toBeInstanceOf(Profile)
    })
  })

  it("should assign an ID for each Profile instance", () => {
    profileList.populate(profileListJSON);
    Profile.mock.calls.forEach( (mockInstance, id) => {
      expect(mockInstance[1]).toEqual(id)
    })
  })
})