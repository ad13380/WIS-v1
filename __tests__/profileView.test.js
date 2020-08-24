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
        daysInSpace : 100,
        careerDays : 200,
        launchDate : "2020-04-09",
        readMoreLink : "read more url"
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
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">astronaut name</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-4 d-none d-sm-block">
                    <div class="row">
                      <img class="card m-1" src=portrait photo url alt="astronaut thumbnail" style="max-width:100%; max-height:100%;">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-8">
                    <div class="ml-2">
                      <div class="row"> <p class="ml-1"> a description of the astronaut </p> </div>
                      <div class="row"> <span class="font-weight-bold"> Position </span> </div>
                      <div class="row"> <span class="font-italic"> astronaut title </span> </div>
                      <div class="row"> <span class="font-weight-bold"> Spacecraft </span> </div>
                      <div class="row"> <span class="font-italic"> spacecraft </span> </div>
                      <div class="row"> <span class="font-weight-bold"> Days in Space </span> </div>
                      <div class="row">
                        <span class="font-italic mr-1"> 100 </span>
                        <span class="font-weight-light"> (launched on 2020-04-09) </span>
                      </div>
                      <div class="row"> <span class="font-weight-bold"> Career Days </span> </div>
                      <div class="row"> <span class="font-italic"> 200 </span> </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <a class="btn btn-primary" href="read more url" role="button" style="border-radius: 30px;">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `
    expect(profileView.getHtml()).toEqual(expectedResult);
  })
})