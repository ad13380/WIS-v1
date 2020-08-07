window.addEventListener(`DOMContentLoaded`, async function (event) {
  let controller = new Controller()

  document.getElementById('people').innerHTML = await controller.returnListHtml();
})