class ProfileView {
  constructor(profile) {
    this.profile = profile;
  }

  getHtml() {
    return `    
      <!-- Modal ${this.profile.name}-->
      <div class="modal fade" id="modal-profile-id-${this.profile.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">${this.profile.name}</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              ${this.profile.description}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

module.exports = ProfileView;