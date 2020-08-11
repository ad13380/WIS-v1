class ProfileListView {
  constructor(profileList) {
    this.profileList = profileList;
  }

  getHtml() {
    return this.profileList.profileArray.reduce((acc, val) => {
      return acc += `
      <div class="col-md-4 p-3">
        <a href="#" class="card background-colour" data-toggle="modal" data-target="#modal-profile-id-${val.id}">
          <img class="card-img-top mask1" src=${val.bioImage} alt="astronaut thumbnail">
          <div class="card-body card-img-overlay d-flex">
            <img class="mt-auto align-self-center" style="height: 30px; width: auto;" src=${val.flagImage}>
            <span class="ml-2 my-1 h4 mt-auto flex-grow-1 text-overflow text-white">${val.name}</span>
          </div>
        </a>
      </div>
      `;
    }, '');
  }
}