window.addEventListener(`DOMContentLoaded`, async function (event) {
  let controller = new Controller()

  document.getElementById('preview-list').innerHTML = '<h1>Loading</h1>'
  document.getElementById('preview-list').innerHTML = await controller.returnListHtml();
  
  controller.profileIds.forEach(id => {
    let node = document.createElement("DIV");
    node.innerHTML = controller.returnProfileHtml(id);
    document.getElementById('profile-modal').appendChild(node);
  })
})