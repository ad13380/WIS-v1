const ProfileListView = require('../public/javascripts/profileListView.js');
const ProfileList = require('../public/javascripts/profileListModel.js');
jest.mock('../public/javascripts/profileListModel.js');


describe("ProfileListView", () =>  {
  let profileListView
  let profileList
  let profileArrayMockProfiles

  beforeEach(() => {
    profileArrayMockProfiles = [...Array(3).keys()].map(index => {
      return {
        id  : index,
        name : `astronaut name ${index}`,
        title : `astronaut title ${index}`,
        bioImage : `portrait photo url ${index}`,
        flagImage : `flag image url ${index}`,
      }
    });

    ProfileList.mockImplementation(() => {
      return {
        profileArray : profileArrayMockProfiles,
      }
    })

    profileList = new ProfileList()
    profileListView = new ProfileListView(profileList)
  });

  // this will need to be updated as features are added
  it("should return the correct card list html for every profile", () => {
    let expectedResult = [...Array(3).keys()].reduce((acc, val) => {
      return acc + `
      <div class="col-sm-6 col-md-4 p-3">
        <a href="#" class="card background-colour zoom" data-toggle="modal" data-target="#modal-profile-id-${val}">
          <img class="card-img-top mask1" src=portrait photo url ${val} alt="astronaut thumbnail">
          <div class="card-img-overlay">
            <img class="mb-auto shadow" style="height: 30px; width: auto; align-self: start" src=flag image url ${val}>
          </div>
          <div class="card-body card-img-overlay d-flex flex-wrap align-content-end">
            <div class="break"></div>
            <p class="h4 mt-auto mb-0 flex-grow-1 text-overflow text-white">astronaut name ${val}</p>
            <div class="break"></div>
            <p class="flex-grow-1 mb-0 text-overflow text-white">astronaut title ${val}</p>
          </div>
        </a>
      </div>
      `
    }, "")
    
    expect(profileListView.getHtml()).toEqual(expectedResult);
  });
})