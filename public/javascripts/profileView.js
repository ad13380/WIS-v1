class ProfileView {
  constructor(profile) {
    this.profile = profile;
  }

  getHtml() {
    return `
      <!-- Modal ${this.profile.name}-->
      <div class="modal fade" id="modal-profile-id-${this.profile.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${this.profile.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="container-fluid">
                <div class="row">
                  <div class="col-sm-4 d-none d-sm-block">
                    <div class="row">
                      <img class="card m-1" src=${this.profile.bioImage} alt="astronaut thumbnail" style="max-width:100%; max-height:100%;">
                    </div>
                  </div>
                  <div class="col-xs-12 col-sm-8">
                    <div class="ml-2">
                      <div class="row"> <p class="ml-1"> ${this.profile.description} </p> </div>
                      <div class="row"> <span class="font-weight-bold"> Position </span> </div>
                      <div class="row"> <span class="font-italic"> ${this.profile.title} </span> </div>
                      <div class="row"> <span class="font-weight-bold"> Spacecraft </span> </div>
                      <div class="row"> <span class="font-italic"> ${this.profile.craft} </span> </div>
                      <div class="row"> <span class="font-weight-bold"> Days in Space </span> </div>
                      <div class="row"> 
                        <span class="font-italic mr-1"> ${this.profile.daysInSpace} </span> 
                        <span class="font-weight-light"> (launched on ${this.profile.launchDate}) </span> 
                      </div>
                      <div class="row"> <span class="font-weight-bold"> Career Days </span> </div>
                      <div class="row"> <span class="font-italic"> ${this.profile.careerDays} </span> </div>
                    </div>
                  </div>
                </div>
                <div class="row justify-content-center">
                  <a class="btn btn-primary" href="${this.profile.readMoreLink}" role="button" style="border-radius: 30px;">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

module.exports = ProfileView;
