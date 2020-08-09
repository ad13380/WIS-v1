class ProfileListView {
  constructor(profileList) {
    this.profileList = profileList;
  }

  getHtml() {
    return this.profileList.profileArray.reduce((acc, val) => {
      return acc += `
      <div class="col-md-4">
        <div class="card" style="border-radius: 15px;  overflow: hidden;">
          <img class="card-img-top" src=${val.bioImage} alt="astronaut thumbnail">
          <div class="card-body">
            <p class="card-text">
              <p class="h4">${val.name}</p>
              <img src=${val.flagImage}>
              <span>${val.title}</span>
              <p>${val.craft}</p>
              <p>Days in Space: ${val.daysInSpace}</p>
            </p>
          </div>

          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-profile-id-${val.id}">
            Temporary button
          </button>


        </div>
      </div>
      `;
    }, '');
  }
}