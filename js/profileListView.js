class ProfileListView {
  constructor(profileList) {
    this.profileList = profileList;
  }

  getHtml() {
    return this.profileList.profileArray.reduce((acc, val) => {
      return acc += `
      <div class="col-md-4 p-3">
        <a href="#" class="card background-colour zoom" data-toggle="modal" data-target="#modal-profile-id-${val.id}">
          <img class="card-img-top mask1" src=${val.bioImage} alt="astronaut thumbnail">
          <div class="card-img-overlay">            
            <img class="mb-auto shadow" style="height: 30px; width: auto; align-self: start" src=${val.flagImage}>
          </div>
          <div class="card-body card-img-overlay d-flex flex-wrap align-content-end">
            <div class="break"></div>
            <p class="h4 mt-auto mb-0 flex-grow-1 text-overflow text-white">${val.name}</p>
            <div class="break"></div>
            <p class="flex-grow-1 mb-0 text-overflow text-white">${val.title}</p>
          </div>
        </a>
      </div>
      `;
    }, '');
  }
}