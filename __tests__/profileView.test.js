const ProfileView = require('../public/javascripts/profileView.js');
const Profile = require('../public/javascripts/profileModel.js');
jest.mock('../public/javascripts/profileModel.js')

describe("ProfileView", ()  => {
  let profileView
  let profile

  beforeEach(() => {
    Profile.mockImplementation(() => {
      return {
        id : 0,
        name : "astronaut name",
        title : "astronaut title",
        description : "a description of the astronaut",
        craft : "spacecraft",
        flagImage : "flag url",
        bioImage : "portrait photo url",
        daysInSpace : 100
      }
    })
    profile = new Profile()
    profileView = new ProfileView(profile)
  });

  // this will need to be updated as features are added
  it("should return the correct modal window html for each profile", () => {
    let expectedResult = `
      <!-- Modal astronaut name-->
      <div class="modal fade" id="modal-profile-id-0" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">astronaut name</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              a description of the astronaut
            </div>
          </div>
        </div>
      </div>
    `
    expect(profileView.getHtml()).toEqual(expectedResult);
  })
})