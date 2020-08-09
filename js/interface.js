window.addEventListener(`DOMContentLoaded`, async function (event) {
  let controller = new Controller()

  document.getElementById('preview-list').innerHTML = await controller.returnListHtml();
  
  // this will require event delegation
  controller.profileIds.forEach(id => {
    var node = document.createElement("DIV");
    node.innerHTML = controller.returnProfileHtml(id);
    document.getElementById('profile-modal').appendChild(node);
  })
})