class ProfileListView {
  constructor(profileList) {
    this.profileList = profileList;
  }

  getHtml() {
    return this.profileList.profileArray.reduce((acc, val) => {
      return acc += `
      <div class="card" style="border-radius: 15px;">
      <img class="card-img-top" src=${val.bioImage} alt="astronaut thumbnail" style="border-radius: 15px 15px 0px 0px;">
        <div class="card-body">
          <p class="card-text">
            <p class="h4">${val.name}</p>
            <img src=${val.flagImage}>
            <span>${val.title}</span>
            <p>${val.craft}</p>
            <p>Days in Space: ${val.daysInSpace}</p>
          </p>
        </div>
      </div>
      `;
    }, '');
  }
}